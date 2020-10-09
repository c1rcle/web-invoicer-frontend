import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppBar, Box, Button, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon, MonetizationOnTwoTone as AppIcon } from '@material-ui/icons';
import { openDialog } from '../../slices/appSlice';
import Drawer from './AppDrawer';
import './styles/navigation.css';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const onClick = type => {
    dispatch(openDialog(type));
  };

  return (
    <>
      <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
      <AppBar position='static' color='inherit'>
        <Toolbar>
          <Box mr={1}>
            <IconButton edge='start' color='inherit' onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <AppIcon fontSize='large' className='app-bar-logo' color='primary' />
          <Typography variant='h6' className='app-bar-title'>
            {t('title')}
          </Typography>
          <Hidden xsDown>
            <Box mr={1}>
              <Button color='inherit' onClick={() => onClick('login')}>
                {t('sign-in')}
              </Button>
            </Box>
            <Button variant='outlined' color='inherit' onClick={() => onClick('register')}>
              {t('sign-up')}
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
