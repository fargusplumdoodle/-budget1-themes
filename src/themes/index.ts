import { createTheme } from "@mui/material";
import darkPurpleTheme from "./dark_purple/theme";

export const WHITE = "#FFFFFF";
export const BLACK = "#000000";

export const THEMES = {
  DEFAULT: {
    label: "Material Default",
    theme: createTheme({}),
  },
  DARK_PURPLE: {
    label: "Dark Purple",
    theme: darkPurpleTheme,
  },
};
