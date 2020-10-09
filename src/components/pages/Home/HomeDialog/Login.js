import React from 'react';
import { useTranslation } from 'react-i18next';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const Login = () => {
  const { t } = useTranslation();

  return (
    <>
      <DialogTitle>{t('home.dialog.login')}</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </>
  );
};

export default Login;
