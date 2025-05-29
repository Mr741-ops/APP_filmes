import { createTheme } from "@mui/material/styles";

export const tokens = () => ({
  
  white: {
    100: "#f6f6f6",
    200: "#ededed",
    300: "#e3e3e3",
    400: "#dadada",
    500: "#d1d1d1",
    600: "#a7a7a7",
    700: "#7d7d7d",
    800: "#545454",
    900: "#2a2a2a",
  },

  indigo: {
    100: "#cce0e6",
    200: "#99c1cd",
    300: "#66a2b4",
    400: "#33839b",
    500: "#006482",
    600: "#005068",
    700: "#003c4e",
    800: "#002834",
    900: "#00141a",
  },

  platinnum: {
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
        dark: colors.white[800],
        light: colors.blue[300],
        contrast:colors.white[500],
      },
      secondary: {
        main: colors.white[500],
        dark: colors.platinnum[900],
      },
      background: {
        main: colors.white[700],
        default: colors.black[700],
        contrastText: colors.platinnum[600],
        dark: colors.black[600],
        light: colors.white[500],
      },
    },
  };
};

export const theme = createTheme(themeSettings());
