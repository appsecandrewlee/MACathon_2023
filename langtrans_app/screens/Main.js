import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// NAV TAB BAR
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home'; // Import your screen components
import ScanScreen from './Scan';
import SettingsScreen from './Settings';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}


// export default function HomeScreen() {
//     const navigation = useNavigation();
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
//       <View style={styles.container}>

//         {/* Title */}
//         <View style={styles.header}>
//           <Text style={styles.title}>
//             Welcome to <Text style={{ color: '#c90661' }}>LangTransApp</Text>
//           </Text>
//         </View>

//         {/* Placeholder Text */}
//         <View style={styles.placeholderContainer}>
//           <Text style={styles.placeholderText}>Your Content Goes Here</Text>
//         </View>

//         {/* Navigation Bar */}
//         <View style={styles.navBar}>
//           <TouchableOpacity onPress={() => {}}>
//             <Text style={styles.navText}>Home</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
//       <Text style={styles.navText}>Scan</Text>
//     </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//             <Text style={styles.navText}>Profile</Text>
//           </TouchableOpacity>
//         </View>

//       </View>
//     </SafeAreaView>
//   );
// }

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
