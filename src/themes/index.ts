import { createTheme, ThemeOptions } from "@mui/material";
import { Theme } from "@mui/system";
import classic from "./classic";
import orange from "./orange";
import red from "./red";
import shared from "./shared";
import merge from "lodash/merge";

export type ThemeOption = {
  label: string;
  light: Theme;
  dark: Theme;
};

const createCustomTheme = (label: string, themeSettings: any): ThemeOption => {
  const sharedTheme: ThemeOptions = {
    components: shared.components,
    typography: shared.typography,
  };

  const getTheme = (mode: "dark" | "light"): ThemeOptions => ({
    palette: { ...themeSettings[`${mode}Palette`], mode },
    components: themeSettings.components,
    typography: themeSettings.typography,
  });

  return {
    label,
    dark: createTheme(merge(getTheme("dark"), sharedTheme)),
    light: createTheme(merge(sharedTheme, getTheme("light"))),
  };
};

export const THEMES: { [label: string]: ThemeOption } = {
  MATERIAL: createCustomTheme("Material", {}),
  CLASSIC: createCustomTheme("Classic", classic),
  ORANGE: createCustomTheme("Orange", orange),
  RED: createCustomTheme("Red", red),
};

export const DEFAULT_THEME = THEMES.CLASSIC;

export type SystemThemeOption = keyof typeof THEMES;
