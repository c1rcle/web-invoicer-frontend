import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return isLoggedIn || <Redirect to='/login' />;
};

export default Dashboard;
