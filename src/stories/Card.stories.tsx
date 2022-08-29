import { Grid, Card, Skeleton, Box } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const elevations = [...new Array(5).keys()];

const Template: ComponentStory<typeof Card> = function (args) {
  return (
    <Grid container spacing={1} gap={1}>
      {elevations.map((i) => (
        <Grid item key={i} component={Card} width={300} height={300} />
      ))}
    </Grid>
  );
};

export const Default = Template.bind({});
Default.args = {};
