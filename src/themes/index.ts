import { createTheme } from "@mui/material";
import { Theme } from "@mui/system";
import purpleDark from "./purple_dark";
import purpleLight from "./purple_light";
import orangeLight from "./orange_light";
import orangeDark from "./orange_dark";
import shared from "./shared";

export const WHITE = "#FFFFFF";
export const BLACK = "#000000";

export type ThemeOption = {
  label: string;
  theme: Theme;
};

const createCustomTheme = (themeSettings: any) => {
  const getConfig = (config: "palette" | "components" | "typography") => ({
    ...shared[config],
    ...themeSettings[config],
  });

  return createTheme({
    palette: getConfig("palette"),
    components: getConfig("components"),
    typography: getConfig("typography"),
  });
};

export const THEMES: { [label: string]: ThemeOption } = {
  MATERIAL_LIGHT: {
    label: "Material Light",
    theme: createCustomTheme({}),
  },
  MATERIAL_DARK: {
    label: "Material Dark",
    theme: createCustomTheme({ palette: { mode: "dark" } }),
  },
  BLUE_DARK: {
    label: "Blue Dark",
    theme: createCustomTheme(purpleDark),
  },
  BLUE_LIGHT: {
    label: "Blue Light",
    theme: createCustomTheme(purpleLight),
  },
  ORANGE_LIGHT: {
    label: "Orange Light",
    theme: createCustomTheme(orangeLight),
  },
  ORANGE_DARK: {
    label: "Orange Dark",
    theme: createCustomTheme(orangeDark),
  },
};

export const DEFAULT_THEME = THEMES.BLUE_DARK;

export type SystemThemeOption = keyof typeof THEMES;
