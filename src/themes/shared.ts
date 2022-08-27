import { WHITE } from "..";

export const palette = {
//   error: {
//     main: "#BA1A1A",
//     dark: "#93000A",
//     light: "#FFDAD6",
//     contrast: "",
//   },
//   warning: {
//     main: "#ED6C02",
//     dark: "#E65100",
//     light: "#FF9800",
//     contrast: WHITE,
//   },
//   info: {
//     main: "#0288D1",
//     dark: "#01579B",
//     light: "#03A9F4",
//     contrast: WHITE,
//   },
//   success: {
//     main: "#2E7D32",
//     dark: "#1B5E20",
//     light: "#4CAF50",
//     contrast: WHITE,
//   },
};

export const components = {
  MuiTextField: {
    defaultProps: {
      variant: "filled",
      InputProps: {
        disableUnderline: true,
      },
    },
    styleOverrides: {
      root: {
        '& [class*="MuiFilledInput-root"]': {
          borderRadius: 4,
        },
      },
    },
  },
  MuiButton: {
    defaultProps: { variant: "contained", disableElevation: true },
  },
};

export default {
  palette,
  components,
};
