import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';
import ErrorDialog from '../../common/ErrorDialog';
import { getProducts, setError } from '../../../slices/productSlice';
import useConfig from './config';

const Products = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const products = useSelector(state => state.product.productData);

  const actionPending = useSelector(state => state.product.actionPending);

  const error = useSelector(state => state.product.error);

  const { columns, editableConfig } = useConfig();

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ErrorDialog error={error} clearAction={setError} />
      <DataTable
        title={t('products.title')}
        isLoading={actionPending}
        sourceData={products}
        columns={columns}
        editableConfig={editableConfig}
      />
    </>
  );
};

export default Products;
