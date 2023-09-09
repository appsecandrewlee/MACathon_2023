import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Definition = ({ route }) => {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState(route.params.translatedText || '');

  const fetchTexts = async () => {
    try {

      const word = translatedText;
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, {
        method: 'GET', 
      });

      const data = await response.json();
      setOriginalText(data.original);  
      setTranslatedText(data.translated);  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log("Fetching texts in Definition");
    fetchTexts();
  }, []);

  return (
    <View>
      <Text>Original Text: {originalText}</Text>
      <Text>Translated Text: {translatedText}</Text>
    </View>
  );
};

export default Definition;
