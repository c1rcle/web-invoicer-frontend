import React from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';

const Products = () => {
  const { t } = useTranslation();

  const columns = [
    { title: t('products.name'), field: 'name' },
    { title: t('products.description'), field: 'description' },
    { title: t('products.netPrice'), field: 'netPrice' },
    { title: t('products.grossPrice'), field: 'grossPrice' },
    {
      title: t('products.vatRate'),
      field: 'vatRate',
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

  return <DataTable title={t('products.title')} columns={columns} />;
};

export default Products;
