import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField } from '@material-ui/core';
import DialogTitle from './DialogTitle';
import useStyles from './styles';

const Login = ({ onClose }) => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <>
      <DialogTitle onClose={onClose} text={t('home.dialog.login')} />
      <DialogContent className='text-center'>
        <TextField autoFocus margin='dense' label={t('home.dialog.email')} type='email' fullWidth />
        <TextField margin='dense' label={t('home.dialog.password')} type='password' fullWidth />
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
