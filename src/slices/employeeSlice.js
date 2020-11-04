import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import webInvoicerApi from '../apis/webInvoicerApi';
import apiHandler from '../apis/apiHandler';

const initialState = {
  actionPending: false,
  error: null,
  employeeData: []
};

export const createEmployee = createAsyncThunk(
  'employee/create',
  async (employee, { dispatch }) => {
    return await handleAction(
      {
        method: () => webInvoicerApi().post('Employees', employee),
        errorData: 'create'
      },
      dispatch
    );
  }
);

export const getEmployees = createAsyncThunk('employee/get', async (_, { dispatch }) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().get('Employees'),
      errorData: 'get'
    },
    dispatch
  );
});

export const updateEmployee = createAsyncThunk(
  'employee/update',
  async (employee, { dispatch }) => {
    return await handleAction(
      {
        method: () => webInvoicerApi().put('Employees', employee),
        errorData: 'update'
      },
      dispatch
    );
  }
);

export const deleteEmployee = createAsyncThunk('employee/delete', async (id, { dispatch }) => {
  return await handleAction(
    {
      method: () => webInvoicerApi().delete(`Employees/${id}`),
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

const employeeSlice = createSlice({
  name: 'employee',
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
    [getEmployees.fulfilled]: (state, action) => {
      state.employeeData = action.payload;
    }
  }
});

export const { setActionPending, setError } = employeeSlice.actions;

export default employeeSlice.reducer;
