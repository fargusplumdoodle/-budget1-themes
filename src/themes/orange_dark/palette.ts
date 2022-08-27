import { PaletteMode } from "@mui/material";
import { WHITE } from "..";
import { getTransparent } from "../../util";
import sharedPalette from "../shared/palette";

export default {
  mode: "dark" as PaletteMode,
  primary: {
    main: "#FB9B7F",
    contrast: getTransparent(WHITE, 0.87),
  },
  secondary: {
    main: "#10CCD9",
    contrast: WHITE,
  },
  // background: {
  //   default: "#FAFBFB",
  //   paper: WHITE,
  // },
  ...sharedPalette,
};
