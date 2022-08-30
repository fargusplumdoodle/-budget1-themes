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
      root: ({ theme }: any) => ({
        '& [class*="MuiFilledInput-root"]': {
          borderRadius: 4,
        },
        [`& [class*="MuiFilledInput-root"].Mui-error`]: {
          borderColor: theme.palette.error.dark,
          borderStyle: "solid",
          borderWidth: 1,
        },
      }),
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
