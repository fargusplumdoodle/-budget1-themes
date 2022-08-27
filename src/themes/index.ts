import { createTheme } from "@mui/material";
import { Theme } from "@mui/system";
import purpleDark from "./purple_dark";
import purpleLight from "./purple_light";
import orangeLight from "./orange_light";
import orangeDark from "./orange_dark";

export const WHITE = "#FFFFFF";
export const BLACK = "#000000";

export type ThemeOption = {
  label: string;
  theme: Theme;
};

export const THEMES: { [label: string]: ThemeOption } = {
  MATERIAL_LIGHT: {
    label: "Material Light",
    theme: createTheme({}),
  },
  MATERIAL_DARK: {
    label: "Material Dark",
    theme: createTheme({ palette: { mode: "dark" } }),
  },
  CLASSIC_DARK: {
    label: "Classic Dark",
    theme: purpleDark,
  },
  CLASSIC_LIGHT: {
    label: "Classic Light",
    theme: purpleLight,
  },
  ORANGE_LIGHT: {
    label: "Orange Light",
    theme: orangeLight,
  },
  ORANGE_DARK: {
    label: "Orange Dark",
    theme: orangeDark,
  },
};

export const DEFAULT_THEME = THEMES.CLASSIC_DARK;
