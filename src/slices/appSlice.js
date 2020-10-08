const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  theme: 'dark',
  language: 'en',
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
    setLanguage(state, action) {
      state.language = action.payload;
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

export const { setTheme, setLanguage, openDialog, closeDialog } = appSlice.actions;

export default appSlice.reducer;
