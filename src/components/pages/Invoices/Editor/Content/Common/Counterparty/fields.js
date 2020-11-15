import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Autocomplete from '../Input/Autocomplete';
import ClearButton from '../Input/ClearButton';
import EditorTextField from '../Input/EditorTextField';

const useFields = ({ update, select, clear, counterparty }) => {
  const { t } = useTranslation();

  const counterparties = useSelector(state => state.counterparty.counterpartyData);

  const getAutocomplete = (property, label) => (
    <Autocomplete
      disabled={Boolean(counterparty?.id)}
      options={counterparties}
      getOptionLabel={counterparty => counterparty && counterparty[property]}
      onChange={(_, value, reason) => reason === 'select-option' && select(value)}
      value={counterparty || ''}
      textProps={{
        label: label,
        validators: [property === 'nip' ? 'validNip' : 'required'],
        onChange: update(property),
        value: counterparty?.[property]
      }}
    />
  );

  return {
    Name: getAutocomplete('name', t('counterparties.name')),
    Nip: getAutocomplete('nip', t('counterparties.nip')),
    Address: (
      <EditorTextField
        disabled={Boolean(counterparty?.id)}
        label={t('counterparties.address')}
        validators={['required']}
        onChange={update('address')}
        value={counterparty?.address || ''}
      />
    ),
    PostalCode: (
      <EditorTextField
        disabled={Boolean(counterparty?.id)}
        label={t('counterparties.postalCode')}
        validators={['postalCode']}
        onChange={update('postalCode')}
        value={counterparty?.postalCode || ''}
      />
    ),
    City: (
      <EditorTextField
        disabled={Boolean(counterparty?.id)}
        label={t('counterparties.city')}
        validators={['required']}
        onChange={update('city')}
        value={counterparty?.city || ''}
      />
    ),
    Clear: <ClearButton onClick={clear} />
  };
};

export default useFields;
