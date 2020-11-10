import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  actionPending: false,
  error: null,
  invoiceData: []
};

export const getInvoices = createAsyncThunk('invoice/get', async (_, dispatch) => {});

const invoiceSlice = createSlice({
  name: 'invoice',
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
    [getInvoices.fulfilled]: (state, action) => {
      state.invoiceData = action.payload;
    }
  }
});

export const { setActionPending, setError } = invoiceSlice.actions;

export default invoiceSlice.reducer;
