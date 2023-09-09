import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

const Definition = ({ route }) => {
  const [originalText, setOriginalText] = useState(route.params.originalText || '');
  const [definition, setDefinition] = useState('');

  const fetchTexts = async () => {
    try {
      const response = await axios.get('http://118.138.85.230:8000/translate/', {
        params: { text: originalText },
      });

      if (response.data && response.data.original) {
        setOriginalText(response.data.original);
      } else {
        console.error('Unexpected response data:', response.data);
      }

      const link = `https://api.dictionaryapi.dev/api/v2/entries/en/${originalText}`;
      const definitionResponse = await axios.get(link);

      if (
        definitionResponse.data &&
        definitionResponse.data[0] &&
        definitionResponse.data[0].meanings[0] &&
        definitionResponse.data[0].meanings[0].definitions[0]
      ) {
        const fetchedDefinition = definitionResponse.data[0].meanings[0].definitions[0].definition;
        setDefinition(fetchedDefinition);
      } else {
        console.error('Unexpected definition data:', definitionResponse.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTexts();
  }, []);

  return (
    <View style={styles.container}>
        <Text style={[styles.title, styles.titleWithMargin]}>Original Text</Text>
        <View style={[styles.card, styles.cardWithMargin]}>
        <Text style={styles.cardContent}>{originalText}</Text>
        </View>

        <View style={styles.line}></View>
  
        <Text style={[styles.title, styles.titleWithMargin]}>Definition</Text>
        <View style={[styles.card, styles.cardWithMargin]}>
        <Text style={styles.description}>{definition}</Text>
        </View>

    </View>
  );
  
  
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 25,      
      paddingVertical: 50,
      backgroundColor: '#f4f4f4',
    },
    cardWithMargin: {
        marginBottom: 65,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      elevation: 3,
      margin: 8,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      paddingVertical: 50,
    },
    titleWithMargin: {
        marginBottom: 30,
    },
    line: {
        height: 1, 
        backgroundColor: 'grey', 
        marginVertical: 30, 
    },
    cardContent:{
      fontSize: 36,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      marginTop: 8,
      textAlign: 'center',
    },
  });
  

export default Definition;
