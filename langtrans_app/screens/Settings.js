import React from 'react';
import { useDispatch } from 'react-redux'; // <- Import useDispatch
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { colors, commonStyles } from '../styles/styles';
import storageService from '../services/storageService'; // <- Import storageService
import { clearUserData } from '../slices/userSlice.js';
// Import your logout action
import { logout } from '../redux/actions/userActions';

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
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profileImage}
            source={require('../assets/kirby.webp')} 
            resizeMode="cover"
          />
        </View>
        <View style={commonStyles.spaceMedium}></View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.settingItem}
              onPress={() => {
                if (item.title === 'Log Out') {
                  dispatch(clearUserData());
                  navigation.navigate('Login');
                }
              }}>
                <Text style={commonStyles.inputLabelBlack}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      </SafeAreaView>
    );
  //   <View>
  //     <Text>Profile pic here</Text>
  //     <Text>List of things here</Text>
  //     <Text>My details</Text>
  //     <Text>Settings and privacy</Text>
  //     <Text></Text>
  //   </View>
  // );
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
