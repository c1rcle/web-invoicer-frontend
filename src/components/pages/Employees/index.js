import React from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';

const Employees = () => {
  const { t } = useTranslation();

  const columns = [
    { title: t('employees.fullName'), field: 'fullName' },
    { title: t('employees.phoneNumber'), field: 'phoneNumber' },
    { title: t('employees.dateAdded'), field: 'dateAdded', editable: false }
  ];

  return <DataTable title={t('employees.title')} columns={columns} />;
};

export default Employees;
