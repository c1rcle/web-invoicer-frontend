import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useLocation } from 'react-router-dom';
import { Box, Divider } from '@material-ui/core';
import FeatureGrid from './FeatureGrid';
import Footer from './Footer';
import Hero from './Hero';
import HomeDialog from './HomeDialog';
import useHomeDialog from '../../../hooks/useHomeDialog';

const Home = () => {
  const location = useLocation();

  const { isDialogOpen, openDialog, closeDialog } = useHomeDialog();

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const checkLocation = () => {
    location.pathname !== '/' && !isDialogOpen && openDialog();
    location.pathname === '/' && isDialogOpen && closeDialog();
  };
  useEffect(checkLocation, [location]);

  return (
    <>
      {isLoggedIn && <Redirect to='invoices' />}
      <HomeDialog />
      <Hero />
      <FeatureGrid />
      <Box my={5}>
        <Divider variant='fullWidth' />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
