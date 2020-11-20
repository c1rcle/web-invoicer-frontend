import React from 'react';
import { TextValidator } from 'react-material-ui-form-validator';

const DialogTextField = props => {
  return <TextValidator margin='normal' variant='outlined' fullWidth {...props} />;
};

export default DialogTextField;
