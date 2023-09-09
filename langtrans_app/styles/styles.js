// import * as Buttons from './buttons'
// import * as Colors from './colors'
// import * as Spacing from './spacing'
// import * as Typography from './typography'
// export { Typography, Spacing, Colors, Buttons }

import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const colors = {
  pink: "#FFB3E8",
  bluereal: "#6ed3ff",
  purple: '#bba0fa',
  blue: "#000000",
  // blue: '#2B2DA4',
  grey: "#F0F0F0",
  text: "#FFFFFF",
  pink: "#FFB3E8",
  blue: "#000000",
  blue1: "#0942bd",
  blue2: "#082178",
  // blue: '#2B2DA4',
  grey: "#F0F0F0",
  darkgrey: "#222222",
  text: "#FFFFFF",
  black: "#000000",
  white: "#FFFFFF",
  // primaryGradient: ['#AA076B', '#61045F'],
};

const fonts = {
  regular: "Arial",
  bold: "Arial-Bold",
};

const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

const borderRadius = {
  small: 4,
  medium: 8,
  large: 12,
};

const boxShadow = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4, // Android
};

const commonStyles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: colors.background,
    padding: spacing.large,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

  containerVertical: {
    paddingVertical: spacing.large,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

  header: {
    marginVertical: 36,
  },

  // heading: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   color: colors.text,
  //   marginBottom: spacing.medium,
  // },

  // text: {
  //   fontSize: 16,
  //   color: colors.text,
  // },

  headerImg: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 36,
    // marginBottom: 36,
  },

  title: {
    fontSize: 27,
    fontWeight: "700",
    color: colors.pink,
    marginBottom: 50,
    textAlign: "center",
  },

  titleBlack: {
    fontSize: 27,
    fontWeight: "700",
    color: colors.black,
    marginBottom: 50,
    textAlign: "center",
  },

  captionContainer: {
    flex: 0.8,
  },

  captionBlack: {
    fontSize: 23,
    fontWeight: "700",
    color: colors.black,
    marginTop: 50,
    textAlign: "left",
  },

  headingBlack: {
    fontSize: 23,
    fontWeight: "700",
    color: colors.black,
    marginTop: spacing.large,
    textAlign: "left",
  },

  wordListContainer: {
    flexDirection: "row", // Horizontal layout
    flexWrap: "wrap", // Allow words to wrap to the next row
    justifyContent: "left", // Center items horizontally (optional)
  },

  wordContainer: {
    backgroundColor: "black",
    paddingVertical: 10, // Adjust vertical padding as needed
    paddingHorizontal: 18, // Adjust horizontal padding as needed
    margin: 5,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  spaceTini: {
    marginVertical: 5,
  },

  spaceSmall: {
    marginVertical: 15,
  },

  spaceMedium: {
    marginVertical: 30,
  },

  spaceLarge: {
    marginVertical: 50,
  },

  wordText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  captionPink: {
    fontSize: 23,
    fontWeight: "800",
    color: colors.pink,
    // marginBottom: 12,
    textAlign: "left",
  },

  captionPurple: {
    fontSize: 23,
    fontWeight: "800",
    color: colors.purple,
    // marginBottom: 12,
    textAlign: "left",
  },

  captionBlue: {
    fontSize: 23,
    fontWeight: "800",
    color: colors.bluereal,
    // marginBottom: 12,
    textAlign: "left",
  },

  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.text,
    textAlign: "center",
    marginBottom: spacing.small,
  },

  body: {
    paddingHorizontal: 8,
  },

  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

  formAction: {
    marginVertical: 24,
  },

  formFooter: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
    textAlign: "center",
    letterSpacing: 0.15,
  },

  input: {
    marginBottom: 16,
  },

  inputLabel: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },

  inputLabelBlack: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.black,
    marginBottom: 8,
  },
  
  inputControl: {
    height: 42,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },

  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: colors.pink,
    borderColor: colors.pink,
  },

  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "800",
    color: colors.blue,
  },

  linearGradient: {
    flex: 1,
    width: "100%",
  },

  // button: {
  //   backgroundColor: colors.primary,
  //   padding: spacing.medium,
  //   borderRadius: borderRadius.medium,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // buttonText: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   color: 'white',
  // },

  // input: {
  //   borderWidth: 1,
  //   borderColor: colors.secondary,
  //   borderRadius: borderRadius.small,
  //   padding: spacing.small,
  //   fontSize: 16,
  //   marginBottom: spacing.medium,
  // },
  sectionBlack: {
    backgroundColor: colors.black,
    padding: 24,
    marginBottom: 16,
    borderRadius: 8,
  },

  expandContainer: {
    paddingLeft: spacing.large, // Small left margin
    paddingRight: 0, // No padding on the right, allowing overflow
  },

  collectionContainer: {
    backgroundColor: colors.black,
    paddingVertical: 20, // Adjust vertical padding as needed
    // paddingHorizontal: 26, // Adjust horizontal padding as needed
    // margin: 5,
    padding: 16,
    // marginBottom: 16,
    borderRadius: 8,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Half of the width and height to create a circle
  },

  profileHeader: {
    alignItems: 'center',
    paddingTop: 20,
  },

  settingItem: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
  },

  settingContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});

export { commonStyles, colors, fonts, spacing, borderRadius, boxShadow };
