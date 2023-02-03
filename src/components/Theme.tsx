import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#8ACD03",
      main: "#8ACD03",
      dark: "#2E4401",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Plus Jakarta Sans",
        },
        h1: {
          fontWeight: 800,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          //   borderRadius: 20,
          boxShadow: "none",
          color: "black",
          backgroundColor: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: "3",
        },
      },
    },
  },
});
