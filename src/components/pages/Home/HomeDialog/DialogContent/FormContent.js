import React from 'react';
import { useSelector } from 'react-redux';
import { DialogActions, DialogContent } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import SubmitButton from '../../../../common/SubmitButton/SubmitButton';
import useStyles from '../styles';

const FormContent = ({ onSubmit, children, submitText }) => {
  const classes = useStyles();

  const loading = useSelector(state => state.user.actionPending);

  return (
    <ValidatorForm onSubmit={onSubmit} noValidate>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.dialogActions}>
        <SubmitButton text={submitText} loading={loading} />
      </DialogActions>
    </ValidatorForm>
  );
};

export default FormContent;
