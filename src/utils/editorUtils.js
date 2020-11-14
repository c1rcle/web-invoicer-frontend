import add from 'date-fns/add';
import format from 'date-fns/format';

export const initialEditorData = {
  details: {
    type: 0,
    number: '',
    date: new Date().toISOString(),
    employee: {
      fullName: '',
      phoneNumber: ''
    }
  },
  counterparty: {
    name: '',
    nip: '',
    address: '',
    postalCode: '',
    city: ''
  },
  products: [],
  payment: {
    type: 0,
    deadline: add(new Date(), { days: 7 }).toISOString()
  }
};

export const getInvoiceNumber = (details, invoices) => {
  const getSymbol = () => {
    switch (details.type) {
      case 0:
        return 'FV';
      case 1:
        return 'FP';
      case 2:
        return 'PA';
      case 3:
        return 'FC';
      default:
        throw new Error('Validation type not supported!');
    }
  };

  let count = 1;
  const date = new Date(details.date);
  invoices.forEach(invoice => isEqual(details.type, date, invoice.details) && count++);

  const index = ('' + count).padStart(4, '0');
  const month = format(date, 'MM');
  const year = format(date, 'yyyy');

  return `${getSymbol()} ${index}/${month}/${year}`;
};

const isEqual = (type, date, details) =>
  type === details.type && date === new Date(details.date).getMonth();
