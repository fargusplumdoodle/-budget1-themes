import { WHITE } from "..";
import { getTransparent } from "../../util";
import tinycolor from "tinycolor2";

export default {
  mode: "dark",
  text: {
    primary: tinycolor(WHITE).toRgbString(),
    secondary: getTransparent(WHITE, 0.7),
    disabled: getTransparent(WHITE, 0.5),
  },
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
  error: {
    main: "#BA1A1A",
    dark: "#93000A",
    light: "#FFDAD6",
    contrast: "",
  },
  warning: {
    main: "#ED6C02",
    dark: "#E65100",
    light: "#FF9800",
    contrast: WHITE,
  },
  info: {
    main: "#0288D1",
    dark: "#01579B",
    light: "#03A9F4",
    contrast: WHITE,
  },
  success: {
    main: "#2E7D32",
    dark: "#1B5E20",
    light: "#4CAF50",
    contrast: WHITE,
  },
  background: {
    default: "#1E1E1E",
    paper: "#232323",
    elevation: ["#1E1E1E", "#232323", "#252525", "#272727", "#2A2A2A"],
  },
};
