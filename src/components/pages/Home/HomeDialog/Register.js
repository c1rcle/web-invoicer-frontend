import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, TextField, Typography } from '@material-ui/core';
import useStyles from './styles';

const Register = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <>
      <DialogContent>
        <TextField autoFocus margin='normal' label={t('home.dialog.name')} type='text' fullWidth />
        <TextField margin='normal' label={t('home.dialog.email')} type='email' fullWidth />
        <TextField margin='normal' label={t('home.dialog.password')} type='password' fullWidth />
        <Typography variant='body2' color='textSecondary' className={classes.dialogConditions}>
          {t('home.dialog.terms')}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button variant='contained' color='primary'>
          {t('sign-up')}
        </Button>
      </DialogActions>
    </>
  );
};

export default Register;
