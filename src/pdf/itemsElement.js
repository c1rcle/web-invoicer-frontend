const getItemsElement = (items, type, t) => {
  const vatRateStrings = [
    '23%',
    '8%',
    '5%',
    '0%',
    t('products.vatExempt'),
    t('products.vatNotApplicable')
  ];

  const pdfItems = getItems(items, vatRateStrings);

  return {
    layout: {
      fillColor: rowIndex => {
        return rowIndex === 0 ? '#EEEEEE' : null;
      }
    },
    margin: [0, 40, 0, 0],
    table: {
      headerRows: 1,
      widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
      body: [
        [
          t('products.ordinal'),
          t('products.name'),
          t('products.unit'),
          t('products.count'),
          t('products.netPrice'),
          'VAT',
          t('invoices.netValue'),
          t('invoices.vatValue'),
          t('invoices.grossValue')
        ],
        ...pdfItems
      ]
    }
  };
};

const getItems = (items, vatRateStrings) => {
  return items.map((item, index) => {
    const { name, unit, count, netPrice, grossPrice, vatRate } = item;
    const netValue = netPrice * count;
    const grossValue = grossPrice * count;
    const vatValue = grossValue - netValue;

    return [
      index + 1,
      name,
      unit,
      count,
      netPrice.toFixed(2),
      vatRateStrings[vatRate],
      netValue.toFixed(2),
      vatValue.toFixed(2),
      grossValue.toFixed(2)
    ];
  });
};

export default getItemsElement;
