import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";
import LoginScreen from "./screens/Login"; // Import the login screen
import CameraScreen from "./screens/Scan"; // Assuming you also have a camera screen
import HomeScreen from "./screens/Home"; // Assuming you also have a camera screen
const Stack = createStackNavigator();

export default function App() {
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        email: form.email,
        password: form.password,
      });

      if (response.data && response.data.message === "Login successful!") {
        Alert.alert("Success!", "Logged in successfully.");
        // You can navigate to another screen or do other tasks here
      } else {
        Alert.alert("Error", "Failed to login.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000", {
        email: form.email,
        password: form.password,
      });

      if (response.data && response.data.uid) {
        Alert.alert("Success!", "Account created successfully.");
        // Store user data in Firestore
        await storeUserData(response.data.uid, form.email);
      } else {
        Alert.alert("Error", "Failed to create account.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  const storeUserData = async (uid, email) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/store-user-data/",
        {
          uid: uid,
          email: email,
        },
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  const verifyUserToken = async (token) => {
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

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{ title: "Capture Image" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
