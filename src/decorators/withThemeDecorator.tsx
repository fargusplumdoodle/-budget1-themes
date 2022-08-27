import React from "react";
import { Autocomplete, styled, TextField, ThemeProvider } from "@mui/material";
import { FunctionComponent, ReactElement, useState } from "react";
import { DEFAULT_THEME, ThemeOption, THEMES } from "../themes";
import PageBase from "../components/PageBase";

type ThemeSelectorProps = {
  children: ReactElement[] | ReactElement;
};

const ThemeDropdown = styled(Autocomplete)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  maxWidth: 200,
}));

const ThemeSelect: FunctionComponent<ThemeSelectorProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOption>(DEFAULT_THEME);

  return (
    <ThemeProvider theme={theme.theme}>
      <PageBase>
        <ThemeDropdown
          defaultValue={DEFAULT_THEME}
          options={Object.values(THEMES)}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Theme" />
          )}
          onChange={(_, value) => value && setTheme(value as ThemeOption)}
          getOptionLabel={(option: ThemeOption) => option.label}
        />
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
