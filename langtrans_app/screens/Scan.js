import React, { useState, useRef, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const captureImage = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log('photo', photo);
      // Send the photo to your backend for processing with OpenCV
      // fetch(backendURL, { method: 'POST', body: photo.uri ... });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'rgba(255, 160, 160, 0.5)' }}>  
      <Camera style={{ flex: 1 }} ref={cameraRef} />

      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: 0,
          right: 0,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={captureImage}>
          <Text style={{ fontSize: 18, color: 'white' }}>Capture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
