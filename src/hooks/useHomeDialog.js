import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { closeDialog, openDialog } from '../slices/appSlice';

const useHomeDialog = () => {
  const dispatch = useDispatch();

  const state = useSelector(state => state.app.dialog);

  const actionPending = useSelector(state => state.user.actionPending);

  const history = useHistory();

  const open = type => {
    history.replace(`/${type}`);
    dispatch(openDialog(type));
  };

  const close = () => {
    if (!actionPending) {
      history.replace('/');
      dispatch(closeDialog());
    }
  };

  return { open, close, state };
};

export default useHomeDialog;
