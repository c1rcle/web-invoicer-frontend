import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setDialogOpen } from '../slices/appSlice';

const useHomeDialog = () => {
  const dispatch = useDispatch();

  const isDialogOpen = useSelector(state => state.app.isDialogOpen);

  const history = useHistory();

  const openDialog = () => dispatch(setDialogOpen(true));

  const closeDialog = () => dispatch(setDialogOpen(false));

  const openDialogForType = type => {
    history.replace(`/${type}`);
    dispatch(setDialogOpen(true));
  };

  const onExited = () => history.replace('/');

  return { openDialogForType, openDialog, closeDialog, onExited, isDialogOpen };
};

export default useHomeDialog;
