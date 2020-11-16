import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createInvoice,
  setEditorData,
  setError,
  updateInvoice
} from '../../../../slices/invoiceSlice';
import { initialEditorData } from '../../../../utils/editorUtils';
import { getPropertyTotal } from '../../../../utils/priceUtils';

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

    const payload = {
      ...editorData,
      netTotal: getPropertyTotal('netPrice', editorData.items),
      grossTotal: getPropertyTotal('grossPrice', editorData.items)
    };

    console.log(payload);
    editorData.id ? dispatch(updateInvoice(payload)) : dispatch(createInvoice(payload));
  };

  return { onSubmit, actionPending, error, setError };
};

export default useEditor;
