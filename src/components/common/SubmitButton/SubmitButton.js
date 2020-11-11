import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import useStyles from './styles';

const SubmitButton = ({ text, loading }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button variant='contained' color='primary' size='large' type='submit' disabled={loading}>
        {text}
      </Button>
      {loading && <CircularProgress size={24} className={classes.progress} />}
    </div>
  );
};

export default SubmitButton;
