import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { setError } from '../../../../slices/userSlice';
import useStyles from './styles';

const DialogAlert = ({ locationKey }) => {
  const [displayedError, setDisplayedError] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const error = useSelector(state => state.user.error);

  const classes = useStyles();

  useEffect(() => {
    if (error) {
      if (error !== locationKey) dispatch(setError(null));
      else {
        setDisplayedError(error);
        setTimeout(() => {
          dispatch(setError(null));
        }, 5000);
      }
    }
  }, [error, dispatch, locationKey]);

  useEffect(() => {
    return () => dispatch(setError(null));
    // eslint-disable-next-line
  }, []);

  return (
    <Collapse in={Boolean(error)}>
      <Alert variant='outlined' severity='error' className={classes.dialogAlert}>
        {displayedError && t(`home.dialog.error.${displayedError}`)}
      </Alert>
    </Collapse>
  );
};

export default DialogAlert;
