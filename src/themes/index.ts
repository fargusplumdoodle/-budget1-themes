import { createTheme, ThemeOptions } from "@mui/material";
import classic from "./classic";
import orange from "./orange";
import red from "./red";
import shared from "./shared";
import merge from "lodash/merge";
import { SystemThemeOption, ThemeOption } from "../types";

const createCustomTheme = (label: string, themeSettings: any): ThemeOption => {
  const sharedTheme = {
    palette: shared.palette,
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
    dark: createTheme(merge(sharedTheme, getTheme("dark"))),
    light: createTheme(merge(sharedTheme, getTheme("light"))),
  };
};

export const THEMES: { [label: string]: ThemeOption } = {
  MATERIAL: createCustomTheme("Material", {}),
  CLASSIC: createCustomTheme("Classic", classic),
  ORANGE: createCustomTheme("Orange", orange),
  RED: createCustomTheme("Red", red),
};

export const DEFAULT_THEME: SystemThemeOption = "CLASSIC";
