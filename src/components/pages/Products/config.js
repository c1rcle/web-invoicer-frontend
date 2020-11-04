import { useTranslation } from 'react-i18next';
import { createProduct, deleteProduct, updateProduct } from '../../../slices/productSlice';
import useValidation from '../../../hooks/useValidation';

const useConfig = () => {
  const { t } = useTranslation();

  const { required, validate } = useValidation();

  const currencySettings = {
    align: 'left',
    currencySetting: {
      locale: 'pl',
      currencyCode: 'PLN'
    }
  };

  const columns = [
    {
      title: t('products.name'),
      field: 'name',
      width: 165,
      validate: row => required(row.name)
    },
    { title: t('products.description'), field: 'description', width: 165 },
    {
      title: t('products.netPrice'),
      field: 'netPrice',
      width: 165,
      type: 'currency',
      ...currencySettings,
      validate: row => validate('currency', row.netPrice, true)
    },
    {
      title: t('products.grossPrice'),
      field: 'grossPrice',
      width: 165,
      type: 'currency',
      ...currencySettings,
      validate: row => validate('currency', row.grossPrice, true)
    },
    {
      title: t('products.vatRate'),
      field: 'vatRate',
      width: 165,
      initialEditValue: 0,
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

  const editableConfig = {
    createAction: createProduct,
    updateAction: updateProduct,
    deleteAction: deleteProduct,
    idKey: 'productId'
  };

  return { columns, editableConfig };
};

export default useConfig;
