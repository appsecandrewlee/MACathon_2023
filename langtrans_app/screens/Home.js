// HomeScreen.js
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
  FlatList,
} from "react-native";
import { colors, commonStyles, spacing } from "../styles/styles";

export default function MainScreen() {
  const wordList = [
    "Apple",
    "Banana",
    "Cucumber",
    "Durian",
    "Eggplant",
    "Fig",
    "Grape",
    "Honeydew",
    "Icaco",
    "Jackfruit",
    "Kiwi",
    "Lime",
  ];
  const slangList = [
    "Woolies",
    "Mozzie",
    "Barbie",
    "No worries",
    "Too easy",
    "Mate",
    "Arvo",
  ];
  const collectionList = ["Programming", "Supermaket", "Gym"];

  const pinks = ["#FF80C0", "#FF63B8", "#FF4D9D", "#FF3B9F", "#FF1287"];
  const purples = ["#D06EFF", "#B13BFF", "#9A00FF", "#8800CC", "#660099"];

  const getRandomColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.grey }}>
      <ScrollView>
        {/* GREETINGS --------------------------------------------------------------------------*/}
        <View style={commonStyles.header}>
          <Text style={[commonStyles.titleBlack, { marginBottom: 6 }]}>
            Howdy, Chloe!
          </Text>
        </View>
        <View style={commonStyles.spaceSmall}></View>

        {/* TODAY --------------------------------------------------------------------------*/}
        <View style={commonStyles.container}>
          <View style={commonStyles.sectionBlack}>
            <Text style={commonStyles.captionPink}>
              {wordList.length} new words today.
            </Text>
            <Text style={commonStyles.captionPink}>Go you 🏅</Text>
          </View>
          <View style={commonStyles.wordListContainer}>
            {wordList.map((word, index) => (
              <View
                key={index}
                style={[
                  commonStyles.wordContainer,
                  { backgroundColor: getRandomColor(pinks) },
                ]}
              >
                <Text style={commonStyles.wordText}>{word}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* SLANGS --------------------------------------------------------------------------*/}
        <View style={commonStyles.containerVertical}>
          <View style={[commonStyles.sectionBlack, { margin: spacing.large }]}>
            <Text style={commonStyles.captionPink}>Aussie slangs?</Text>
            <Text style={commonStyles.captionPink}>Too easy 🥸</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={commonStyles.expandContainer}
          >
            {slangList.map((word, index) => (
              <View
                key={index}
                style={[
                  commonStyles.wordContainer,
                  { backgroundColor: getRandomColor(purples) },
                ]}
              >
                <Text style={commonStyles.wordText}>{word}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
