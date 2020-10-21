import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const useResultSuccess = action => {
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const performAction = (args, cleanup, handleError) => {
    setSuccess(false);
    dispatch(action(args))
      .then(unwrapResult)
      .then(() => {
        setSuccess(true);
        cleanup && cleanup();
      })
      .catch(e => handleError && handleError(e));
  };

  return { success, performAction };
};

export default useResultSuccess;
