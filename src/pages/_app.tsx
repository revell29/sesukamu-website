import React from "react";
import App from "next/app";
import "../../styles/tailwind.css";
import {
  ThemeProvider,
  CSSReset,
  DarkMode,
  ColorModeProvider,
} from "@chakra-ui/core";
import { Global, css } from "@emotion/core";

import theme from "../theme";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Global
          styles={css`
            body {
              min-height: 100vh;
              font-family: "Poppins", sans-serif;
            }
            *::selection {
              text-shadow: none;
              color: black;
              background: white;
            }
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
