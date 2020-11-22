import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import userReducer from './slices/userSlice';
import invoiceReducer from './slices/invoiceSlice';
import counterpartyReducer from './slices/counterpartySlice';
import employeeReducer from './slices/employeeSlice';
import productReducer from './slices/productSlice';

const combinedReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  invoice: invoiceReducer,
  counterparty: counterpartyReducer,
  employee: employeeReducer,
  product: productReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer
});
