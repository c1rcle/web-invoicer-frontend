import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

const LoadingBackdrop = ({ actionPending, className }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let id = null;
    if (actionPending !== open) {
      if (actionPending) setOpen(true);
      else {
        id = setTimeout(() => {
          setOpen(actionPending);
        }, 1000);
      }
    }
    return () => id && clearTimeout(id);
    // eslint-disable-next-line
  }, [actionPending]);

  return (
    <Backdrop open={open} transitionDuration={500} className={className}>
      <CircularProgress />
    </Backdrop>
  );
};

export default LoadingBackdrop;
