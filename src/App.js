import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import SuspenseLoading from './components/SuspenseLoading';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import lightTheme from './styles/lightTheme.json';
import darkTheme from './styles/darkTheme.json';

const App = () => {
  const theme = useSelector(state => state.app.theme);
  const muiTheme = createMuiTheme(theme === 'light' ? lightTheme : darkTheme);

  return (
    <Router>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Suspense fallback={<SuspenseLoading />}>
          <Navigation />
          <Container>
            <Switch>
              <Route path='/' component={Home} />
            </Switch>
          </Container>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default App;
