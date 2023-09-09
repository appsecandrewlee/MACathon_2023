import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Definition = ({ route }) => {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState(route.params.translatedText || '');

  const fetchTexts = async () => {
    try {
        
      const link = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      const word = originalText;
      const response = await axios.get('http://118.138.85.230:8000/translate/', {
        text: word
      });

      const data = await response.json();
    //   setOriginalText(data.original);  
    //   setTranslatedText(data.translated);  
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
