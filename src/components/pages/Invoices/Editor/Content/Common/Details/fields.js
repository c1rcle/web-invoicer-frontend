import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Autocomplete from '../Input/Autocomplete';
import DatePicker from '../Input/DatePicker';
import EditorTextField from '../Input/EditorTextField';

const useFields = ({ update, select, details }) => {
  const { t } = useTranslation();

  const employees = useSelector(state => state.employee.employeeData);

  const employee = details.employee;

  const getAutocomplete = (property, label) => (
    <Autocomplete
      disabled={Boolean(employee.id)}
      options={employees}
      getOptionLabel={employee => employee[property]}
      onChange={(_, value, reason) => reason === 'select-option' && select(value)}
      value={employee}
      textProps={{
        label: label,
        validators: [property === 'fullName' ? 'required' : 'phoneNumber'],
        onChange: update(property, true),
        value: employee[property]
      }}
    />
  );

  return {
    Number: (
      <EditorTextField
        label={t('invoices.number')}
        validators={['required']}
        onChange={update('number')}
        value={details.number}
      />
    ),
    Date: <DatePicker label={t('invoices.date')} onChange={update('date')} value={details.date} />,
    FullName: getAutocomplete('fullName', t('employees.fullName')),
    PhoneNumber: getAutocomplete('phoneNumber', t('employees.phoneNumber'))
  };
};

export default useFields;
