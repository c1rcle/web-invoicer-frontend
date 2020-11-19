import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  createInvoice,
  setEditorData,
  setError,
  updateInvoice
} from '../../../../slices/invoiceSlice';
import useHandleAction from '../../../../hooks/useHandleAction';
import { initialEditorData } from '../../../../utils/editorUtils';
import { getPropertyTotal } from '../../../../utils/priceUtils';

const useEditor = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleAction = useHandleAction();

  const editorData = useSelector(state => state.invoice.editorData);

  const oldEditorData = useSelector(state => state.invoice.oldEditorData);

  const actionPending = useSelector(state => state.invoice.actionPending);

  const error = useSelector(state => state.invoice.error);

  useEffect(() => {
    return () => dispatch(setEditorData(initialEditorData));
    // eslint-disable-next-line
  }, []);

  const onErrorDialogClose = () => {
    dispatch(setError(null));
    if (editorData.id && (error === 'getProducts' || error === 'getInvoiceItems')) {
      history.replace('/invoices');
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const payload = {
      ...editorData,
      netTotal: getPropertyTotal('netPrice', editorData.items),
      grossTotal: getPropertyTotal('grossPrice', editorData.items)
    };

    const action = editorData.id
      ? updateInvoice({ oldInvoice: oldEditorData, invoice: payload })
      : createInvoice(payload);

    handleAction({ action: action, onSuccess: () => history.replace('/invoices') });
  };

  return { onSubmit, actionPending, error, onErrorDialogClose };
};

export default useEditor;
