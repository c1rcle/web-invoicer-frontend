import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Divider } from '@material-ui/core';
import FeatureGrid from './FeatureGrid';
import Footer from './Footer';
import Hero from './Hero';
import HomeDialog from './HomeDialog';
import useHomeDialog from '../../../hooks/useHomeDialog';

const Home = () => {
  const location = useLocation();

  const dialog = useHomeDialog();

  const checkLocation = () => {
    location.pathname !== '/' && !dialog.isDialogOpen && dialog.open();
    location.pathname === '/' && dialog.isDialogOpen && dialog.close();
  };
  useEffect(checkLocation, [location]);

  return (
    <>
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
