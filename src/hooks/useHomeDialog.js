import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeDialog, openDialog } from '../slices/appSlice';

const useHomeDialog = () => {
  const dispatch = useDispatch();

  const isDialogOpen = useSelector(state => state.app.isDialogOpen);

  const history = useHistory();

  const open = () => {
    dispatch(openDialog());
  };

  const close = () => {
    dispatch(closeDialog());
  };

  const openForType = type => {
    history.replace(`/${type}`);
    dispatch(openDialog());
  };

  const onExited = () => {
    history.replace('/');
  };

  return { openForType, open, close, onExited, isDialogOpen };
};

export default useHomeDialog;
