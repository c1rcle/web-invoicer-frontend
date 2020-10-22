import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'dark',
  isDialogOpen: false
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
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
