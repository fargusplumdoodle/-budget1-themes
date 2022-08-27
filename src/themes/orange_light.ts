import { PaletteMode } from "@mui/material";
import { WHITE } from ".";
import { getTransparent } from "../util";

export const palette = {
  mode: "light" as PaletteMode,
  primary: {
    main: "#FB9678",
    contrast: getTransparent(WHITE, 0.87),
  },
  secondary: {
    main: "#03C9D7",
    contrast: WHITE,
  },
  background: {
    default: "#FAFBFB",
  },
};

export const components = {
}

export default {
  palette,
  components,
};