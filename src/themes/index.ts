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

const createBudgetTheme = (themeSettings: Partial<Theme>) => {
  return createTheme({
    palette: { ...shared.palette, ...themeSettings.palette },
    components: { ...shared.components, ...themeSettings.components },
  });
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
    label: "Purple Dark",
    theme: createBudgetTheme(purpleDark),
  },
  CLASSIC_LIGHT: {
    label: "Purple Light",
    theme: createBudgetTheme(purpleLight),
  },
  ORANGE_LIGHT: {
    label: "Orange Light",
    theme: createBudgetTheme(orangeLight),
  },
  ORANGE_DARK: {
    label: "Orange Dark",
    theme: createBudgetTheme(orangeDark),
  },
};

export const DEFAULT_THEME = THEMES.CLASSIC_DARK;
