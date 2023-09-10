import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import storageService from '../services/storageService';
import * as ImageManipulator from 'expo-image-manipulator';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
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

      // Define the size of the crop area
      const cropSize = 200;

      // Calculate the positions for the crop
      const x = (photo.width - cropSize) / 2;
      const y = (photo.height - cropSize) / 2;

      // Crop the image using ImageManipulator
      let croppedPhoto = await ImageManipulator.manipulateAsync(
        photo.uri,
        [{ crop: { originX: x, originY: y, width: cropSize, height: cropSize }}]
      );

      let formData = new FormData();
      formData.append("file", {
        uri: croppedPhoto.uri,
        type: "image/jpeg",
        name: "upload.jpg",
      });

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
          navigation.navigate('Results', { translatedText: data.original, capturedText: data.translated });
        })
        .catch((error) => {
          console.error("There was an error uploading the photo.", error);
        });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(255, 160, 160, 0.5)" }}>
      <Camera style={{ flex: 1 }} ref={cameraRef} />

      {/* Drawing the Square */}
      <View style={{
        borderColor: 'white',
        borderWidth: 2,
        width: 200,
        height: 200,
        alignSelf: 'center',
        position: 'absolute',
        top: '50%',
        marginTop: -100,
        marginLeft: -100,
      }}/>
      
      <View
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={captureImage}>
          <Text style={{ fontSize: 18, color: "white" }}>Capture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
