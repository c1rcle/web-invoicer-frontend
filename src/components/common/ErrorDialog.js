import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, DialogContentText } from '@material-ui/core';
import Dialog from '../common/Dialog';

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
    <Dialog
      open={Boolean(error)}
      onClose={closeDialog}
      title={getTitle()}
      content={<DialogContentText>{getText()}</DialogContentText>}
      actions={
        <Button onClick={closeDialog} color='primary'>
          {t('cancel')}
        </Button>
      }
    />
  );
};

export default ErrorDialog;
