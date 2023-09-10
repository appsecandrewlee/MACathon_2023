import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, SafeAreaView, SectionList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { useRoute } from '@react-navigation/native';
import { colors, commonStyles, fonts } from '../styles/styles';

export default function CollectionScreen() {

    const route = useRoute()
    const collectionName = route.params?.collectionName;
    const words = ['Red', 'Green', 'Blue', 'Pink', 'Purple', 'Orange', 'Yellow'];
    const pinks = ['#FF80C0', '#FF63B8', '#FF4D9D', '#FF3B9F', '#FF1287'];

    const getRandomColor = (colors) => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    function groupWordsByFirstLetter(words) {
        return words.reduce((groups, word) => {
          const firstLetter = word[0].toUpperCase();
          if (!groups[firstLetter]) {
            groups[firstLetter] = [];
          }
          groups[firstLetter].push(word);
          return groups;
        }, {});
      }

      // Sort the words
    const sortedWords = words.sort();

    // Group the words by first letter
    const groupedWords = groupWordsByFirstLetter(sortedWords);

    // Convert groupedWords to an array of sections
    const sections = Object.keys(groupedWords).map((letter) => ({
    title: letter,
    data: groupedWords[letter],
    }));

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={commonStyles.container}>

            {/* HEADER --------------------------------------------------------------------------*/}
            <View style={commonStyles.header}>
                <Text style={[commonStyles.subtitle,{color: colors.darkgrey, fontWeight: '800'}]}>Collection</Text>
                <Text style={[commonStyles.titleBlack, {marginBottom: 6}]}>'{collectionName}'</Text>
            </View>

            {/* WORDS SORTED ALPHABETICALLY --------------------------------------------------------------------------*/}
            <ScrollView>
                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={[commonStyles.wordContainer,{backgroundColor: getRandomColor(pinks)}]}>
                        <Text style={commonStyles.wordText}>{item}</Text>
                        </View>
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={styles.header}>
                        <Text style={styles.headerText}>{title}</Text>
                        </View>
                    )}
                />
            </ScrollView>

            {/* TODO
            
            [X] Get the name of the clicked collection
            [ ] Pass the name to back-end to retrieve the list of words // BACK-END
            [X] Display the words in a list view
            [ ] Link the word to the definition/translation page // CONS

            */}

            <View style={commonStyles.spaceSmall}></View>

      </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
    sectionListContainer: {

    },

    header: {
        // backgroundColor: colors.black,
        padding: 5,
        marginTop: 20,
        marginBottom: 10,
        borderEndColor: colors.grey,
        borderBottomWidth: 1
    },

    headerText: {
        fontSize: 18,
        fontWeight: "800",
        color: colors.black,
        marginLeft: 10,
        marginBottom: 5,
        textAlign: "left",
    },

  });
  
