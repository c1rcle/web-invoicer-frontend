import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';

const SuspenseLoading = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress />
    </Backdrop>
  );
};

export default SuspenseLoading;
