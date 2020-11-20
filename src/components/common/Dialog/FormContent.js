import React from 'react';
import { useSelector } from 'react-redux';
import { DialogActions, DialogContent } from '@material-ui/core';
import ValidatorForm from '../ValidatorForm';
import SubmitButton from '../SubmitButton/SubmitButton';
import useStyles from './styles';

const FormContent = ({ onSubmit, children, submitText, validatorRef }) => {
  const classes = useStyles();

  const loading = useSelector(state => state.user.actionPending);

  return (
    <ValidatorForm onSubmit={onSubmit} validatorRef={validatorRef} noValidate>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.dialogActions}>
        <SubmitButton text={submitText} loading={loading} />
      </DialogActions>
    </ValidatorForm>
  );
};

export default FormContent;
