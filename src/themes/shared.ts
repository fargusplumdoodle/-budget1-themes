export const palette = {};

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

export const typography = {
  fontFamily: '"Ubuntu", "Roboto", "Helvetica", sans-serif',
};

const shared = {
  palette,
  components,
  typography,
};
export default shared;
