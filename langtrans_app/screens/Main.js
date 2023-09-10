import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/styles';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home'; // Import your screen components
import ScanScreen from './Scan';
import SettingsScreen from './Settings';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      tabBarStyle={{ backgroundColor: colors.pink }} 
      // tabBarOptions={{
      //   tabBarActiveTintColor: colors.white, // Change the active tab item color
      //   tabBarInactiveTintColor: 'gray', // Change the inactive tab item color
      // }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
          headerShown: false, 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} /> // Use Ionicons as an example
          ), }} />
      <Tab.Screen 
        name="Scan" 
        component={ScanScreen} 
        options={{ 
          headerShown: false, 
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="scan-outline" color={color} size={size} /> // Use Ionicons as an example
          ), }} />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ 
          headerShown: false, 
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog-outline" color={color} size={size} /> // Use Ionicons as an example
          ), }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginTop: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#1d1d1d',
    textAlign: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#c90661',
  },
  navText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
  },
});
