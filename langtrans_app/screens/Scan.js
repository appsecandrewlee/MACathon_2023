import React, { useState, useRef } from 'react';
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
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} ref={cameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: 20,
          }}>
          <TouchableOpacity
            onPress={captureImage}
            style={{ alignSelf: 'center' }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              Capture
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
