import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
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
          color: "white",
          boxShadow: "none",
          backgroundColor: green[700],
          "&:hover": {
            backgroundColor: green[500],
            color: "white",
          },
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
