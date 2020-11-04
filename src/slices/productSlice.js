import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import webInvoicerApi from '../apis/webInvoicerApi';
import apiHandler from '../apis/apiHandler';

const initialState = {
  actionPending: false,
  error: null,
  productData: []
};

export const createProduct = createAsyncThunk('product/create', async (product, { dispatch }) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().post('Products', product),
      errorData: 'create'
    },
    dispatch
  );
});

export const getProducts = createAsyncThunk('product/get', async (_, { dispatch }) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().get('Products'),
      errorData: 'get'
    },
    dispatch
  );
});

export const updateProduct = createAsyncThunk('product/update', async (product, { dispatch }) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().put('Products', product),
      errorData: 'update'
    },
    dispatch
  );
});

export const deleteProduct = createAsyncThunk('product/delete', async (id, { dispatch }) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().delete(`Products/${id}`),
      errorData: 'delete'
    },
    dispatch
  );
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

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setActionPending(state, action) {
      state.actionPending = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    }
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.productData = action.payload;
    }
  }
});

export const { setActionPending, setError } = productSlice.actions;

export default productSlice.reducer;
