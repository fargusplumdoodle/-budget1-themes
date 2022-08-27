import { PaletteMode } from "@mui/material";
import { WHITE } from ".";
import { getTransparent } from "../util";

export const palette = {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#006398",
    dark: "#001D31",
    light: "#CCE5FF",
    contrast: getTransparent(WHITE, 0.87),
  },
  secondary: {
    main: "#A704AB",
    dark: "#380038",
    light: "#FFD6F7",
    contrast: WHITE,
  },
  background: {
    default: "#0E1E1E",
    paper: "#232322",
    elevation: ["#0E1E1E", "#232323", "#252525", "#272727", "#2A2A2A"],
  },
};

export const components = {
}

export default {
  palette,
  components,
};