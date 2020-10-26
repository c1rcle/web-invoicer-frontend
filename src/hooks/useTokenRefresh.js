import JwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { refreshToken } from '../slices/userSlice';
import useInterval from './useInterval';

const useTokenRefresh = () => {
  const dispatch = useDispatch();

  const tokenExpiryTime = JwtDecode(localStorage.getItem('token')).exp;

  const calculateExpiryDelay = () => tokenExpiryTime * 1000 - new Date().getTime() - 30000;

  let expiryDelay = calculateExpiryDelay();

  useInterval(() => {
    dispatch(refreshToken());
    expiryDelay = calculateExpiryDelay();
  }, expiryDelay);
};

export default useTokenRefresh;
