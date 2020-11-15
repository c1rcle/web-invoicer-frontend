import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import webInvoicerApi from '../apis/webInvoicerApi';
import apiHandler from '../apis/apiHandler';
import { initialEditorData } from '../utils/editorUtils';

const initialState = {
  actionPending: false,
  error: null,
  invoiceData: [],
  editorData: initialEditorData
};

export const createInvoice = createAsyncThunk('invoice/create', async (invoice, dispatch) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().post('Invoices', invoice),
      errorData: 'create'
    },
    dispatch
  );
});

export const getInvoices = createAsyncThunk('invoice/get', async (_, dispatch) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().get('Invoices'),
      errorData: 'get'
    },
    dispatch
  );
});

export const updateInvoice = createAsyncThunk('invoice/update', async (invoice, { dispatch }) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().put('Invoices', invoice),
      errorData: 'update'
    },
    dispatch
  );
});

export const deleteInvoice = createAsyncThunk('invoice/delete', async (id, dispatch) => {
  await handleAction(
    {
      method: () => webInvoicerApi().delete(`Invoices/${id}`),
      errorData: 'delete'
    },
    dispatch
  );

  return id;
});

const handleAction = async ({ method, errorData }, dispatch) => {
  dispatch(setActionPending(true));
  const response = await apiHandler(method(), errorData);
  dispatch(setActionPending(false));

  if (response.type === 'ERROR') {
    dispatch(setError(response.data));
    throw new Error(response.data);
  }
  return response.data;
};

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setActionPending(state, action) {
      state.actionPending = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setEditorData(state, action) {
      state.editorData = action.payload;
    },
    addItem(state, action) {
      state.editorData.items.push(action.payload);
    },
    updateItem(state, action) {
      const index = state.editorData.items.findIndex(x => x.editorId === action.payload.editorId);
      state.editorData.items[index] = action.payload;
    },
    deleteItem(state, action) {
      const index = state.editorData.items.findIndex(x => x.editorId === action.payload);
      state.editorData.items.splice(index, 1);
    }
  },
  extraReducers: {
    [getInvoices.fulfilled]: (state, action) => {
      state.invoiceData = action.payload;
    }
  }
});

export const {
  setActionPending,
  setError,
  setEditorData,
  addItem,
  updateItem,
  deleteItem
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
