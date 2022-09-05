import React from "react";
import {
  Autocomplete,
  Divider as MuiDivider,
  Grid,
  InputLabel,
  Paper,
  styled,
  Switch,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { FunctionComponent, ReactElement, useState } from "react";
import { DEFAULT_THEME, ThemeOption, THEMES } from "../themes";

type ThemeSelectorProps = {
  children: ReactElement[] | ReactElement;
};

const ThemeDropdown = styled(Autocomplete)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  maxWidth: 200,
}));

const PageBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.default
}));

const Divider = styled(MuiDivider)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ThemeSelect: FunctionComponent<ThemeSelectorProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOption>(DEFAULT_THEME);
  const [dark, setDark] = useState(true);

  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <PageBase>
        <Grid container spacing={2} wrap="nowrap" alignItems="center">
          <Grid item xs={4}>
            <ThemeDropdown
              defaultValue={DEFAULT_THEME}
              options={Object.values(THEMES)}
              renderInput={(params) => <TextField {...params} label="Theme" />}
              onChange={(_, value) => {
                console.log(value);
                value && setTheme(value as ThemeOption);
              }}
            />
          </Grid>
          <Grid item container alignItems="center">
            <InputLabel>Dark</InputLabel>
            <Switch
              inputProps={{ "aria-label": "Dark Mode" }}
              checked={dark}
              onChange={() => setDark(!dark)}
            />
          </Grid>
        </Grid>
        <Divider />
        {children}
      </PageBase>
    </ThemeProvider>
  );
};

function withThemeDecorator(Story: FunctionComponent) {
  return (
    <ThemeSelect>
      <Story />
    </ThemeSelect>
  );
}
export default withThemeDecorator;
