import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Box, IconButton, Typography } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import Autocomplete from '../Input/Autocomplete';
import EditorTextField from '../Input/EditorTextField';
import VatRatePicker from './VatRatePicker';
import { calculateGrossPrice, calculateNetPrice } from '../../../../../../../utils/priceUtils';

const useFields = ({ update, select, remove }) => {
  const { t } = useTranslation();

  const products = useSelector(state => state.invoice.productData);

  const onPriceChange = (fieldName, item) => e => {
    const value = e.target.valueAsNumber;
    const calculatedValue =
      fieldName === 'netPrice'
        ? calculateGrossPrice(value, item.vatRate)
        : calculateNetPrice(value, item.vatRate);

    const calculatedFieldName = fieldName === 'netPrice' ? 'grossPrice' : 'netPrice';
    select(item, { [fieldName]: value, [calculatedFieldName]: calculatedValue });
  };

  const onVatRateChange = item => e => {
    const value = e.target.value;

    select(item, {
      vatRate: value,
      grossPrice: calculateGrossPrice(item.netPrice, value)
    });
  };

  return item => {
    return {
      Name: (
        <Autocomplete
          disabled={Boolean(item.id)}
          options={products}
          getOptionLabel={item => item.name}
          onChange={(_, value, reason) => reason === 'select-option' && select(item, value)}
          inputValue={item.name}
          renderOption={({ name, netPrice }) => (
            <Typography variant='body1'>{`${name} (${netPrice.toFixed(2)} zł)`}</Typography>
          )}
          textProps={{
            label: t('products.name'),
            validators: ['required'],
            onChange: update(item, 'name'),
            value: item.name
          }}
        />
      ),
      Description: (
        <EditorTextField
          disabled={Boolean(item.id)}
          label={t('products.description')}
          onChange={update(item, 'description')}
          value={item.description}
        />
      ),
      Count: (
        <EditorTextField
          label={t('products.count')}
          validators={['required', 'positiveInt']}
          type='number'
          onChange={update(item, 'count')}
          value={item.count || ''}
        />
      ),
      Unit: (
        <EditorTextField
          label={t('products.unit')}
          validators={['required']}
          onChange={update(item, 'unit')}
          value={item.unit}
        />
      ),
      NetPrice: (
        <EditorTextField
          disabled={Boolean(item.id)}
          label={t('products.netPrice')}
          validators={['currency']}
          type='number'
          onChange={onPriceChange('netPrice', item)}
          value={item.netPrice || ''}
        />
      ),
      GrossPrice: (
        <EditorTextField
          disabled={Boolean(item.id)}
          label={t('products.grossPrice')}
          validators={['currency']}
          type='number'
          onChange={onPriceChange('grossPrice', item)}
          value={item.grossPrice || ''}
        />
      ),
      VatRate: (
        <VatRatePicker
          disabled={Boolean(item.id)}
          label={t('products.vatRate')}
          onChange={onVatRateChange(item)}
          value={item.vatRate}
        />
      ),
      Delete: (
        <Box mt={0.5} ml={1} mr={-2}>
          <IconButton onClick={remove(item.editorId)}>
            <Delete color='primary' />
          </IconButton>
        </Box>
      )
    };
  };
};

export default useFields;
