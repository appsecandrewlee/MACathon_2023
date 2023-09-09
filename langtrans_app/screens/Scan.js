import React, { useState, useRef, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

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

      fetch("http://118.138.85.230:8000/upload", {
        method: "POST",
        body: formData,
        headers: {
          "content-type": "multipart/form-data",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log("Server Response:", data);
          setTranslatedText(data.translated);

          console.log("Navigating to Definition");
          navigation.navigate("Definition", {
            translatedText: data.translated,
          });
        })
        .catch((error) => {
          console.error("There was an error uploading the photo.", error);
        });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.blue }}>
      <View style={commonStyles.container}>
        <View style={commonStyles.header}>
          <Text style={[commonStyles.title, { marginBottom: 6 }]}>
            Getting Started
          </Text>
          <Text style={commonStyles.subtitle}>
            Create an account to continue
          </Text>
        </View>

        <View style={commonStyles.input}>
          <Text style={commonStyles.inputLabel}>Email address</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(email) => setForm({ ...form, email })}
            placeholder="john@example.com"
            placeholderTextColor="#6b7280"
            style={commonStyles.inputControl}
            value={form.email}
          />
        </View>

        <View style={commonStyles.input}>
          <Text style={commonStyles.inputLabel}>Password</Text>
          <TextInput
            autoCorrect={false}
            onChangeText={(password) => setForm({ ...form, password })}
            placeholder="********"
            placeholderTextColor="#6b7280"
            style={commonStyles.inputControl}
            secureTextEntry={true}
            value={form.password}
          />
        </View>

        <View style={commonStyles.input}>
          <Text style={commonStyles.inputLabel}>Confirm Password</Text>
          <TextInput
            autoCorrect={false}
            onChangeText={(confirmPassword) =>
              setForm({ ...form, confirmPassword })
            }
            placeholder="********"
            placeholderTextColor="#6b7280"
            style={commonStyles.inputControl}
            secureTextEntry={true}
            value={form.confirmPassword}
          />
        </View>

        <View style={commonStyles.formAction}>
          <TouchableOpacity onPress={handleSignup}>
            <View style={commonStyles.btn}>
              <Text style={commonStyles.btnText}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: "auto" }}
        >
          <Text style={commonStyles.formFooter}>
            Already have an account?{" "}
            <Text style={{ textDecorationLine: "underline" }}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
