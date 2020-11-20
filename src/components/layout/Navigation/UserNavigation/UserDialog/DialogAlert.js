import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { setError } from '../../../../../slices/userSlice';
import useStyles from './styles';

const DialogAlert = () => {
  const [displayedError, setDisplayedError] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const error = useSelector(state => state.user.error);

  const classes = useStyles();

  useEffect(() => {
    if (error) {
      setDisplayedError(error);
      setTimeout(() => {
        dispatch(setError(null));
      }, 5000);
    }
  }, [error, dispatch]);

  useEffect(() => {
    return () => dispatch(setError(null));
    // eslint-disable-next-line
  }, []);

  return (
    <Collapse in={Boolean(error)}>
      <Alert variant='outlined' severity='error' className={classes.dialogAlert}>
        {displayedError && t(`user.error.${displayedError}`)}
      </Alert>
    </Collapse>
  );
};

export default DialogAlert;
