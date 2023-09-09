import React, { useState } from 'react';
import { colors, commonStyles } from '../styles/styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function LoginScreen({navigation}) {
  
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Fetch data from FastAPI backend
  //   fetch("http://localhost:8000/")  // This is the typical port for FastAPI apps
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.blue }}>
      <View style={commonStyles.container}>

        <View style={commonStyles.header}>
          <Image
            alt=""
            resizeMode="contain"
            style={commonStyles.headerImg}
            // style={[commonStyles.headerImg,{marginBottom: 100}]}
            source={require('../assets/logo/logo_white.png')} 
            // source={{
            //   uri: 'https://cdn-icons-png.flaticon.com/512/484/484633.png',
            // }}
          />
          <Text style={[commonStyles.title,{ color: colors.text }]}>
            Log in to <Text style={commonStyles.title}>TransApp</Text>
          </Text>
        </View>

        <View style={commonStyles.form}>
          
          <View style={commonStyles.input}>
            <Text style={commonStyles.inputLabel}>Email</Text>
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
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={commonStyles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={commonStyles.formAction}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <View style={commonStyles.btn}>
                <Text style={commonStyles.btnText}>LOG IN</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={{ marginTop: 'auto' }}>
            <Text style={commonStyles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign Up</Text>
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}