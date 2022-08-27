import { Container as MuiContainer, styled } from "@mui/material";

export default styled(MuiContainer)(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };
});
