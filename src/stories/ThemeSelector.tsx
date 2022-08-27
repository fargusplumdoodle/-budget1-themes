import {
  Autocomplete,
  Box,
  Divider,
  TextField,
  ThemeProvider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { FunctionComponent, ReactElement, useState } from "react";
import { THEMES } from "../themes";

type ThemeSelectorProps = {
  children: ReactElement[] | ReactElement;
};

const ThemeSelector: FunctionComponent<ThemeSelectorProps> = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.DARK_PURPLE);

  return (
    <>
        <Autocomplete
          options={Object.values(THEMES)}
          renderInput={(params) => <TextField {...params} label="Theme" />}
          onChange={(_, value) => value && setTheme(value)}
        />
      <ThemeProvider theme={theme.theme}>
        <Box marginTop={4}>{children}</Box>
      </ThemeProvider>
    </>
  );
};

export default ThemeSelector;
