import { TextField } from '@material-ui/core';
import React from 'react';

const Picker = ({ children, ...props }) => {
  return (
    <TextField select variant='outlined' fullWidth {...props}>
      {children}
    </TextField>
  );
};

export default Picker;
