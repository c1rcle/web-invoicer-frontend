import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import webInvoicerApi from '../apis/webInvoicerApi';
import apiHandler from '../apis/apiHandler';
import { initialEditorData } from '../utils/editorUtils';
import useInvoicePayloadCreators from '../utils/invoiceUtils';

const initialState = {
  actionPending: false,
  error: null,
  invoiceData: [],
  employeeData: [],
  counterpartyData: [],
  productData: [],
  editorData: initialEditorData,
  oldEditorData: null
};

export const createInvoice = createAsyncThunk('invoice/create', async (invoice, { dispatch }) => {
  return await handlePayloadCreator(createPayload(invoice), dispatch);
});

export const getInvoices = createAsyncThunk('invoice/get', async (_, { dispatch }) => {
  return await handlePayloadCreator(getPayload, dispatch);
});

export const updateInvoice = createAsyncThunk(
  'invoice/update',
  async ({ oldInvoice, invoice }, { dispatch }) => {
    return await handlePayloadCreator(updatePayload(oldInvoice, invoice), dispatch);
  }
);

export const deleteInvoice = createAsyncThunk('invoice/delete', async (id, { dispatch }) => {
  await handleLoadingAction(
    {
      method: () => webInvoicerApi().delete(`Invoices/${id}`),
      errorData: 'delete'
    },
    dispatch
  );

  return id;
});

export const getProducts = createAsyncThunk('invoice/getProducts', async (_, { dispatch }) => {
  return await handleLoadingAction(
    {
      method: () => webInvoicerApi().get('Products'),
      errorData: 'getProducts'
    },
    dispatch
  );
});

export const getInvoiceItems = createAsyncThunk(
  'invoice/getItems',
  async (id, { dispatch, getState }) => {
    const items = await handleLoadingAction(
      {
        method: () => webInvoicerApi().get(`InvoiceItems/${id}`),
        errorData: 'getInvoiceItems'
      },
      dispatch
    );

    return items.map(item => {
      const products = getState().invoice.productData;
      const product = products.find(x => x.id === item.id);
      return { editorId: nanoid(), ...item, ...product };
    });
  }
);

const handlePayloadCreator = async (payloadCreator, dispatch) => {
  try {
    dispatch(setActionPending(true));
    const result = await payloadCreator();
    dispatch(setActionPending(false));

    return result;
  } catch (error) {
    dispatch(setError(error.message));
    throw error;
  }
};

const handleLoadingAction = async ({ method, errorData }, dispatch) => {
  dispatch(setActionPending(true));
  const response = await apiHandler(method(), errorData);
  dispatch(setActionPending(false));

  if (response.type === 'ERROR') {
    dispatch(setError(response.data));
    throw new Error(response.data);
  }
  return response.data;
};

const handleAction = async ({ method, errorData }) => {
  const response = await apiHandler(method(), errorData);

  if (response.type === 'ERROR') {
    throw new Error(response.data);
  }
  return response.data;
};

const { createPayload, getPayload, updatePayload } = useInvoicePayloadCreators(handleAction);

const invoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
    setActionPending(state, action) {
      state.actionPending = action.payload;
    },
    setError(state, action) {
      state.actionPending = false;
      state.error = action.payload;
    },
    setEditorData(state, action) {
      state.editorData = action.payload;
    },
    setOldEditorData(state, action) {
      state.oldEditorData = action.payload;
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
      const { invoices, employees, counterparties } = action.payload;
      state.invoiceData = invoices;
      state.employeeData = employees;
      state.counterpartyData = counterparties;
    },
    [deleteInvoice.fulfilled]: (state, action) => {
      state.invoiceData = state.invoiceData.filter(x => x.id !== action.payload);
    },
    [getProducts.fulfilled]: (state, action) => {
      state.productData = action.payload;
    },
    [getInvoiceItems.fulfilled]: (state, action) => {
      state.editorData.items = action.payload;
      state.oldEditorData = { ...state.editorData };
    }
  }
});

export const {
  setActionPending,
  setError,
  setEditorData,
  setOldEditorData,
  addItem,
  updateItem,
  deleteItem
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
