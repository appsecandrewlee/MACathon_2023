import React, { useState } from 'react';
import { colors, commonStyles } from '../styles/styles';
import {
  StyleSheet,
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
      <View style={commonStyles.container}>
        
        <View style={commonStyles.header}>
          <Text style={commonStyles.title}>Getting Started</Text>
          <Text style={commonStyles.subtitle}>Create an account to continue</Text>
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
              onChangeText={password => setForm({ ...form, password })}
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
              onChangeText={confirmPassword =>
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

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={{ marginTop: 'auto' }}>
            <Text style={commonStyles.formFooter}>
              Already have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
            </Text>
          </TouchableOpacity>

        </View>

      </View>
      
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 24,
//     paddingHorizontal: 0,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,
//   },
//   header: {
//     marginVertical: 24,
//     paddingHorizontal: 24,
//   },
//   form: {
//     paddingHorizontal: 24,
//   },
//   formAction: {
//     marginVertical: 24,
//   },
//   formFooter: {
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#222',
//     textAlign: 'center',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#1d1d1d',
//     marginBottom: 6,
//   },
//   subtitle: {
//     fontSize: 14,
//     fontWeight: '500',
//     color: '#929292',
//   },
//   input: {
//     marginBottom: 16,
//   },
//   inputLabel: {
//     fontSize: 17,
//     fontWeight: '600',
//     color: '#222',
//     marginBottom: 8,
//   },
//   inputControl: {
//     height: 44,
//     backgroundColor: '#f1f5f9',
//     paddingHorizontal: 16,
//     borderRadius: 12,
//     fontSize: 15,
//     fontWeight: '500',
//     color: '#222',
//   },
//   btn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderWidth: 1,
//     backgroundColor: '#007aff',
//     borderColor: '#007aff',
//   },
//   btnText: {
//     fontSize: 17,
//     lineHeight: 24,
//     fontWeight: '600',
//     color: '#fff',
//   },
// });