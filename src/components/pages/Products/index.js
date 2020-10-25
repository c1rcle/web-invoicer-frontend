import React from 'react';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';

const Products = () => {
  const { t } = useTranslation();

  return <DataTable title={t('products.title')} />;
};

export default Products;
