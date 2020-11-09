import React from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { IconButton, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './styles';

const DialogHeader = ({ title, onClose, centered, closeButton }) => {
  const classes = useStyles({ centered: centered });

  return (
    <MuiDialogTitle disableTypography className={classes.dialogTitle}>
      <Typography variant='h6'>{title}</Typography>
      {closeButton && (
        <IconButton className={classes.dialogCloseButton} onClick={onClose}>
          <Close />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};

export default DialogHeader;
