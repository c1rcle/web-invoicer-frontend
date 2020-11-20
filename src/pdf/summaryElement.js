const getSummaryElement = (invoice, t) => {
  const vatRateStrings = [
    '23%',
    '8%',
    '5%',
    '0%',
    t('products.vatExempt'),
    t('products.vatNotApplicable')
  ];

  const netTotal = invoice.netTotal.toFixed(2);
  const grossTotal = invoice.grossTotal.toFixed(2);
  const vatTotal = (invoice.grossTotal - invoice.netTotal).toFixed(2);

  const summaryItems = getSummaryItems(invoice.items, vatRateStrings);

  return [
    {
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          layout: {
            fillColor: rowIndex => {
              return rowIndex === 0 || rowIndex === 3 ? '#EEEEEE' : null;
            }
          },
          margin: [0, 40, 0, 0],
          table: {
            headerRows: 1,
            widths: ['auto', 'auto', 'auto', 'auto'],
            body: [
              ['VAT', t('invoices.netValue'), t('invoices.vatValue'), t('invoices.grossValue')],
              ...summaryItems,
              [
                { text: t('invoices.total'), bold: true },
                { text: netTotal, bold: true },
                { text: vatTotal, bold: true },
                { text: grossTotal, bold: true }
              ]
            ]
          }
        }
      ]
    },
    {
      style: 'summary',
      layout: 'noBorders',
      margin: [0, 40, 0, 0],
      table: {
        headerRows: 1,
        keepWithHeaderRows: true,
        body: [
          [t('invoices.total'), `${invoice.grossTotal.toFixed(2)} zł`],
          [
            { text: t('invoices.amountDue'), bold: true },
            { text: `${invoice.grossTotal.toFixed(2)} zł`, bold: true }
          ]
        ]
      }
    }
  ];
};

const getSummaryItems = (items, vatRateStrings) => {
  const vatRates = items.reduce((prev, { vatRate }) => {
    return !prev.includes(vatRate) ? [...prev, vatRate] : prev;
  }, []);

  vatRates.sort((a, b) => a - b);

  return vatRates.map(vatRate => {
    const netValue = getPropertyTotal('netPrice', vatRate, items);
    const grossValue = getPropertyTotal('grossPrice', vatRate, items);
    const vatValue = grossValue - netValue;

    return [
      vatRateStrings[vatRate],
      netValue.toFixed(2),
      vatValue.toFixed(2),
      grossValue.toFixed(2)
    ];
  });
};

const getPropertyTotal = (property, vatRate, items) =>
  items.reduce((prev, curr) => {
    return curr.vatRate === vatRate ? prev + Number(curr[property]) * Number(curr.count) : prev;
  }, 0);

export default getSummaryElement;
