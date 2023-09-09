import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { colors, commonStyles } from '../styles/styles';

export default function CollectionScreen() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={commonStyles.container}>
        <Text>Hi and bye</Text>
      </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  
});
