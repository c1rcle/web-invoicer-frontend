import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, DialogContentText } from '@material-ui/core';
import Dialog from '../../common/Dialog';

const DeleteDialog = ({ open, onClose }) => {
  const { t } = useTranslation();

  const deleteRecord = () => {

  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={t('table.delete')}
      content={<DialogContentText>{t('table.deleteText')}</DialogContentText>}
      actions={
        <>
          <Button onClick={deleteRecord} color='primary'>
            {t('table.delete')}
          </Button>
          <Button onClick={onClose} color='primary'>
            {t('table.cancel')}
          </Button>
        </>
      }
    />
  );
};

export default DeleteDialog;
