import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, DialogContentText } from '@material-ui/core';
import Dialog from '../common/Dialog';

const ErrorDialog = ({ error, clearAction, onClose }) => {
  const [displayedError, setDisplayedError] = useState('');

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const closeDialog = () => {
    onClose ? onClose() : dispatch(clearAction(null));
  };

  const getTitle = () => (displayedError ? t(`errors.${displayedError}`) : '');

  const getText = () => {
    const createErrors = ['create', 'invoice', 'counterparty'];
    const translationKey = () => {
      switch (displayedError) {
        case createErrors.includes(displayedError):
          return 'create';
        case 'delete':
          return 'delete';
        case 'details':
          return 'details';
        default:
          return 'serverDown';
      }
    };

    return t(`errors.text.${translationKey()}`);
  };

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
