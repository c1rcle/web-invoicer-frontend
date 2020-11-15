import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import add from 'date-fns/add';
import { setEditorData } from '../../../../../../../slices/invoiceSlice';
import { getEmployees } from '../../../../../../../slices/employeeSlice';
import { getNumber, getType } from '../../../../../../../utils/editorUtils';

const useActions = type => {
  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  const invoices = useSelector(state => state.invoice.invoiceData);

  useEffect(() => {
    dispatch(getEmployees());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDates();
    // eslint-disable-next-line
  }, [editorData.date]);

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
    const number = getNumber(type, editorData.date, invoices);
    dispatch(
      setEditorData({
        ...editorData,
        type: type,
        number: number,
        paymentDeadline:
          type !== getType('receipt')
            ? add(new Date(editorData.date), { days: 7 }).toISOString()
            : null
      })
    );
  };

  return { update, select, editorData };
};

export default useActions;
