export const calculateGrossPrice = (netPrice, vatRate) => {
  return roundValue(netPrice * getVatRate(vatRate));
};

export const calculateNetPrice = (grossPrice, vatRate) => {
  return roundValue(grossPrice / getVatRate(vatRate));
};

const roundValue = value => (isNaN(value) ? undefined : Number(Math.round(value + 'e2') + 'e-2'));

const getVatRate = vatRate => {
  switch (vatRate) {
    case 0:
      return 1.23;
    case 1:
      return 1.08;
    case 2:
      return 1.05;
    default:
      return 1.0;
  }
};
