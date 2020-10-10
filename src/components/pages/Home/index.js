import React from 'react';
import { Box, Divider } from '@material-ui/core';
import FeatureGrid from './FeatureGrid';
import Footer from './Footer';
import Hero from './Hero';
import HomeDialog from './HomeDialog';

const Home = () => {
  return (
    <div>
      <HomeDialog />
      <Hero />
      <FeatureGrid />
      <Box my={5}>
        <Divider variant='fullWidth' />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
