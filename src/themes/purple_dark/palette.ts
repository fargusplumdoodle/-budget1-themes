import { PaletteMode } from "@mui/material";
import { WHITE } from "..";
import { getTransparent } from "../../util";
import sharedPalette from "../shared/palette";

export default {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#006398",
    dark: "#001D31",
    light: "#CCE5FF",
    contrast: getTransparent(WHITE, 0.87),
  },
  secondary: {
    main: "#A705AB",
    dark: "#380039",
    light: "#FFD7F7",
    contrast: WHITE,
  },
  background: {
    default: "#1E1E1E",
    paper: "#232323",
    elevation: ["#1E1E1E", "#232323", "#252525", "#272727", "#2A2A2A"],
  },
  ...sharedPalette,
};
