import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, DialogContentText } from '@material-ui/core';
import Dialog from '../../../common/Dialog';
import { deleteInvoice } from '../../../../slices/invoiceSlice';

const DeleteDialog = ({ open, onClose, id }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const deleteRecord = () => {
    dispatch(deleteInvoice(id));
    onClose();
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
