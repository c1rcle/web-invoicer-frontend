import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog } from '@material-ui/core';
import { closeDialog } from '../../../../slices/appSlice';
import Login from './Login';
import Register from './Register';

const HomeDialog = () => {
  const dispatch = useDispatch();

  const dialog = useSelector(state => state.app.dialog);

  const handleClose = () => {
    dispatch(closeDialog());
  };

  return (
    <Dialog open={dialog.open} onClose={handleClose}>
      {dialog.type === 'login' ? <Login /> : <Register />}
    </Dialog>
  );
};

export default HomeDialog;
