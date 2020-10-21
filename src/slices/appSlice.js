import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'dark',
  drawerType: 'home',
  isDialogOpen: false
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
    openDialog(state) {
      state.isDialogOpen = true;
    },
    closeDialog(state) {
      state.isDialogOpen = false;
    }
  }
});

export const { setTheme, setDrawerType, openDialog, closeDialog } = appSlice.actions;

export default appSlice.reducer;
