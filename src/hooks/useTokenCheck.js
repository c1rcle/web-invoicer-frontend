import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JwtDecode from 'jwt-decode';
import { setUserData } from '../slices/userSlice';
import useLogout from './useLogout';

const useTokenCheck = () => {
  const dispatch = useDispatch();

  const logout = useLogout();

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn || !localStorage.getItem('token')) return;

    const decodedToken = JwtDecode(localStorage.getItem('token'));
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!decodedToken || !userData || decodedToken.exp < new Date().getTime() / 1000) {
      logout();
    } else dispatch(setUserData(userData));
    // eslint-disable-next-line
  }, []);
};

export default useTokenCheck;
