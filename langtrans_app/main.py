from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import cv2
import numpy as np
from google.cloud import translate as translate
from google.cloud import texttospeech
# from google.cloud import vision
from firebase_admin import credentials, firestore, initialize_app
from firebase_admin import auth
from fastapi import HTTPException
from fastapi import Body

from pydantic import BaseModel

class LoginData(BaseModel):
    email: str
    password: str


app = FastAPI()

# Initialize Firebase Admin
cred = credentials.Certificate("/Users/vellichastrxism/Desktop/Macathon/MACathon_2023/langtrans_app/macathon2023-27687-firebase-adminsdk-t5le9-d7a6865b5b.json")
initialize_app(cred)
db = firestore.client()
print(db)


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

@app.post("/store-user-data/")
def store_user_data(uid: str, email: str,password: str):
    db = firestore.client()
    user_ref = db.collection(u'users').document(uid)
    user_ref.set({
        u'email': email,
        u'password': password
    })
    return {"status": "success"}



@app.post("/")
def sign_up(email: str = Body(...), password: str = Body(...)):
    try:
        # Create a new user using Firebase Authentication
        user = auth.create_user(
            email=email,
            password=password
        )
        return {"message": "Account created successfully", "uid": user.uid}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.post("/login/")
def login(data: LoginData):
    hardcoded_email = "alee0050@student.monash.edu"
    hardcoded_password = "testpassword"

    if data.email != hardcoded_email or data.password != hardcoded_password:
        raise HTTPException(status_code=400, detail="Incorrect email or password")

    return {"message": "Login successful!"}


@app.get("/test-firestore/")
def test_firestore():
    try:
        doc_ref = db.collection(u'test_collection').document(u'test_document')
        doc = doc_ref.get()
        if doc.exists:
            return {"data": doc.to_dict()}
        else:
            return {"error": "Document does not exist"}
    except Exception as e:
        return {"error": str(e)}

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



# Initialize Google Translate
def translate_text(
    text: str = "YOUR_TEXT_TO_TRANSLATE", project_id: str = "macathon2023-27687"
) -> translate.TranslationServiceClient:
    """Translating Text."""

    client = translate.TranslationServiceClient()

    location = "global"

    parent = f"projects/{project_id}/locations/{location}"

    # Translate text from English to French
    # Detail on supported types can be found here:
    # https://cloud.google.com/translate/docs/supported-formats
    response = client.translate_text(
        request={
            "parent": parent,
            "contents": [text],
            "mime_type": "text/plain",  # mime types: text/plain, text/html
            "source_language_code": "en-US",
            "target_language_code": "fr",
        }
    )

    # Display the translation for each input text provided
    for translation in response.translations:
        print(f"Translated text: {translation.translated_text}")

    return response


def detect_language(text: str) -> dict:
    """Detects the text's language."""
    from google.cloud import translate_v2 as translate
    translate_client = translate.Client()

    # Text can also be a sequence of strings, in which case this method
    # will return a sequence of results for each text.
    result = translate_client.detect_language(text)

    print(f"Text: {text}")
    print("Confidence: {}".format(result["confidence"]))
    print("Language: {}".format(result["language"]))

    return result


print(translate_text("My name is Johnny"))
print(detect_language("Halo nama saya"))
