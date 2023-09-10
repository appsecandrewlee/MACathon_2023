import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import storageService from '../services/storageService'; // <- Import storageService
export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const [translatedText, setTranslatedText] = useState("");
  const [isTextVisible, setIsTextVisible] = useState(true);
  const navigation = useNavigation();


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  const captureImage = async () => {
    const uid = await storageService.getUID();
    console.log("Capture button pressed");

    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log("photo", photo);

      let formData = new FormData();
      formData.append("file", {
        uri: photo.uri,
        type: "image/jpeg", // or photo.type
        name: "upload.jpg",
      });

      console.log(uid);
      formData.append("uid", uid);


      fetch("http://118.138.85.230:8000/upload/", {
        method: 'POST',
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          console.log("Server Response:", data);
          setTranslatedText(data.translated);

          console.log("Navigating to Definition");
          navigation.navigate('Result', { translatedText: data.original, capturedText: data.translated});
        })
        .catch((error) => {
          console.error("There was an error uploading the photo.", error);
        });
    }
  };


  return (
    <View style={{ flex: 1, backgroundColor: "rgba(255, 160, 160, 0.5)" }}>
      <Camera style={{ flex: 1 }} ref={cameraRef} />

      <View
        style={{
          position: "absolute",
          bottom: 50, // Adjusted to make space for the translated text
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={captureImage}>
          <Text style={{ fontSize: 18, color: "white" }}>Capture</Text>
        </TouchableOpacity>

        {/* Display the translated text below the Capture button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Definition')
            setIsTextVisible(!isTextVisible);
          }}
        >
          {isTextVisible && <Text style={{ fontSize: 16, color: 'white', marginTop: 20 }}>{translatedText}</Text>}
        </TouchableOpacity>

      </View>
    </View>
  );

}