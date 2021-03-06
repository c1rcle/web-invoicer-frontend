import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const useHandleAction = () => {
  const dispatch = useDispatch();

  const handleAction = async ({ action, onSuccess, rejectOnError = false }) => {
    await dispatch(action)
      .then(unwrapResult)
      .then(result => onSuccess && onSuccess(result))
      .catch(_ => {
        if (rejectOnError) throw new Error();
      });
  };

  return handleAction;
};

export default useHandleAction;
