import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Container, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Navigation from './components/layout/Navigation';
import Home from './components/pages/Home';

const App = () => {
  const theme = useSelector(state => state.app.theme);
  const muiTheme = createMuiTheme({
    palette: {
      type: theme
    }
  });

  return (
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
  );
};

export default App;
