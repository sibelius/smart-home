import React from 'react';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { createGlobalStyle,  ThemeProvider } from 'styled-components';

const theme = createMuiTheme();

const GlobalStyle = createGlobalStyle`
  body {
   font-family: 'Work Sans', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
   font-family: 'Crimson Text', serif;
  }
`

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default Root;