// HomeScreen.js

import React, { useState } from "react";
import axios from "axios";
import { View, Text, SafeAreaView, ScrollView, FLatList, TextInput, StyleSheet, TouchableHighlight, TouchableOpacity,  FlatList } from 'react-native';
import { colors, commonStyles, spacing } from '../styles/styles';
import { useNavigation } from '@react-navigation/native'

export default function MainScreen() {

    const navigation = useNavigation();

    // const userName = db.users.get(uid).name;
    const userName = 'Andrew';


    // const wordList = ['Apple','Banana','Cucumber','Durian','Eggplant','Fig','Grape','Honeydew', 'Icaco', 'Jackfruit', 'Kiwi', 'Lime'];
    const slangList = ['Woolies','Mozzie','Barbie','No worries','Too easy','Mate','Arvo'];
    const collectionList = ['Programming', 'Supermaket', 'Gym', 'Badminton'];

    const pinks = ['#FF80C0', '#FF63B8', '#FF4D9D', '#FF3B9F', '#FF1287'];
    const purples = ['#D06EFF', '#B13BFF', '#9A00FF', '#8800CC', '#660099'];
    // const blues = ['#007ACC', '#004488', '#33B5E5', '#66C2FF', '#99D6FF'];

    const [wordList, setWordList] = useState(['Apple','Banana','Cucumber','Durian','Eggplant','Fig','Grape','Honeydew', 'Icaco', 'Jackfruit', 'Kiwi', 'Lime']);

    function addWord() {
        dynamicWord = newWord;
        setNewWord('');
        setWordList((prevList) => [...prevList, dynamicWord]);
    }

    const [newWord, setNewWord] = useState('');
    
    let dynamicWord = '';

    const handleNewWord = (text) => {
        setNewWord(text);
      };

    const makeBlues = () => {
        const blueStart = '#021B79';
        const blueEnd = '#0575E6';
        const startRGB = hexToRGB(blueStart);
        const endRGB = hexToRGB(blueEnd);
        const colorList = [];
        const x = collectionList.length;
        for (let i = 0; i < collectionList.length; i++) {
            const r = Math.round(startRGB.r + ((endRGB.r - startRGB.r) / (x - 1)) * i);
            const g = Math.round(startRGB.g + ((endRGB.g - startRGB.g) / (x - 1)) * i);
            const b = Math.round(startRGB.b + ((endRGB.b - startRGB.b) / (x - 1)) * i);
            const hexColor = rgbToHex(r, g, b);
            colorList.push(hexColor);
        }
        return colorList;
    }

    const blues = makeBlues();

  const getRandomColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

    function hexToRGB(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return { r, g, b };
      }
      
      function rgbToHex(r, g, b) {
        const rHex = r.toString(16).padStart(2, '0');
        const gHex = g.toString(16).padStart(2, '0');
        const bHex = b.toString(16).padStart(2, '0');
        return `#${rHex}${gHex}${bHex}`;
      }
    

    // const colorStep = [
    //     (blueStart[0] - blueEnd[0]) / (collectionList.length - 1),
    //     (blueStart[1] - blueEnd[1]) / (collectionList.length - 1),
    //     (blueStart[2] - blueEnd[2]) / (collectionList.length - 1),
    //   ];

    const [form, setForm] = useState({
        newword: ''
      });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.grey }}>

            <ScrollView>
                
                {/* GREETINGS --------------------------------------------------------------------------*/}
                <View style={commonStyles.header}>
                    <Text style={[commonStyles.titleBlack, {marginBottom: 6}]}>Howdy, {userName}! 🤠</Text>
                </View>
                <View style={commonStyles.spaceSmall}></View>

                    {/* TODAY --------------------------------------------------------------------------*/}
                    <View style={commonStyles.container}>
                        <View style={commonStyles.sectionBlack}>
                            <Text style={commonStyles.captionPink}>{wordList.length} new words today.</Text>
                            <Text style={commonStyles.captionPink}>Go you 🏅</Text>
                        </View>

                        <View style={styles.searchContainer}>
                            {/* Search Bar (Left) */}
                            <View style={styles.searchBar}>

                                <TextInput
                                placeholderTextColor="#6b7280"
                                autoCapitalize="sentence"
                                autoCorrect={false}
                                style={styles.input}
                                placeholder="Add a new word..."
                                value={newWord}
                                onChangeText={handleNewWord}
                                // Add your onChangeText logic here
                                />
                            </View>

                            {/* Add Button (Right) */}
                            <TouchableOpacity onPress={addWord} style={styles.addButton}>
                                <View>
                                    <Text style={styles.buttonText}>+</Text>
                                </View>
                            </TouchableOpacity>
                            </View>

                        <View style={[commonStyles.wordListContainer,{paddingHorizontal: 10}]}>
                            {wordList.map((word, index) => (
                                <TouchableOpacity 
                                    key={index} 
                                    style={[commonStyles.wordContainer, {backgroundColor: getRandomColor(pinks)}]}
                                    onPress={() => {
                                        navigation.navigate('Definition', { originalText: word });
                                    }}
                                >
                                    <Text style={commonStyles.wordText}>{word}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={commonStyles.spaceSmall}></View>
                    </View>
                    
                    {/* SLANGS --------------------------------------------------------------------------*/}
                    <View style={commonStyles.containerVertical}>
                        <View style={[commonStyles.sectionBlack,{margin: spacing.large}]}>
                            <Text style={commonStyles.captionPurple}>Aussie slangs?</Text>
                            <Text style={commonStyles.captionPurple}>Too easy 🥸</Text>
                        </View>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={commonStyles.expandContainer}
                            style={{paddingHorizontal: 10}}
                            >
                            {slangList.map((word, index) => (
                                <View key={index} style={[commonStyles.wordContainer,{backgroundColor: getRandomColor(purples)}]}>
                                <Text style={commonStyles.wordText}>{word}</Text>
                                </View>
                            ))}
                        </ScrollView>
                        <View style={commonStyles.spaceMedium}></View>
                    </View>

                    {/* COLLECTIONS --------------------------------------------------------------------------*/}
                    <View style={commonStyles.container}>
                        <View style={commonStyles.sectionBlack}>
                            <Text style={commonStyles.captionBlue}>My collections 📚</Text>
                        </View>

                        <TouchableOpacity 
                            style={[commonStyles.collectionContainer,{marginHorizontal: spacing.medium}]}
                            onPress={() => {
                                navigation.navigate('Collection', {collectionName: 'All'});
                            }}>
                            <Text style={commonStyles.wordText}>ALL</Text>
                        </TouchableOpacity>


                        <FlatList
                            data={collectionList}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity 
                                    style={[commonStyles.collectionContainer, { marginHorizontal: spacing.medium, backgroundColor: blues[index] }]}
                                    onPress={() => {
                                        navigation.navigate('Collection', {collectionName: item});
                                    }}>
                                    <Text style={commonStyles.wordText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <View style={commonStyles.spaceMedium}></View>

            </ScrollView>
            
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row', // Arrange items horizontally
        alignItems: 'center', // Vertically center items
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
    },
    searchBar: {
        flex: 6, // Takes up 75% of the width
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },

    input: {
        // borderWidth: 1,
        height: 44,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        // paddingVertical: 8,
        borderRadius: 5,
        // borderColor: '#fff',
        fontSize: 15,
        fontWeight: "500",
        color: "#222",
    },
    addButton: {
        flex: 1, // Takes up 25% of the width
        marginLeft: 15, // Add spacing between the search bar and button
        backgroundColor: colors.pink, // Change button color as needed
        borderRadius: 40,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        font: 20
    },
    });
