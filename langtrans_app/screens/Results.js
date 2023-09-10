import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Results({ route }) {
  const navigation = useNavigation();
  const { translatedText, capturedText } = route.params;

  const handleWordClick = (word) => {
    navigation.navigate('Definition', { word });
  };

  const renderClickableText = (text) => {
    return text.split(' ').map((word, index) => (
      <TouchableOpacity key={index} onPress={() => handleWordClick(word)}>
        <Text style={{ color: 'blue' }}>{word + ' '}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View>
      <Text>Translated Text: </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {renderClickableText(translatedText)}
      </View>
      <Text>Captured Text: </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {renderClickableText(capturedText)}
      </View>
    </View>
  );
}

  