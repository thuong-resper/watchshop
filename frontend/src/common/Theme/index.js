import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "#fed700",
    secondary: "#3f51b5",
    error: "#E64A19",
    textColor: "#fff",
    defaultTextColor: "#000000",
    hover: "rgba(0,0,0,0.08)",
    link: "rgba(0, 0, 0, 0.87)",
    whiteThin: "#00000033",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#7B1FA2",
    textColor: "#334141",
    border: "#CCCCC",
  },
});

export default theme;
