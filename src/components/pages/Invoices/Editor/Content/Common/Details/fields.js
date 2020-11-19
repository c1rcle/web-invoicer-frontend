import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Autocomplete from '../Input/Autocomplete';
import DatePicker from '../Input/DatePicker';
import EditorTextField from '../Input/EditorTextField';
import ClearButton from '../Input/ClearButton';

const useFields = ({ update, select, editorData }) => {
  const { t } = useTranslation();

  const employees = useSelector(state => state.invoice.employeeData);

  const employee = editorData.employee;

  const getAutocomplete = (property, label) => (
    <Autocomplete
      disabled={Boolean(employee?.id)}
      options={employees}
      getOptionLabel={employee => employee[property]}
      onChange={(_, value, reason) => reason === 'select-option' && select(value)}
      inputValue={employee?.[property] || ''}
      textProps={{
        label: label,
        validators: [property === 'fullName' ? 'required' : 'phoneNumber'],
        onChange: update(property, true),
        value: employee?.[property]
      }}
    />
  );

  return {
    Number: (
      <EditorTextField
        label={t('invoices.number')}
        validators={['required']}
        onChange={update('number')}
        value={editorData.number}
      />
    ),
    Date: (
      <DatePicker
        disabled={Boolean(editorData.id)}
        permitPast={Boolean(editorData.id)}
        label={t('invoices.date')}
        onChange={update('date')}
        value={editorData.date}
      />
    ),
    FullName: getAutocomplete('fullName', t('employees.fullName')),
    PhoneNumber: getAutocomplete('phoneNumber', t('employees.phoneNumber')),
    Clear: <ClearButton onClick={() => select(null)} />
  };
};

export default useFields;
