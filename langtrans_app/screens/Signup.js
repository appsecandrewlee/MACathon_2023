import React, { useState } from "react";
import { colors, commonStyles } from "../styles/styles";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setUserData } from '../slices/userSlice';
import storageService from '../services/storageService';
import { SelectList } from 'react-native-dropdown-select-list';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignupScreen({navigation}) {
  
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.blue }}>
      <ScrollView>
      <View style={commonStyles.container}>
        <View style={commonStyles.header}>
          <Text style={[commonStyles.title, { marginBottom: 6 }]}>
            Getting Started
          </Text>
          <Text style={commonStyles.subtitle}>
            Create an account to continue
          </Text>
        </View>
        
        <View style={commonStyles.form}>
          
          <View style={commonStyles.input}>
            <Text style={commonStyles.inputLabel}>Full name</Text>
            <TextInput
              onChangeText={fullname => setForm({ ...form, fullname })}
              placeholder="John Doe"
              placeholderTextColor="#6b7280"
              style={commonStyles.inputControl}
              value={form.fullname}
            />
          </View>

          <View style={commonStyles.input}>
            <Text style={commonStyles.inputLabel}>Language</Text>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={languages} 
                save="value"
                boxStyles={{backgroundColor: "#fff"}}
                dropdownStyles={{backgroundColor: "#fff"}}
                placeholder="Chinese (Simplified)"
                placeholderTextColor="#6b7280"
                value={form.language}
                inputStyles={{fontSize: 15,fontWeight: "500", color: '#333'}}
            />
          </View>

          <View style={commonStyles.input}>
            <Text style={commonStyles.inputLabel}>Email address</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
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
            <TouchableOpacity
              onPress={() => {
                // handle onPress 
              }}>
              <View style={commonStyles.btn}>
                <Text style={commonStyles.btnText}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={commonStyles.spaceTini}></View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{ marginTop: 'auto' }}>
            <Text style={commonStyles.formFooter}>
              Already have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Log In</Text>
            </Text>
          </TouchableOpacity>

          <View style={commonStyles.spaceSmall}></View>

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
      </ScrollView>
      
    </SafeAreaView>
  );
}

