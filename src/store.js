import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';
import userReducer from './slices/userSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    user: userReducer
  }
});
