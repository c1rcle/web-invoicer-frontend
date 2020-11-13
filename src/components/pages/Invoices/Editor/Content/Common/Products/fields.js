import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Autocomplete from '../Input/Autocomplete';
import EditorTextField from '../Input/EditorTextField';
import VatRatePicker from './VatRatePicker';
import { calculateGrossPrice, calculateNetPrice } from '../../../../../../../utils/priceUtils';

const useFields = ({ update, select, remove }) => {
  const { t } = useTranslation();

  const products = useSelector(state => state.product.productData);

  const onPriceChange = (fieldName, product) => e => {
    const value = e.target.value;
    const calculatedValue =
      fieldName === 'netPrice'
        ? calculateGrossPrice(value, product.vatRate)
        : calculateNetPrice(value, product.vatRate);

    const calculatedFieldName = fieldName === 'netPrice' ? 'grossPrice' : 'netPrice';
    select(product, { [fieldName]: value, [calculatedFieldName]: calculatedValue });
  };

  const onVatRateChange = product => e => {
    const value = e.target.value;

    select(product, {
      vatRate: value,
      grossPrice: calculateGrossPrice(product.netPrice, value)
    });
  };

  return product => {
    return {
      Name: (
        <Autocomplete
          disabled={Boolean(product.id)}
          options={products}
          getOptionLabel={product => product.name}
          onChange={(_, value, reason) => reason === 'select-option' && select(product, value)}
          textProps={{
            label: t('products.name'),
            validators: ['required'],
            onChange: update(product, 'name'),
            value: product.name
          }}
        />
      ),
      Description: (
        <EditorTextField
          disabled={Boolean(product.id)}
          label={t('products.description')}
          onChange={update(product, 'description')}
          value={product.description}
        />
      ),
      Count: (
        <EditorTextField
          label={t('products.count')}
          validators={['required', 'isPositive']}
          type='number'
          onChange={update(product, 'count')}
          value={product.count}
        />
      ),
      Unit: (
        <EditorTextField
          label={t('products.unit')}
          validators={['required']}
          onChange={update(product, 'unit')}
          value={product.unit}
        />
      ),
      NetPrice: (
        <EditorTextField
          disabled={Boolean(product.id)}
          label={t('products.netPrice')}
          validators={['currency']}
          type='number'
          onChange={onPriceChange('netPrice', product)}
          value={product.netPrice}
        />
      ),
      GrossPrice: (
        <EditorTextField
          disabled={Boolean(product.id)}
          label={t('products.grossPrice')}
          validators={['currency']}
          type='number'
          onChange={onPriceChange('grossPrice', product)}
          value={product.grossPrice}
        />
      ),
      VatRate: (
        <VatRatePicker
          disabled={Boolean(product.id)}
          label={t('products.vatRate')}
          onChange={onVatRateChange(product)}
          value={product.vatRate}
        />
      ),
      Delete: (
        <Box mt={0.5} ml={1} mr={-2}>
          <IconButton onClick={remove(product.editorId)}>
            <Delete color='primary' />
          </IconButton>
        </Box>
      )
    };
  };
};

export default useFields;
