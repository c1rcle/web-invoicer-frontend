import React from 'react';
import { Container, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';

const currentTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const App = () => {
  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Navigation />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
};

export default App;
