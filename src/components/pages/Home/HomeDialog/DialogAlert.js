import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Alert from '@material-ui/lab/Alert';
import { setError } from '../../../../slices/userSlice';
import useStyles from './styles';

const DialogAlert = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const error = useSelector(state => state.user.error);

  const classes = useStyles();

  useEffect(() => {
    error &&
      error !== 'TOKEN_REFRESH' &&
      setTimeout(() => {
        dispatch(setError(null));
      }, 5000);
  }, [error, dispatch]);

  return (
    error && (
      <Alert variant='outlined' severity='error' className={classes.dialogAlert}>
        {t(`home.dialog.error.${error}`)}
      </Alert>
    )
  );
};

export default DialogAlert;
