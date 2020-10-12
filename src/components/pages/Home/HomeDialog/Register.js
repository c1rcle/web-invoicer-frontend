import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent, Typography } from '@material-ui/core';
import DialogTextField from './DialogTextField';
import useStyles from './styles';

const Register = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <>
      <DialogContent>
        <DialogTextField autoFocus label={t('home.dialog.name')} type='text' />
        <DialogTextField label={t('home.dialog.email')} type='email' />
        <DialogTextField label={t('home.dialog.password')} type='password' />
        <Typography variant='body2' color='textSecondary' className={classes.dialogConditions}>
          {t('home.dialog.terms')}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button variant='contained' color='primary' size='large'>
          {t('sign-up')}
        </Button>
      </DialogActions>
    </>
  );
};

export default Register;
