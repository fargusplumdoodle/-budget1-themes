import tinycolor from "tinycolor2";

export const getTransparent = (colorStr: string, alpha: number) => {
  const color = tinycolor(colorStr);
  color.setAlpha(alpha);
  return color.toRgbString();
};
