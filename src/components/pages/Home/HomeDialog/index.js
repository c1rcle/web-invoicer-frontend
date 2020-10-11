import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dialog } from '@material-ui/core';
import { closeDialog } from '../../../../slices/appSlice';
import DialogHeader from './DialogHeader';
import Login from './Login';
import Register from './Register';

const HomeDialog = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const dialog = useSelector(state => state.app.dialog);

  const handleClose = () => {
    dispatch(closeDialog());
  };

  const dialogTitle = () => {
    return t(`home.dialog.${dialog.type}`);
  };

  return (
    <Dialog open={dialog.open} onClose={handleClose} maxWidth='xs'>
      <DialogHeader onClose={handleClose} title={dialogTitle()} />
      {dialog.type === 'login' ? <Login /> : <Register />}
    </Dialog>
  );
};

export default HomeDialog;
