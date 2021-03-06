import { createMuiTheme } from "@material-ui/core/styles";
import { deepOrange, blue } from "@material-ui/core/colors";
export default createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      ...blue,
      // main: "#12a4b9",
    },
    secondary: {
      main: deepOrange[500],
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Poppins"],
      },
    },
  },
});
