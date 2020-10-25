import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { Menu as MenuIcon, MonetizationOnTwoTone as AppIcon } from '@material-ui/icons';
import Drawer from '../AppDrawer';
import HomeNavigation from './HomeNavigation';
import UserNavigation from './UserNavigation';
import useDrawer from '../../../hooks/useDrawer';
import useTokenCheck from '../../../hooks/useTokenCheck';
import useStyles from './styles';

const Navigation = () => {
  const { t } = useTranslation();

  const isLgUp = useMediaQuery(useTheme().breakpoints.up('lg'));

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const { open } = useDrawer();

  const classes = useStyles();

  useTokenCheck();

  return (
    <>
      <Drawer isLoggedIn={isLoggedIn} isLgUp={isLgUp} />
      <AppBar position='fixed' color='inherit' className={classes.appBar}>
        <Toolbar>
          {(isLoggedIn && isLgUp) || (
            <IconButton
              edge='start'
              color='inherit'
              onClick={open}
              className={classes.appBarSpacer}>
              <MenuIcon />
            </IconButton>
          )}
          <AppIcon fontSize='large' className={classes.appBarLogo} color='primary' />
          <Typography variant='h6' className={classes.appBarTitle}>
            {t('title')}
          </Typography>
          {isLoggedIn ? <UserNavigation /> : <HomeNavigation />}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
