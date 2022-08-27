import React from "react";
import {
  Autocomplete,
  Divider as MuiDivider,
  styled,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { FunctionComponent, ReactElement, useState } from "react";
import { DEFAULT_THEME, ThemeOption, THEMES } from "../themes";
import PageBaseDefault from "../components/PageBase";

type ThemeSelectorProps = {
  children: ReactElement[] | ReactElement;
};

const ThemeDropdown = styled(Autocomplete)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  maxWidth: 200,
}));

const PageBase = styled(PageBaseDefault)(() => ({
  width: "100vw",
  height: "100vh",
}));

const Divider = styled(MuiDivider)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

const ThemeSelect: FunctionComponent<ThemeSelectorProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOption>(DEFAULT_THEME);

  return (
    <ThemeProvider theme={theme.theme}>
      <PageBase>
        <ThemeDropdown
          defaultValue={DEFAULT_THEME}
          options={Object.values(THEMES)}
          renderInput={(params) => <TextField {...params} label="Theme" />}
          onChange={(_, value) => value && setTheme(value as ThemeOption)}
        />
        <Divider />
        {children}
      </PageBase>
    </ThemeProvider>
  );
};

export default function (Story: FunctionComponent) {
  return (
    <ThemeSelect>
      <Story />
    </ThemeSelect>
  );
}