import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addItem, updateItem, deleteItem } from '../../../../../../../slices/invoiceSlice';
import { getProducts } from '../../../../../../../slices/productSlice';

const useActions = () => {
  const dispatch = useDispatch();

  const editorItems = useSelector(state => state.invoice.editorData.items);

  const initialItemData = () => {
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
    editorItems.length === 0 && add();
    // eslint-disable-next-line
  }, [editorItems]);

  const add = () => {
    dispatch(addItem(initialItemData()));
  };

  const update = (item, property) => e => {
    dispatch(updateItem({ ...item, [property]: e.target.value }));
  };

  const remove = editorId => () => {
    dispatch(deleteItem(editorId));
  };

  const select = (item, selectedItem) => {
    dispatch(updateItem({ ...item, ...selectedItem }));
  };

  return { add, update, remove, select };
};

export default useActions;
