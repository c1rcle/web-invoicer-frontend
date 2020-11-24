import format from 'date-fns/format';
import { getId, getType } from '../utils/editorUtils';

const getHeaderElement = (invoice, t) => {
  const { type, number, date, paymentDeadline, paymentType } = invoice;

  const paymentTypes = t('invoices.paymentTypes', { returnObjects: true });

  return [
    {
      text: t(`invoices.header.${getId(type)}`),
      style: 'header',
      margin: [0, 0, 0, 10]
    },
    {
      layout: 'noBorders',
      margin: [0, 0, 0, 20],
      table: {
        body: [
          [`${t('invoices.number')}:`, number],
          [`${t('invoices.date')}:`, format(new Date(date), 'dd.MM.yyyy')],
          ...(type !== getType('receipt')
            ? [
                [`${t('invoices.deadline')}:`, format(new Date(paymentDeadline), 'dd.MM.yyyy')],
                [`${t('invoices.paymentType')}:`, paymentTypes[paymentType]]
              ]
            : [])
        ]
      }
    }
  ];
};

export default getHeaderElement;
