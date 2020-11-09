import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import userReducer from './slices/userSlice';
import invoiceReducer from './slices/invoiceSlice';
import counterpartyReducer from './slices/counterpartySlice';
import employeeReducer from './slices/employeeSlice';
import productReducer from './slices/productSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    invoice: invoiceReducer,
    counterparty: counterpartyReducer,
    employee: employeeReducer,
    product: productReducer
  }
});
