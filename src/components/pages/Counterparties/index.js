import React from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';

const Counterparties = () => {
  const { t } = useTranslation();

  const columns = [
    { title: t('counterparties.name'), field: 'name' },
    { title: t('counterparties.nip'), field: 'nip' },
    { title: t('counterparties.address'), field: 'address' },
    { title: t('counterparties.postalCode'), field: 'postalCode' },
    { title: t('counterparties.city'), field: 'city' },
    { title: t('counterparties.phoneNumber'), field: 'phoneNumber' }
  ];

  return <DataTable title={t('counterparties.title')} columns={columns} />;
};

export default Counterparties;
