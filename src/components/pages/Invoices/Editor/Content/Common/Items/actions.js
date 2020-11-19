import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  addItem,
  updateItem,
  deleteItem,
  getInvoiceItems
} from '../../../../../../../slices/invoiceSlice';
import { getProducts } from '../../../../../../../slices/invoiceSlice';
import useHandleAction from '../../../../../../../hooks/useHandleAction';

const useActions = () => {
  const dispatch = useDispatch();

  const handleAction = useHandleAction();

  const editorData = useSelector(state => state.invoice.editorData);

  const editorItems = editorData.items;

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
    handleAction({
      action: getProducts(),
      onSuccess: () => editorData.id && dispatch(getInvoiceItems(editorData.id))
    });
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
    const value = property === 'count' ? e.target.valueAsNumber : e.target.value;
    dispatch(updateItem({ ...item, [property]: value }));
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
