import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import add from 'date-fns/add';
import useDidUpdateEffect from '../../../../../../../hooks/useDidUpdateEffect';
import { setEditorData } from '../../../../../../../slices/invoiceSlice';
import { getNumber, getType } from '../../../../../../../utils/editorUtils';

const useActions = type => {
  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  const invoices = useSelector(state => state.invoice.invoiceData);

  useEffect(() => {
    editorData.id || initialize();
    // eslint-disable-next-line
  }, []);

  useDidUpdateEffect(() => {
    setDates();
  }, [editorData.date]);

  const initialize = () => {
    const paymentType = type === getType('receipt') ? null : 0;
    dispatch(setEditorData({ ...editorData, type: type, paymentType, ...getNewDateProps() }));
  };

  const update = (property, isEmployee) => event => {
    const value = event.target ? event.target.value : event;
    isEmployee
      ? dispatch(
          setEditorData({ ...editorData, employee: { ...editorData.employee, [property]: value } })
        )
      : dispatch(setEditorData({ ...editorData, [property]: value }));
  };

  const select = employee => {
    dispatch(setEditorData({ ...editorData, employee: employee }));
  };

  const setDates = () => {
    dispatch(setEditorData({ ...editorData, ...getNewDateProps() }));
  };

  const getNewDateProps = () => {
    const number = getNumber(type, editorData.date, invoices);

    return {
      number,
      paymentDeadline:
        type !== getType('receipt')
          ? add(new Date(editorData.date), { days: 7 }).toISOString()
          : null
    };
  };

  return { update, select, editorData };
};

export default useActions;
