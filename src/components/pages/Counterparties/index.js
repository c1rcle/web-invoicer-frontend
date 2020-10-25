import React from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';

const Counterparties = () => {
  const { t } = useTranslation();

  return <DataTable title={t('counterparties.title')} />;
};

export default Counterparties;
