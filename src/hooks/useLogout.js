import { useDispatch } from 'react-redux';
import { logout } from '../slices/userSlice';

const useLogout = () => {
  const dispatch = useDispatch();

  return () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    dispatch(logout());
  };
};

export default useLogout;
