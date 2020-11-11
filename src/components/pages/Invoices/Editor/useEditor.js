import { useDispatch, useSelector } from 'react-redux';
import { createInvoice, setError } from '../../../../slices/invoiceSlice';

const useEditor = () => {
  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  const actionPending = useSelector(state => state.invoice.actionPending);

  const error = useSelector(state => state.invoice.error);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createInvoice(editorData));
  };

  return { onSubmit, actionPending, error, setError };
};

export default useEditor;
