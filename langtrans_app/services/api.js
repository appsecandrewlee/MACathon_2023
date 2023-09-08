const BACKEND_URL = 'http://your-backend-url.com';

export const sendImageToServer = async (imageUri) => {
  let formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    type: 'image/jpeg', // or png, etc.
    name: 'image.jpg' // or .png, etc.
  });

  try {
    const response = await fetch(`${BACKEND_URL}/upload/`, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error uploading the image:", error);
  }
};
