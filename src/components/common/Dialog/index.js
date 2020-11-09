import React from 'react';
import { Dialog as MaterialDialog, DialogActions, DialogContent } from '@material-ui/core';
import DialogHeader from './DialogHeader';

const Dialog = ({
  open,
  onClose,
  title,
  centeredTitle = false,
  closeButton = false,
  content,
  actions,
  children,
  ...props
}) => {
  return (
    <MaterialDialog open={open} onClose={onClose} {...props}>
      <DialogHeader
        title={title}
        onClose={onClose}
        centered={centeredTitle}
        closeButton={closeButton}
      />
      {content && <DialogContent>{content}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
      {children}
    </MaterialDialog>
  );
};

export default Dialog;
