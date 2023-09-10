import React, { useState } from "react";
import { colors, commonStyles } from "../styles/styles";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUserData } from '../slices/userSlice';
import storageService from '../services/storageService';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert, // Import Alert
} from "react-native";

export default function SignupScreen({ navigation }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    preferred_language: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [uid, setUid] = useState(null);
  const handleSignup = async () => {
    try {
      const response = await axios.post("http://118.138.85.230:8000/sign_up/", {
        email: form.email,
        password: form.password,
        preferred_language: form.preferred_language,
      });
      console.log(form.email, form.password, form.preferred_language);

      if (response.data && response.data.message === "Account created successfully") {
        const userUid = response.data.uid;
        const userToken = response.data.token;
        const userEmail = form.email;
        const userLanguage = form.preferred_language; // From the form

        // Update Redux state
        dispatch(setUserData({
          token: userToken,
          uid: userUid,
          email: userEmail,
          preferred_language: userLanguage,
          // ... Any other user details
        }));

        // Update AsyncStorage
        await storageService.saveToken(userToken);
        await storageService.saveUID(userUid);
        await storageService.saveEmail(userEmail);
        await storageService.savePreferredLanguage(userLanguage);  // Again, you'll need to create this in storageService.js
      } else {
        Alert.alert(
          "Error",
          response.data.message || "An error occurred during signup.",
        );
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code outside of the range of 2xx
        Alert.alert(
          "Error",
          error.response.data.message || "An error occurred during signup.",
        );
      } else if (error.request) {
        // The request was made but no response was received
        Alert.alert(
          "Error",
          "No response received from the server. Please check your server or network connection.",
        );
      } else {
        // Something happened in setting up the request and triggered an error
        Alert.alert("Error", error.message);
      }
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
          <Text style={commonStyles.inputLabel}>Preferred Language</Text>
          <TextInput
            onChangeText={(preferred_language) =>
              setForm({ ...form, preferred_language })
            }
            placeholder="English"
            placeholderTextColor="#6b7280"
            style={commonStyles.inputControl}
            value={form.preferred_language}
          />
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
