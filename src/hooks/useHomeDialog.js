import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setDialogOpen } from '../slices/appSlice';

const useHomeDialog = () => {
  const dispatch = useDispatch();

  const isDialogOpen = useSelector(state => state.app.isDialogOpen);

  const history = useHistory();

  const open = () => dispatch(setDialogOpen(true));

  const close = () => dispatch(setDialogOpen(false));

  const openForType = type => {
    history.replace(`/${type}`);
    dispatch(setDialogOpen(true));
  };

  const onExited = () => history.replace('/');

  return { openForType, open, close, onExited, isDialogOpen };
};

export default useHomeDialog;
