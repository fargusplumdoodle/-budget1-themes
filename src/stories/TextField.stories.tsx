import {
  Box,
  Button,
  Container as MuiContainer,
  Paper as MuiPaper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ThemeSelect from "../decorators/withThemeDecorator";

export default {
  title: "TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Template: ComponentStory<typeof TextField> = function (args) {
  return (
    <Paper>
      <TextField variant="filled" />
      <Button variant="contained">Ah</Button>
      <Typography>Ayoh</Typography>
      <Typography>Ayoh</Typography>
    </Paper>
  );
};

export const Default = Template.bind({});
Default.args = {};
