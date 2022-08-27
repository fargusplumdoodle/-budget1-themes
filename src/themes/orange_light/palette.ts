import { PaletteMode } from "@mui/material";
import { WHITE } from "..";
import { getTransparent } from "../../util";
import sharedPalette from "../shared/palette";

export default {
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
    paper: WHITE,
  },
  ...sharedPalette,
};
