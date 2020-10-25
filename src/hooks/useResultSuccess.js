import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const useResultSuccess = action => {
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();

  const performAction = (args, successCallback, handleError) => {
    setSuccess(false);
    dispatch(action(args))
      .then(unwrapResult)
      .then(() => {
        setSuccess(true);
        successCallback && successCallback();
      })
      .catch(e => handleError && handleError(e));
  };

  return { success, performAction };
};

export default useResultSuccess;
