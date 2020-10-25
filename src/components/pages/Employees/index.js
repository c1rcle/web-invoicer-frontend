import React from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';

const Employees = () => {
  const { t } = useTranslation();

  return <DataTable title={t('employees.title')} />;
};

export default Employees;
