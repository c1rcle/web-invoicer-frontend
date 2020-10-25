import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { setDrawerOpen } from '../slices/appSlice';

const useDrawer = () => {
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector(state => state.app.isDrawerOpen);

  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const isLgUp = useMediaQuery(useTheme().breakpoints.up('lg'));

  const openDrawer = () => dispatch(setDrawerOpen(true));

  const closeDrawer = () => dispatch(setDrawerOpen(false));

  const isDrawerPermanent = isLoggedIn && isLgUp;

  return { openDrawer, closeDrawer, isDrawerOpen, isDrawerPermanent };
};

export default useDrawer;
