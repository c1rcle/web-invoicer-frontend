import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogActions, DialogContent } from '@material-ui/core';
import DialogTextField from './DialogTextField';
import useStyles from './styles';

const Login = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <>
      <DialogContent>
        <DialogTextField autoFocus label={t('home.dialog.email')} type='email' />
        <DialogTextField label={t('home.dialog.password')} type='password' />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button variant='contained' color='primary' size='large'>
          {t('sign-in')}
        </Button>
      </DialogActions>
    </>
  );
};

export default Login;
