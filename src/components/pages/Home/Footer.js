import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Box mt={8} mb={4} className='text-center'>
      <Typography variant='h5'>Register your account and get started for free!</Typography>
      <Box mt={2}>
        <Button variant='outlined' color='inherit' size='large'>
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
