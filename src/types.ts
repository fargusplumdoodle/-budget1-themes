import { Theme } from "@mui/system";
import { THEMES } from "./themes";

export type ThemeOption = {
  label: string;
  light: Theme;
  dark: Theme;
};

export type SystemThemeOption = keyof typeof THEMES;
