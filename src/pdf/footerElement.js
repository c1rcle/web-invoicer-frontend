const getFooterElement = (fullName, t) => (currentPage, pageCount) => {
  return (
    currentPage === pageCount && [
      {
        margin: [80, 40],
        columns: [
          {
            margin: [0, 0, 20, 0],
            table: {
              widths: ['*'],
              body: [
                [
                  {
                    text: fullName,
                    alignment: 'center',
                    border: [false, false, false, false]
                  }
                ],
                [
                  {
                    text: t('invoices.issuerSignature'),
                    alignment: 'center',
                    border: [false, true, false, false]
                  }
                ]
              ]
            }
          },
          {
            margin: [20, 0, 0, 0],
            table: {
              widths: ['*'],
              body: [
                [{ text: ' ', alignment: 'center', border: [false, false, false, false] }],
                [
                  {
                    text: t('invoices.recipientSignature'),
                    alignment: 'center',
                    border: [false, true, false, false]
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  );
};

export default getFooterElement;
