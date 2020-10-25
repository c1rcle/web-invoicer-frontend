import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Hidden } from '@material-ui/core';
import useHomeDialog from '../../../hooks/useHomeDialog';
import useStyles from './styles';

const HomeNavigation = () => {
  const { t } = useTranslation();

  const { openDialogForType } = useHomeDialog();

  const classes = useStyles();

  return (
    <Hidden xsDown>
      <Button
        color='inherit'
        onClick={() => openDialogForType('login')}
        className={classes.appBarSpacer}>
        {t('signIn')}
      </Button>
      <Button variant='outlined' color='inherit' onClick={() => openDialogForType('register')}>
        {t('signUp')}
      </Button>
    </Hidden>
  );
};

export default HomeNavigation;
