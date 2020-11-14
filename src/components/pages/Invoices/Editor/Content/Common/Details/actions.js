import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import add from 'date-fns/add';
import { setEditorData } from '../../../../../../../slices/invoiceSlice';
import { getEmployees } from '../../../../../../../slices/employeeSlice';
import { getInvoiceNumber } from '../../../../../../../utils/editorUtils';

const useActions = () => {
  const dispatch = useDispatch();

  const editorData = useSelector(state => state.invoice.editorData);

  const invoices = useSelector(state => state.invoice.invoiceData);

  const details = editorData.details;

  useEffect(() => {
    dispatch(getEmployees());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDates(details, invoices);
    // eslint-disable-next-line
  }, [details.date]);

  const update = (property, isEmployee) => event => {
    const value = event.target ? event.target.value : event;
    dispatch(
      setEditorData({
        ...editorData,
        details: {
          ...details,
          ...(isEmployee
            ? { employee: { ...details.employee, [property]: value } }
            : { [property]: value })
        }
      })
    );
  };

  const select = employee => {
    dispatch(setEditorData({ ...editorData, details: { ...details, employee: employee } }));
  };

  const setDates = (details, invoices) => {
    const number = getInvoiceNumber(details, invoices);
    const payment = editorData.payment;

    dispatch(
      setEditorData({
        ...editorData,
        details: { ...details, number: number },
        payment: { ...payment, deadline: add(new Date(details.date), { days: 7 }).toISOString() }
      })
    );
  };

  return { update, select, details };
};

export default useActions;
