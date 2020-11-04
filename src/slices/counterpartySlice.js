import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import webInvoicerApi from '../apis/webInvoicerApi';
import apiHandler from '../apis/apiHandler';

const initialState = {
  actionPending: false,
  error: null,
  counterpartyData: []
};

export const createCounterparty = createAsyncThunk(
  'counterparty/create',
  async (counterparty, { dispatch }) => {
    return await handleAction(
      {
        method: () => webInvoicerApi().post('Counterparties', counterparty),
        errorData: 'create'
      },
      dispatch
    );
  }
);

export const getCounterpartyDetails = createAsyncThunk(
  'counterparty/getDetails',
  async (nip, { dispatch }) => {
    return await handleAction(
      {
        method: () => webInvoicerApi().get(`Counterparties/details/${nip}`),
        errorData: 'details'
      },
      dispatch
    );
  }
);

export const getCounterparties = createAsyncThunk('counterparty/get', async (_, { dispatch }) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().get('Counterparties'),
      errorData: 'get'
    },
    dispatch
  );
});

export const updateCounterparty = createAsyncThunk(
  'counterparty/update',
  async (counterparty, { dispatch }) => {
    return await handleAction(
      {
        method: () => webInvoicerApi().put('Counterparties', counterparty),
        errorData: 'update'
      },
      dispatch
    );
  }
);

export const deleteCounterparty = createAsyncThunk(
  'counterparty/delete',
  async (id, { dispatch }) => {
    return await handleAction(
      {
        method: () => webInvoicerApi().delete(`Counterparties/${id}`),
        errorData: 'delete'
      },
      dispatch
    );
  }
);

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

const counterpartySlice = createSlice({
  name: 'counterparty',
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
    [getCounterparties.fulfilled]: (state, action) => {
      state.counterpartyData = action.payload;
    }
  }
});

export const { setActionPending, setError } = counterpartySlice.actions;

export default counterpartySlice.reducer;
