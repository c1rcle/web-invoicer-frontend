import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
import useStyles from './styles';

const Login = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <>
      <DialogContent>
        <TextField
          autoFocus
          margin='normal'
          label={t('home.dialog.email')}
          type='email'
          fullWidth
        />
        <TextField margin='normal' label={t('home.dialog.password')} type='password' fullWidth />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button variant='contained' color='primary'>
          {t('sign-in')}
        </Button>
      </DialogActions>
    </>
  );
};

export default Login;
