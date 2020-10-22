import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Hidden } from '@material-ui/core';
import useHomeDialog from '../../../hooks/useHomeDialog';
import useStyles from './styles';

const HomeNavigation = () => {
  const { t } = useTranslation();

  const dialog = useHomeDialog();

  const classes = useStyles();

  return (
    <Hidden xsDown>
      <Button
        color='inherit'
        onClick={() => dialog.openForType('login')}
        className={classes.appBarSpacer}>
        {t('signIn')}
      </Button>
      <Button variant='outlined' color='inherit' onClick={() => dialog.openForType('register')}>
        {t('signUp')}
      </Button>
    </Hidden>
  );
};

export default HomeNavigation;
