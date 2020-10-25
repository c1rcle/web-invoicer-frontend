import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: localStorage.getItem('theme') || 'dark',
  isDialogOpen: false,
  isDrawerOpen: false
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload;
    },
    setDialogOpen(state, action) {
      state.isDialogOpen = action.payload;
    },
    setDrawerOpen(state, action) {
      state.isDrawerOpen = action.payload;
    }
  }
});

export const { setTheme, setDialogOpen, setDrawerOpen } = appSlice.actions;

export default appSlice.reducer;
