import { createTheme } from "@shopify/restyle";

const buttonVariants = {
  primary: {
    backgroundColor: "royalPurple",
    color: "white",
  },
  secondary: {
    backgroundColor: "azureishWhite",
    color: "royalPurple",
  },
  defaults: {
    backgroundColor: "azureishWhite",
    color: "royalPurple",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "m",
  },
};

const theme = createTheme({
  colors: {
    black: "#000000",
    white: "#FFFFFF",
    azureishWhite: "#E2E5ED",
    lavender: "#EFE8F9",
    purple: "#983794",
    royalPurple: "#744fac",
    eminencePurple: "#623A85",
    grape: "#7539C1",
    jasmine: "#FDDB88",
    sunglow: "#FFC538",
    pistachio: "#95C073",
    englishVermillion: "#C74747",
    pastelRed: "#FC6363",
    darkSilver: "#776F60",
    darkLava: "#443F36",
    ghostWhite: "#F7F7FA",
    romanSilver: "#878E9F",
    ashGray: "#B7B8B9",
    transparent: "transparent",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    h1: {
      fontSize: 28,
      fontFamily: "Inter_700Bold",
      color: "black",
    },
    body: {
      fontSize: 16,
      fontFamily: "Inter_400Regular",
      color: "black",
    },
    defaults: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      color: "black",
    },
    buttonPrimary: {
      fontSize: 14,
      fontFamily: "Inter_700Bold",
      color: "white",
    },
    buttonSecondary: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      color: "royalPurple",
    },
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  buttonVariants,
  //   zIndices
});

type ThemeProps = typeof theme;

export { theme, ThemeProps };
