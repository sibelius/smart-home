import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';

const theme = createMuiTheme();

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default Root;