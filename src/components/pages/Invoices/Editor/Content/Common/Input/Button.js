import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';

const Button = ({ label, ...props }) => {
  return (
    <MaterialButton variant='outlined' color='primary' size='large' {...props}>
      {label}
    </MaterialButton>
  );
};

export default Button;
