import { PaletteMode } from "@mui/material";
import { WHITE } from "..";
import { getTransparent } from "../../util";
import sharedPalette from "../shared/palette";

export default {
  mode: "light" as PaletteMode,
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
    default: "#FAFBFB",
    paper: WHITE,
  },
  ...sharedPalette,
};
