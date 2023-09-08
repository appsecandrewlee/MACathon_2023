from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
from google.cloud import translate_v2 as translate
from firebase_admin import credentials, firestore, initialize_app
from firebase_admin import auth

app = FastAPI()

# Initialize Firebase Admin
cred = credentials.Certificate("/Users/vellichastrxism/Desktop/Macathon/MACathon_2023/langtrans_app/macathon2023-27687-firebase-adminsdk-t5le9-d7a6865b5b.json")
initialize_app(cred)
db = firestore.client()

# Initialize Google Translate
# translate_client = translate.Client()
origins = [
    "http://localhost:19006",  # This is the typical port for React apps
    # Add other origins (frontend URLs) if needed
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/verify-token/")
def verify_token(id_token: str):
    try:
        decoded_token = auth.verify_id_token(id_token)
        uid = decoded_token['uid']
        return {"uid": uid}
    except ValueError:
        return {"error": "Invalid token"}


@app.post("/upload/")


async def upload_image(file: UploadFile = File(...)):
    image_stream = await file.read()
    image_np = np.fromstring(image_stream, np.uint8)
    image = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
    
    # Extract text from the image using OpenCV and Tesseract (you'll need additional configurations here)
    # text = ...
    
    # Translate the text (for this example, translating to English)
    result = translate_client.translate(text, target_language="en")
    translated_text = result['translatedText']

    # Store the original and translated text in Firestore
    doc_ref = db.collection(u'translations').add({
        u'original': text,
        u'translated': translated_text
    })

    return {"original": text, "translated": translated_text}
