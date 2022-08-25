import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeSelector from "./ThemeSelector";

export default {
  title: "TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = function (args) {
  return (
    <ThemeSelector>
      <Box>
        <Paper>
          <TextField variant="filled" />
          <Button variant="contained">Ah</Button>
          <Typography>Ayoh</Typography>
        </Paper>
      </Box>
          <Typography>Ayoh</Typography>
    </ThemeSelector>
  );
};

export const Default = Template.bind({});
Default.args = {};
