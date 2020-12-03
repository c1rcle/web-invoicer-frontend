import getHeaderElement from './headerElement';
import getCounterpartiesElement from './counterpartiesElement';
import getItemsElement from './itemsElement';
import getSummaryElement from './summaryElement';
import getFooterElement from './footerElement';

const getDocumentDefinition = (invoice, companyData, t) => {
  const { employee, counterparty, items, type } = invoice;

  return {
    content: [
      ...getHeaderElement(invoice, t),
      getCounterpartiesElement(counterparty, companyData, t),
      getItemsElement(items, type, t),
      ...getSummaryElement(invoice, t)
    ],
    footer: getFooterElement(employee.fullName, t),
    pageMargins: [40, 40, 40, 100],
    defaultStyle: {
      fontSize: 10
    },
    styles: {
      header: {
        alignment: 'left',
        fontSize: 18,
        bold: true
      },
      counterpartiesHeader: {
        fontSize: 14
      },
      summary: {
        fontSize: 12
      }
    }
  };
};

export default getDocumentDefinition;
