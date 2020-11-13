import React from 'react';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '@material-ui/core';
import Picker from '../Input/Picker';

const VatRatePicker = props => {
  const { t } = useTranslation();

  const vatRates = [
    '23%',
    '8%',
    '5%',
    '0%',
    t('products.vatExempt'),
    t('products.vatNotApplicable')
  ];

  return (
    <Picker {...props}>
      {vatRates.map((rate, index) => (
        <MenuItem key={index} value={index}>
          {rate}
        </MenuItem>
      ))}
    </Picker>
  );
};

export default VatRatePicker;
