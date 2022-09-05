import {
  Grid,
  useTheme,
  Typography,
  Palette,
  PaletteColor,
} from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { FunctionComponent } from "react";
import capitalize from "lodash/capitalize";
import tinycolor from "tinycolor2";

const fields: (keyof PaletteColor)[] = ["main", "light", "dark"];
const schemes: (keyof Palette)[] = [
  "primary",
  "secondary",
  "error",
  "warning",
  "info",
  "success",
];

interface ColorBoxProps {
  colorScheme: keyof Palette;
}

const ColorBox: FunctionComponent<ColorBoxProps> = ({ colorScheme }) => {
  const theme = useTheme();
  const color = theme.palette[colorScheme] as PaletteColor;

  const getTextColor = (field: keyof PaletteColor) => {
    switch (field) {
      case "dark":
        return color.light;
      case "light":
        return color.dark;
      default:
        return color.contrastText;
    }
  };

  return (
    <Grid item container spacing={1}>
      <Grid item component={Typography} variant="h4">
        {capitalize(colorScheme)}
      </Grid>
      <Grid item container alignItems="stretch" wrap="nowrap" height={200}>
        {fields.map((field) => {
          const textColor = getTextColor(field);
          const c = tinycolor(color[field]);
          return (
            <Grid
              container
              item
              xs
              key={`${colorScheme}-${field}`}
              sx={{ backgroundColor: c.toRgbString(), p: 1 }}
              justifyContent="space-between"
              direction="column"
            >
              <Typography color={textColor} variant="h6">
                {capitalize(field)}
              </Typography>
              <Grid item textAlign="right">
                <Typography color={textColor}>{c.toHexString()}</Typography>
                <Typography color={textColor}>{c.toRgbString()}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

const Template: ComponentStory<typeof ColorBox> = function () {
  return (
    <Grid container spacing={4}>
      {schemes.map((scheme) => (
        <ColorBox key={scheme} colorScheme={scheme} />
      ))}
    </Grid>
  );
};

export default {
  title: "Palette",
  component: ColorBox,
} as ComponentMeta<typeof ColorBox>;

export const Default = Template.bind({});
Default.args = {};
