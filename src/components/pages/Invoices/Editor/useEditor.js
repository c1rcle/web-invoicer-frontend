import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialEditorData } from '../../../../utils/editorUtils';
import { createInvoice, setEditorData, setError } from '../../../../slices/invoiceSlice';

const useEditor = () => {
  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  const actionPending = useSelector(state => state.invoice.actionPending);

  const error = useSelector(state => state.invoice.error);

  useEffect(() => {
    return () => dispatch(setEditorData(initialEditorData));
    // eslint-disable-next-line
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    dispatch(createInvoice(editorData));
  };

  return { onSubmit, actionPending, error, setError };
};

export default useEditor;
