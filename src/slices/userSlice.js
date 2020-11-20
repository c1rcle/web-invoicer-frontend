import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import webInvoicerApi from '../apis/webInvoicerApi';
import apiHandler from '../apis/apiHandler';
import { setDrawerOpen } from './appSlice';

const initialState = {
  actionPending: false,
  error: null,
  userData: null,
  isLoggedIn: false
};

export const login = createAsyncThunk('user/login', async (user, { dispatch }) => {
  const response = await handleAction(
    { endpoint: 'users/authenticate', payload: user, errorData: 'login' },
    dispatch
  );

  dispatch(setDrawerOpen(false));
  localStorage.setItem('token', response.token);
  localStorage.setItem('userData', JSON.stringify(response.userData));
  return response;
});

export const refreshToken = createAsyncThunk('user/refreshToken', async (_, { dispatch }) => {
  const response = await handleAction(
    { endpoint: 'users/refreshToken', errorData: 'refreshToken' },
    dispatch
  );

  localStorage.setItem('token', response);
  return response;
});

export const register = createAsyncThunk('user/register', async (user, { dispatch }) => {
  return await handleAction(
    { endpoint: 'users/register', payload: user, errorData: 'register' },
    dispatch
  );
});

export const confirmEmail = createAsyncThunk(
  'user/confirmEmail',
  async (confirmationData, { dispatch }) => {
    return await handleAction(
      { endpoint: 'users/confirm', payload: confirmationData, errorData: 'confirmEmail' },
      dispatch
    );
  }
);

export const resetPassword = createAsyncThunk('user/resetPassword', async (email, { dispatch }) => {
  return await handleAction(
    { endpoint: 'users/resetPassword', payload: { email: email }, errorData: 'resetPassword' },
    dispatch
  );
});

export const changeResetPassword = createAsyncThunk(
  'user/changeResetPassword',
  async (data, { dispatch }) => {
    return await handleAction(
      { endpoint: 'users/changeResetPassword', payload: data, errorData: 'changePassword' },
      dispatch
    );
  }
);

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (data, { dispatch }) => {
    return await handleAction(
      { endpoint: 'users/changePassword', payload: data, errorData: 'changePassword' },
      dispatch
    );
  }
);

export const setCompanyData = createAsyncThunk(
  'user/setCompanyData',
  async (data, { dispatch }) => {
    return await handleAction(
      { endpoint: 'users/setCompanyDetails', payload: data, errorData: 'setCompanyData' },
      dispatch
    );
  }
);

const handleAction = async ({ endpoint, payload, errorData }, dispatch) => {
  dispatch(setActionPending(true));
  const response = await apiHandler(webInvoicerApi().post(endpoint, payload), errorData);
  dispatch(setActionPending(false));

  if (response.type === 'ERROR') {
    dispatch(setError(response.data));
    throw new Error(response.data);
  }
  return response.data;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActionPending(state, action) {
      state.actionPending = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.userData = null;
      state.isLoggedIn = false;
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.userData = action.payload.userData;
      state.isLoggedIn = true;
    }
  }
});

export const { setActionPending, setError, setUserData, logout } = userSlice.actions;

export default userSlice.reducer;
