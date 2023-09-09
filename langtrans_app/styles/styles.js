// import * as Buttons from './buttons'
// import * as Colors from './colors'
// import * as Spacing from './spacing'
// import * as Typography from './typography'
// export { Typography, Spacing, Colors, Buttons }

import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const colors = {
  pink: "#FFB3E8",
  blue: "#000000",
  // blue: '#2B2DA4',
  grey: "#F0F0F0",
  text: "#FFFFFF",
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

  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.text,
    textAlign: "center",
    marginBottom: 36,
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

  inputControl: {
    height: 44,
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
});

export { commonStyles, colors, fonts, spacing, borderRadius, boxShadow };
