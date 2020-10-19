import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import webInvoicerApi from '../apis/webInvoicerApi';
import apiHandler from '../apis/apiHandler';

const initialState = {
  actionPending: false,
  error: null,
  userData: null,
  isLoggedIn: false
};

export const login = createAsyncThunk('user/login', async (user, { dispatch }) => {
  const response = await handleAction(
    { endpoint: 'users/authenticate', payload: user, errorData: 'LOGIN' },
    dispatch
  );

  localStorage.setItem('token', response.token);
  return response;
});

export const refreshToken = createAsyncThunk('user/refreshToken', async (_, { dispatch }) => {
  return await handleAction(
    { endpoint: 'users/refreshToken', errorData: 'TOKEN_REFRESH' },
    dispatch
  );
});

export const register = createAsyncThunk('user/register', async (user, { dispatch }) => {
  return await handleAction(
    { endpoint: 'users/register', payload: user, errorData: 'REGISTRATION' },
    dispatch
  );
});

export const confirmEmail = createAsyncThunk(
  'user/confirmEmail',
  async (confirmationData, { dispatch }) => {
    return await handleAction(
      { endpoint: 'users/confirm', payload: confirmationData, errorData: 'CONFIRMATION' },
      dispatch
    );
  }
);

export const resetPassword = createAsyncThunk('user/resetPassword', async (email, { dispatch }) => {
  return await handleAction(
    { endpoint: 'users/resetPassword', payload: { email: email }, errorData: 'PASSWORD_RESET' },
    dispatch
  );
});

export const changeResetPassword = createAsyncThunk(
  'user/changeResetPassword',
  async (data, { dispatch }) => {
    return await handleAction(
      { endpoint: 'users/changeResetPassword', payload: data, errorData: 'CHANGE_RESET_PASSWORD' },
      dispatch
    );
  }
);

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (data, { dispatch }) => {
    return await handleAction(
      { endpoint: 'users/changePassword', payload: data, errorData: 'CHANGE_PASSWORD' },
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
    logout: {
      reducer(state) {
        state.userData = null;
        state.isLoggedIn = false;
      },
      prepare() {
        localStorage.removeItem('token');
      }
    }
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.userData = action.payload.userData;
      state.isLoggedIn = true;
    }
  }
});

export const { setActionPending, setError, logout } = userSlice.actions;

export default userSlice.reducer;
