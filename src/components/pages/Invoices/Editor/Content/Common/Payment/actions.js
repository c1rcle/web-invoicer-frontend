import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorData } from '../../../../../../../slices/invoiceSlice';

const useActions = () => {
  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  useEffect(() => {
    const { type, paymentType } = editorData;

    type !== null &&
      paymentType === null &&
      dispatch(setEditorData({ ...editorData, paymentType: 0 }));
    // eslint-disable-next-line
  }, [editorData.type]);

  const update = property => event => {
    const value = event.target ? event.target.value : event;
    dispatch(setEditorData({ ...editorData, [property]: value }));
  };

  return { update, editorData };
};

export default useActions;
