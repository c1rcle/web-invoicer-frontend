import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

const useHandleAction = () => {
  const dispatch = useDispatch();

  const handleAction = async (action, onSuccess) => {
    await dispatch(action)
      .then(unwrapResult)
      .then(result => onSuccess(result))
      .catch(_ => {});
  };

  return handleAction;
};

export default useHandleAction;
