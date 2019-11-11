import { createMuiTheme } from "@material-ui/core/styles";

export const uiTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#6d6d6d",
      main: "#222222", // modify from #424242
      dark: "#1b1b1b",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#8bf6ff",
      main: "#4fc3f7",
      dark: "#0093c4",
      contrastText: "#000000"
    },
    type: "dark"
  }
});
