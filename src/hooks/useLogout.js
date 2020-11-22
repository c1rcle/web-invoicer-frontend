import { useDispatch } from 'react-redux';

const useLogout = () => {
  const dispatch = useDispatch();

  return () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    dispatch({ type: 'user/logout' });
  };
};

export default useLogout;
