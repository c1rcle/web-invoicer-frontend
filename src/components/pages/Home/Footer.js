import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography } from '@material-ui/core';
import { openDialog } from '../../../slices/appSlice';

const Footer = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(openDialog('register'));
  };

  return (
    <Box mb={4} className='text-center'>
      <Typography variant='h5'>Register your account and get started for free!</Typography>
      <Box mt={2}>
        <Button variant='outlined' color='inherit' size='large' onClick={onClick}>
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
