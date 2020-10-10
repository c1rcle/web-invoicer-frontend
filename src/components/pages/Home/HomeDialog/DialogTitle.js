import React from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './styles';

const DialogTitle = ({ text, onClose }) => {
  const classes = useStyles();

  return (
    <MuiDialogTitle disableTypography className={classes.dialogTitle}>
      <Typography variant='h6'>{text}</Typography>
      {onClose && (
        <IconButton className={classes.dialogCloseButton} onClick={onClose}>
          <Close />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};

export default DialogTitle;
