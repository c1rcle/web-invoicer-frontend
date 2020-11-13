import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addProduct, updateProduct, deleteProduct } from '../../../../../../../slices/invoiceSlice';
import { getProducts } from '../../../../../../../slices/productSlice';

const useActions = () => {
  const dispatch = useDispatch();

  const editorProducts = useSelector(state => state.invoice.editorData.products);

  const initialProductData = () => {
    return {
      editorId: nanoid(),
      name: '',
      description: '',
      count: '',
      unit: '',
      netPrice: '',
      grossPrice: '',
      vatRate: 0
    };
  };

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    editorProducts.length === 0 && add();
    // eslint-disable-next-line
  }, [editorProducts]);

  const add = () => {
    dispatch(addProduct(initialProductData()));
  };

  const update = (product, property) => e => {
    dispatch(updateProduct({ ...product, [property]: e.target.value }));
  };

  const remove = editorId => () => {
    dispatch(deleteProduct(editorId));
  };

  const select = (product, selectedProduct) => {
    dispatch(updateProduct({ ...product, ...selectedProduct }));
  };

  return { add, update, remove, select };
};

export default useActions;
