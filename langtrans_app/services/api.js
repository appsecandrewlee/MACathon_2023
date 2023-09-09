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

export const handleSignUp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000", {
        email: form.email,
        password: form.password,
      });

      if (response.data && response.data.uid) {
        Alert.alert("Success!", "Account created successfully.");
      } else {
        Alert.alert("Error", "Failed to create account.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

 export const verifyUserToken = async (token) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/verify-token/", {
        id_token: token,
      });

      if (response.data && response.data.uid) {
        console.log("Verified UID:", response.data.uid);
        // Handle successful verification
      } else {
        console.log("Token verification failed.");
        // Handle failed verification
      }
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };
