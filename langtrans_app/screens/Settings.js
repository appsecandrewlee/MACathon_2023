import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { colors, commonStyles } from '../styles/styles';

export default function SettingsScreen() {

    const navigation = useNavigation()

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
                  // Perform any logout logic here (e.g., clear authentication state)
                  // Then, navigate to the LoginScreen
                  navigation.navigate('Login'); // 'Login' should match the name of your LoginScreen component in your navigation stack
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
