import React, { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, createMuiTheme, CssBaseline, ThemeProvider, Toolbar } from '@material-ui/core';
import Navigation from './components/layout/Navigation';
import SuspenseLoading from './components/SuspenseLoading';
import Routes from './components/Routes';
import lightTheme from './styles/lightTheme.json';
import darkTheme from './styles/darkTheme.json';

const App = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const theme = useSelector(state => state.app.theme);
  const muiTheme = createMuiTheme(theme === 'light' ? lightTheme : darkTheme);

  return (
    <Router>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Suspense fallback={<SuspenseLoading />}>
          <Navigation />
          <Container {...(isLoggedIn && { className: 'logged-in-container' })}>
            <Toolbar />
            <Routes />
          </Container>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default App;
