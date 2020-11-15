import format from 'date-fns/format';

export const initialEditorData = {
  type: null,
  number: '',
  date: new Date().toISOString(),
  employee: null,
  counterparty: null,
  items: [],
  paymentType: null,
  paymentDeadline: null
};

export const getType = id => {
  return invoiceTypes.findIndex(x => x.id === id);
};

export const getNumber = (type, invoiceDate, invoices) => {
  let count = 1;
  const date = new Date(invoiceDate);
  invoices.forEach(invoice => isEqual(type, invoiceDate, invoice.details) && count++);

  const symbol = invoiceTypes[type].symbol;
  const index = ('' + count).padStart(4, '0');
  const month = format(date, 'MM');
  const year = format(date, 'yyyy');

  return `${symbol} ${index}/${month}/${year}`;
};

const invoiceTypes = [
  { id: 'vat', symbol: 'FV' },
  { id: 'proforma', symbol: 'FP' },
  { id: 'receipt', symbol: 'PA' },
  { id: 'corrective', symbol: 'FC' }
];

const isEqual = (type, date, details) =>
  type === details.type && date === new Date(details.date).getMonth();
