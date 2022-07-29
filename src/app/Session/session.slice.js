import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  ui: {
    loginError: false,
    loginPending: false,
    registryError: false,
    registryPending: false,
  }, // Check

  accessToken: null,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loginRequest: state => {
      state.ui.loginPending = true;
    },
    loginResponse: (state, {payload}) => {
      state.accessToken = payload.access_token;
      state.ui.loginPending = false;
    },
    loginResponseError: state => {
      state.ui.loginError = true;
      state.ui.loginPending = false;
    },
    logout: state => {
      state.accessToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {loginRequest, loginResponse, loginResponseError, logout} =
  counterSlice.actions;

export default counterSlice.reducer;
