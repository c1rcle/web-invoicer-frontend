import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog } from '@material-ui/core';
import DialogHeader from './DialogHeader';
import DialogAlert from './DialogAlert';
import Login from './DialogContent/Login';
import Register from './DialogContent/Register';
import useHomeDialog from '../../../../hooks/useHomeDialog';

const HomeDialog = () => {
  const { t } = useTranslation();

  const dialog = useHomeDialog();

  const dialogTitle = () => {
    return t(`home.dialog.${dialog.state.type}`);
  };

  return (
    <Dialog open={dialog.state.open} onClose={dialog.close} maxWidth='xs'>
      <DialogHeader onClose={dialog.close} title={dialogTitle()} />
      <DialogAlert />
      {dialog.state.type === 'login' ? <Login /> : <Register />}
    </Dialog>
  );
};

export default HomeDialog;
