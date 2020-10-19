import React from 'react';
import { TextValidator } from 'react-material-ui-form-validator';

const DialogTextField = props => {
  return (
    <TextValidator
      margin='normal'
      variant='outlined'
      fullWidth
      containerProps={{ style: { display: 'inline-flex', width: '100%' } }}
      {...props}
    />
  );
};

export default DialogTextField;
