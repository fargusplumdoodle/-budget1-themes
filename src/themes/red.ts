import { getTransparent } from "../util";
import { WHITE } from "../colors";
import { PaletteOptions } from "@mui/material/styles/createPalette";

export const darkPalette: PaletteOptions = {
  primary: {
    main: "#FF6494",
    contrastText: getTransparent(WHITE, 0.87),
  },
  secondary: {
    main: "#662F56",
    contrastText: WHITE,
  },
  background: {
    default: "#111111",
  },
};

export const lightPalette: PaletteOptions = {
  primary: {
    main: "#FF5C8E",
    contrastText: WHITE,
  },
  secondary: {
    main: "#5E244D",
    contrastText: WHITE,
  },
};

export const components = {};

export const typography = {};

const orange = {
  darkPalette,
  lightPalette,
  components,
  typography,
};

export default orange;
