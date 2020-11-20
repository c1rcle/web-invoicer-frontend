const getCounterpartiesElement = (counterparty, companyData, t) => {
  const layout = {
    hLineWidth: index => {
      return index === 1 ? 1 : 0;
    },
    vLineWidth: () => {
      return 0;
    }
  };

  return {
    columns: [
      {
        layout: layout,
        margin: [0, 0, 20, 0],
        table: {
          headerRows: 1,
          widths: ['*'],
          body: [
            [{ text: t('invoices.seller'), fontSize: 14 }],
            [{ text: companyData.companyName, margin: [0, 5, 0, 0] }],
            [companyData.address],
            [`${companyData.postalCode} ${companyData.city}`],
            [`${t('counterparties.nip')}: ${companyData.nip}`]
          ]
        }
      },
      {
        layout: layout,
        margin: [20, 0, 0, 0],
        table: {
          headerRows: 1,
          widths: ['*'],
          body: [
            [{ text: t('invoices.buyer'), fontSize: 14 }],
            [{ text: counterparty.name, margin: [0, 5, 0, 0] }],
            [counterparty.address],
            [`${counterparty.postalCode} ${counterparty.city}`],
            [`${t('counterparties.nip')}: ${counterparty.nip}`]
          ]
        }
      }
    ]
  };
};

export default getCounterpartiesElement;
