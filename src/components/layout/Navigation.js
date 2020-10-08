import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon, MonetizationOnTwoTone as AppIcon } from '@material-ui/icons';
import './styles/navigation.css';

const Navigation = () => {
  return (
    <AppBar position='static' color='inherit'>
      <Toolbar>
        <Box mr={1}>
          <IconButton edge='start' color='inherit'>
            <MenuIcon />
          </IconButton>
        </Box>
        <AppIcon fontSize='large' className='app-bar-logo' />
        <Typography variant='h6' className='app-bar-title'>
          Web Invoicer
        </Typography>
        <div className='app-bar-buttons'>
          <Box mr={1}>
            <Button color='inherit'>Sign in</Button>
          </Box>
          <Button variant='outlined' color='inherit'>
            Sign up
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
