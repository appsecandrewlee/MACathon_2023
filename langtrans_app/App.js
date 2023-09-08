import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/Login'; // Import the login screen
import CameraScreen from './screens/Scan'; // Assuming you also have a camera screen
import HomeScreen from './screens/Home'; // Assuming you also have a camera screen
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: 'Capture Image' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
