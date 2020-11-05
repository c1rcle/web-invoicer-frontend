import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const ErrorDialog = ({ error, clearAction }) => {
  const [displayedError, setDisplayedError] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const closeDialog = () => {
    dispatch(clearAction(null));
  };

  const getTitle = () => (displayedError ? t(`tableError.${displayedError}`) : '');

  const getText = () =>
    t(`tableError.text.${displayedError === 'details' ? 'details' : 'serverDown'}`);

  useEffect(() => {
    error && setDisplayedError(error);
  }, [error]);

  return (
    <Dialog open={Boolean(error)} onClose={closeDialog}>
      <DialogTitle>{getTitle()}</DialogTitle>
      <DialogContent>
        <DialogContentText>{getText()}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color='primary'>
          {t('cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;
