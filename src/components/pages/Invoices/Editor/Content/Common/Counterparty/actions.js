import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorData } from '../../../../../../../slices/invoiceSlice';
import { getCounterparties } from '../../../../../../../slices/counterpartySlice';

const useActions = () => {
  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  const counterparty = editorData.counterparty;

  useEffect(() => {
    dispatch(getCounterparties());
    // eslint-disable-next-line
  }, []);

  const update = property => e => {
    dispatch(
      setEditorData({
        ...editorData,
        counterparty: { ...counterparty, [property]: e.target.value }
      })
    );
  };

  const select = counterparty => {
    dispatch(setEditorData({ ...editorData, counterparty: counterparty }));
  };

  return { update, select, counterparty };
};

export default useActions;
