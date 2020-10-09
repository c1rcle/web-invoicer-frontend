import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import lightTheme from './styles/lightTheme.json';
import darkTheme from './styles/darkTheme.json';

const App = () => {
  const theme = useSelector(state => state.app.theme);
  const muiTheme = createMuiTheme(theme === 'light' ? lightTheme : darkTheme);

  return (
    <Suspense fallback='loading'>
      <Router>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Navigation />
          <Container>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Container>
        </ThemeProvider>
      </Router>
    </Suspense>
  );
};

export default App;
