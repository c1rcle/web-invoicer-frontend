import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'dark',
  drawerType: 'home',
  dialog: {
    type: 'login',
    open: false
  }
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setDrawerType(state, action) {
      state.drawerType = action.payload;
    },
    openDialog(state, action) {
      state.dialog.type = action.payload;
      state.dialog.open = true;
    },
    closeDialog(state) {
      state.dialog.open = false;
    }
  }
});

export const { setTheme, setDrawerType, openDialog, closeDialog } = appSlice.actions;

export default appSlice.reducer;
