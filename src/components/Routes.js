import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import Home from './pages/Home';
import Invoices from './pages/Invoices';
import Products from './pages/Products';
import Counterparties from './pages/Counterparties';
import Employees from './pages/Employees';
import DataVisualization from './pages/DataVisualization';
import NotFound from './pages/NotFound';

const Routes = () => {
  const validHomePaths = [
    '/',
    '/login',
    '/register',
    '/resetPassword',
    '/changePassword',
    '/confirmEmail'
  ];

  return (
    <Switch>
      <Route exact path={validHomePaths} component={Home} />
      <PrivateRoute exact path='/invoices' component={Invoices} />
      <PrivateRoute exact path='/products' component={Products} />
      <PrivateRoute exact path='/counterparties' component={Counterparties} />
      <PrivateRoute exact path='/employees' component={Employees} />
      <PrivateRoute exact path='/dataVisualization' component={DataVisualization} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
