import { useDispatch, useSelector } from 'react-redux';
import { setEditorData } from '../../../../../../../slices/invoiceSlice';

const useActions = () => {
  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  const payment = editorData.payment;

  const update = property => event => {
    const value = event.target ? event.target.value : event;
    dispatch(setEditorData({ ...editorData, payment: { ...payment, [property]: value } }));
  };

  return { update, payment };
};

export default useActions;
