import React from 'react';
import { useTranslation } from 'react-i18next';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const Register = () => {
  const { t } = useTranslation();

  return (
    <>
      <DialogTitle>{t('home.dialog.register')}</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </>
  );
};

export default Register;
