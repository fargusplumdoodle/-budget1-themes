import { PaletteOptions } from "@mui/material/styles/createPalette";

export const darkPalette: PaletteOptions = {
  primary: {
    main: "#006398",
    dark: "#001D31",
    light: "#CCE5FF",
  },
  secondary: {
    main: "#A704AB",
    dark: "#380038",
    light: "#FFD6F7",
  },
};

export const lightPalette: PaletteOptions = {
  primary: {
    main: "#006398",
    dark: "#001D31",
    light: "#CCE5FF",
  },
  secondary: {
    main: "#A705AB",
    dark: "#380039",
    light: "#FFD7F7",
  },
  background: {
    default: "#FAFBFB",
  },
};

export const components = {};

export const typography = {};

const classic = {
  darkPalette,
  lightPalette,
  components,
  typography,
};
export default classic;
