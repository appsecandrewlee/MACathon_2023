import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Results({ route }) {
  const navigation = useNavigation();
  const { translatedText, capturedText } = route.params;

  const handleWordClick = (word) => {
    navigation.navigate('Definition', { originalText: word });
  };

  const renderClickableText = (text) => {
    if (!text) return <Text>No text available</Text>;
  
    const words = text.split(' ');
    const wordElements = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      wordElements.push(
        <TouchableOpacity key={i} onPress={() => handleWordClick(word)}>
          <Text style={styles.clickableWord}>{word + ' '}</Text>
        </TouchableOpacity>
      );
    }
  
    return wordElements;
  };
  
  

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Captured Text</Text>
        <View style={styles.textContainer}>
          {renderClickableText(capturedText)}
        </View>

        <View style={styles.line}></View>

        <Text style={styles.title}>Translated Text</Text>
        <View style={styles.textContainer}>
          {renderClickableText(translatedText)}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: '#f4f4f4',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    line: {
        height: 1, 
        backgroundColor: 'grey', 
        marginVertical: 30, 
    },
    textContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 20,
    },
    clickableWord: {
      color: 'blue',
      fontSize: 16,
    },
});
