from fastapi import FastAPI, UploadFile, File
import cv2
import numpy as np
from google.cloud import translate_v2 as translate
from firebase_admin import credentials, firestore, initialize_app

app = FastAPI()

# Initialize Firebase Admin
cred = credentials.Certificate("path_to_your_firebase_serviceAccountKey.json")
initialize_app(cred)
db = firestore.client()

# Initialize Google Translate
translate_client = translate.Client()
def translate_text(text="Hello, world!", project_id="macathon2023-27687"):

    client = translate.TranslationServiceClient()
    location = "global"
    parent = f"projects/{project_id}/locations/{location}"

    response = client.translate_text(
        request={
            "parent": parent,
            "contents": [text],
            "mime_type": "text/plain",
            "source_language_code": "en-US",
            "target_language_code": "es",
        }
    )

    for translation in response.translations:
        print("Translated text: {}".format(translation.translated_text))


def detect_language(text: str) -> dict:
    """Detects the text's language."""
    translate_client = translate.Client()

    # Text can also be a sequence of strings, in which case this method
    # will return a sequence of results for each text.
    result = translate_client.detect_language(text)

    print(f"Text: {text}")
    print("Confidence: {}".format(result["confidence"]))
    print("Language: {}".format(result["language"]))

    return result


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
