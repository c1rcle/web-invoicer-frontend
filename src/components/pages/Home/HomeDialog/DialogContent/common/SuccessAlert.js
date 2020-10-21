import React from 'react';
import { Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import useStyles from './styles';

const SuccessAlert = ({ success, text }) => {
  const classes = useStyles();

  return (
    <Collapse in={success}>
      <Alert variant='outlined' severity='success' className={classes.successAlert}>
        {text}
      </Alert>
    </Collapse>
  );
};

export default SuccessAlert;
