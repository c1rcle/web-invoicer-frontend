import { useDispatch, useSelector } from 'react-redux';
import { setDrawerOpen } from '../slices/appSlice';

const useDrawer = () => {
  const dispatch = useDispatch();

  const isDrawerOpen = useSelector(state => state.app.isDrawerOpen);

  const open = () => dispatch(setDrawerOpen(true));

  const close = () => dispatch(setDrawerOpen(false));

  return { open, close, isDrawerOpen };
};

export default useDrawer;
