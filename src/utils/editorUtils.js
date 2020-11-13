import add from 'date-fns/add';

export const initialEditorData = {
  details: null,
  counterparty: null,
  products: [],
  payment: {
    type: 0,
    deadline: add(new Date(), { days: 7 }).toISOString()
  }
};
