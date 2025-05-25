import { createTheme } from "@mui/material/styles";

export const tokens = () => ({
  white: {
    100: "#fafafa",
    200: "#f5f6f5",
    300: "#f0f1f0",
    400: "#ebedeb",
    500: "#e6e8e6",
    600: "#b8bab8",
    700: "#8a8b8a",
    800: "#5c5d5c",
    900: "#2e2e2e",
  },
  blue: {
    100: "#cce6ed",
    200: "#99cddc",
    300: "#66b3ca",
    400: "#339ab9",
    500: "#0081a7",
    600: "#006786",
    700: "#004d64",
    800: "#003443",
    900: "#001a21",
  },

  black: {
    100: "#d4d4d7",
    200: "#a9a8ae",
    300: "#7d7d86",
    400: "#52515d",
    500: "#272635",
    600: "#1f1e2a",
    700: "#171720",
    800: "#100f15",
    900: "#08080b",
  },

  darkBlue: {
    100: "#ccd0d7",
    200: "#99a2af",
    300: "#677388",
    400: "#344560",
    500: "#011638",
    600: "#01122d",
    700: "#010d22",
    800: "#000916",
    900: "#00040b",
  },
});

export const themeSettings = () => {
  const colors = tokens();

  return {
    palette: {
      primary: {
        main: colors.blue[600],
        light: colors.blue[200],
      },
      secondary: {
        main: colors.white[500],
        dark: colors.white[700],
      },
      background: {
        main: colors.black[500],
        default: colors.black[500],
        contrastText: colors.white[500],
        dark: colors.black[600],
        light: colors.black[500],
      },
    },
  };
};

export const theme = createTheme(themeSettings());
