import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = props => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <>
      {isLoggedIn || <Redirect to='/' />}
      <Route {...props} />
    </>
  );
};

export default PrivateRoute;
