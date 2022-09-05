import { getTransparent } from "../util";
import { WHITE } from "../colors";
import { PaletteOptions } from "@mui/material/styles/createPalette";

export const darkPalette: PaletteOptions = {
  primary: {
    main: "#FB9B7F",
    contrastText: getTransparent(WHITE, 0.87),
  },
  secondary: {
    main: "#10CCD9",
    contrastText: WHITE,
  },
};

export const lightPalette: PaletteOptions = {
  primary: {
    main: "#FB9678",
    contrastText: WHITE,
  },
  secondary: {
    main: "#03C9D7",
    contrastText: WHITE,
  },
  background: {
    default: "#FAFBFB",
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
