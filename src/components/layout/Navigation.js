import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { AppBar, Button, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon, MonetizationOnTwoTone as AppIcon } from '@material-ui/icons';
import { openDialog } from '../../slices/appSlice';
import Drawer from './AppDrawer';
import useStyles from './styles';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const classes = useStyles();

  const onClick = type => {
    dispatch(openDialog(type));
  };

  return (
    <>
      <Drawer open={drawerOpen} setOpen={setDrawerOpen} />
      <AppBar position='static' color='inherit'>
        <Toolbar>
          <IconButton
            edge='start'
            color='inherit'
            onClick={() => setDrawerOpen(true)}
            className={classes.appBarSpacer}>
            <MenuIcon />
          </IconButton>
          <AppIcon fontSize='large' className={classes.appBarLogo} color='primary' />
          <Typography variant='h6' className={classes.appBarTitle}>
            {t('title')}
          </Typography>
          <Hidden xsDown>
            <Button
              color='inherit'
              onClick={() => onClick('login')}
              className={classes.appBarSpacer}>
              {t('sign-in')}
            </Button>
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
