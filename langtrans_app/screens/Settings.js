import React from 'react';
import { useDispatch } from 'react-redux'; // <- Import useDispatch
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { colors, commonStyles } from '../styles/styles';
import storageService from '../services/storageService'; // <- Import storageService
import { clearUserData } from '../slices/userSlice.js';
import { Alert } from "react-native";
// Import your logout action



export default function SettingsScreen() {
    const navigation = useNavigation();
    const dispatch = useDispatch(); // <- Use the useDispatch hook

    const items = [
      { id: '1', title: 'My Profile' },
      { id: '2', title: 'Settings' },
      { id: '3', title: 'Privacy' },
      { id: '4', title: 'Log Out' },
    ];

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

      <View style={commonStyles.container}>
        {/* <View style={commonStyles.profileHeader}>
          <Image
            style={commonStyles.profileImage}
            source={require('../assets/kirby.webp')} 
            resizeMode="cover"
          />
        </View> */}
        <View style={commonStyles.header}>
        <View style={commonStyles.profileHeader}>
          <Image
            style={commonStyles.profileImage}
            source={require('../assets/kirby.webp')} 
            resizeMode="cover"
          />
          <View style={commonStyles.spaceSmall}></View>
        <Text style={[commonStyles.titleBlack, {marginBottom: 6}]}>Chloe Nguyen</Text>
      </View>
      </View>
        <View style={commonStyles.spaceMedium}></View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={commonStyles.settingItem}
              onPress={() => {
                if (item.title === 'Log Out') {
                  dispatch(clearUserData());
                  Alert.alert("Success!", "Logged out successfully.", [
                    {
                      text: "OK",
                      onPress: () => {
                        console.log("Logging out"); // Log before navigating
                        navigation.navigate("Login");
                      },
                    },
                  ]);
                }
              }}>
                <Text style={commonStyles.inputLabelBlack}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    alignItems: 'center',
    paddingTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Half of the width and height to create a circle
  },
  settingItem: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
  },
});
