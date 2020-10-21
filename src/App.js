import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import SuspenseLoading from './components/SuspenseLoading';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';
import lightTheme from './styles/lightTheme.json';
import darkTheme from './styles/darkTheme.json';

const App = () => {
  const theme = useSelector(state => state.app.theme);
  const muiTheme = createMuiTheme(theme === 'light' ? lightTheme : darkTheme);

  const validHomePaths = [
    '/',
    '/login',
    '/register',
    '/resetPassword',
    '/changePassword',
    '/confirmEmail'
  ];

  return (
    <Router>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Suspense fallback={<SuspenseLoading />}>
          <Navigation />
          <Container>
            <Switch>
              <Route exact path={validHomePaths} component={Home} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default App;
