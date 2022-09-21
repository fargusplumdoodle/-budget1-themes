import tinycolor from "tinycolor2";

export const getTransparent = (colorStr: string, alpha: number) => {
  const color = tinycolor(colorStr);
  color.setAlpha(alpha);
  return color.toRgbString();
};

export const getTransparentRange = (color: string) => {
  return [...new Array(100).keys()].map((opacity) =>
    getTransparent(color, opacity / 100)
  );
};

// Taken from
// https://github.com/mui/material-ui/blob/9cfcd8c3db362713fbae9fdd0d0c618b1b9d812d/packages/mui-material/src/FilledInput/FilledInput.js
export const getMuiFilledInputStyles = (mode: "light" | "dark") => {
  const light = mode === "light";
  const backgroundColor = light
    ? "rgba(0, 0, 0, 0.06)"
    : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light
    ? "rgba(0, 0, 0, 0.09)"
    : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light
    ? "rgba(0, 0, 0, 0.12)"
    : "rgba(255, 255, 255, 0.12)";

  return {
    backgroundColor,
    hoverBackground,
    disabledBackground,
  };
};
