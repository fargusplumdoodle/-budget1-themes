import { PaletteMode } from "@mui/material";
import { WHITE } from ".";
import { getTransparent } from "../util";

export const palette = {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#FB9B7F",
    contrast: getTransparent(WHITE, 0.87),
  },
  secondary: {
    main: "#10CCD9",
    contrast: WHITE,
  },
};

export const components = {
}

export default {
  palette,
  components,
};