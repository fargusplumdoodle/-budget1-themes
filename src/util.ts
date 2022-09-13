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
