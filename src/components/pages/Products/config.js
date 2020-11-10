import React from 'react';
import { useTranslation } from 'react-i18next';
import { MTableEditField } from 'material-table';
import { createProduct, deleteProduct, updateProduct } from '../../../slices/productSlice';
import useValidation from '../../../hooks/useValidation';
import { calculateGrossPrice, calculateNetPrice } from '../../../utils/priceUtils';

const useConfig = () => {
  const { t } = useTranslation();

  const { required, validate } = useValidation();

  const currencySettings = fieldName => {
    return {
      align: 'left',
      currencySetting: {
        locale: 'pl',
        currencyCode: 'PLN'
      },
      editComponent: currencyEditComponent(fieldName)
    };
  };

  const currencyEditComponent = fieldName => props => (
    <MTableEditField {...props} onChange={onPriceChange(fieldName, props)} />
  );

  const vatRateEditComponent = props => (
    <MTableEditField {...props} onChange={onVatRateChange(props)} />
  );

  const onPriceChange = (fieldName, { rowData, onRowDataChange }) => value => {
    const calculatedValue =
      fieldName === 'netPrice'
        ? calculateGrossPrice(value, rowData.vatRate)
        : calculateNetPrice(value, rowData.vatRate);

    const calculatedFieldName = fieldName === 'netPrice' ? 'grossPrice' : 'netPrice';
    onRowDataChange({
      ...rowData,
      [fieldName]: value,
      [calculatedFieldName]: calculatedValue
    });
  };

  const onVatRateChange = ({ rowData, onRowDataChange }) => value => {
    const parsedValue = Number(value);

    onRowDataChange({
      ...rowData,
      vatRate: parsedValue,
      grossPrice: calculateGrossPrice(rowData.netPrice, parsedValue)
    });
  };

  const columns = [
    {
      title: t('products.name'),
      field: 'name',
      width: 190,
      validate: row => required(row.name)
    },
    { title: t('products.description'), field: 'description', width: 165 },
    {
      title: t('products.netPrice'),
      field: 'netPrice',
      width: 190,
      type: 'currency',
      ...currencySettings('netPrice'),
      validate: row => validate('currency', row.netPrice, true)
    },
    {
      title: t('products.grossPrice'),
      field: 'grossPrice',
      width: 190,
      type: 'currency',
      ...currencySettings('grossPrice'),
      validate: row => validate('currency', row.grossPrice, true)
    },
    {
      title: t('products.vatRate'),
      field: 'vatRate',
      width: 190,
      initialEditValue: 0,
      editComponent: vatRateEditComponent,
      lookup: {
        0: '23%',
        1: '8%',
        2: '5%',
        3: '0%',
        4: t('products.vatExempt'),
        5: t('products.vatNotApplicable')
      }
    }
  ];

  const editableConfig = {
    createAction: createProduct,
    updateAction: updateProduct,
    deleteAction: deleteProduct
  };

  return { columns, editableConfig };
};

export default useConfig;
