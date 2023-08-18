import * as React from "react";
import { initializeApp } from "firebase/app";

import "./globalScss.scss";
import "@fontsource/plus-jakarta-sans";
import type { HeadFC, PageProps } from "gatsby";
import { Box, Container } from "@mui/material";
import Landing from "./Landing";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { theme } from "../components/Theme";
import { firebaseConfig } from "../fb-config";
export const app = initializeApp(firebaseConfig);
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box
      flex={1}
      sx={{
        flex: 1,
        height: "100vh",
        overflowY: "auto",
        // background: "black",
      }}
    >
      <ThemeProvider theme={theme}>
        <Landing></Landing> 
      </ThemeProvider>
    </Box>
  );
};

export default IndexPage;
