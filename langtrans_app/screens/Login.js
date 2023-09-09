import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Example() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Fetch data from FastAPI backend
  //   fetch("http://localhost:8000/")  // This is the typical port for FastAPI apps
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/", {
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

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        email: form.email,
        password: form.password,
      });

      if (response.data && response.data.message === "Login successful!") {
        navigation.navigate('Home')
        Alert.alert("Success!", "Logged in successfully.", [
          { text: "OK", onPress: () => navigation.navigate('Home') },
        ]);
      } else {
        Alert.alert("Error", "Failed to log in.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={styles.headerImg}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/484/484633.png",
            }}
          />

          <Text style={styles.title}>
            Sign in to <Text style={{ color: "#c90661" }}>LangTransApp</Text>
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(email) => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              onChangeText={(password) => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleSignUp}
            style={{ marginTop: "auto" }}
          >
            <Text style={styles.formFooter}>
              Don't have an account?{" "}
              <Text style={{ textDecorationLine: "underline" }}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: "#222",
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#c90661",
    borderColor: "#c90661",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
