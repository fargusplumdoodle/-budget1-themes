import { PaletteMode } from "@mui/material";
import { WHITE } from ".";
import { getTransparent } from "../util";

export const palette = {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#FB9B7F",
    contrastText: getTransparent(WHITE, 0.87),
  },
  secondary: {
    main: "#10CCD9",
    contrastText: WHITE,
  },
};

export const components = {};

export const typography = {};

export default {
  palette,
  components,
  typography,
};
