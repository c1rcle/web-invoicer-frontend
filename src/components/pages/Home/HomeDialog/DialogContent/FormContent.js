import React from 'react';
import { DialogActions, DialogContent } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import SubmitButton from './common/SubmitButton';
import useStyles from '../styles';

const FormContent = ({ onSubmit, children, submitText }) => {
  const classes = useStyles();

  return (
    <ValidatorForm onSubmit={onSubmit} noValidate>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.dialogActions}>
        <SubmitButton text={submitText} />
      </DialogActions>
    </ValidatorForm>
  );
};

export default FormContent;
