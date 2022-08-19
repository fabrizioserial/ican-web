import { createSlice } from "@reduxjs/toolkit";
import { sessionApi } from "../api/sessionApi";

const initialState = {
    accessToken: null,
    ui: { loginPending: false, loginError: false, errorMessage: null },
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        setLoginPending: (state) => { state.ui.loginPending = true; state.ui.loginError = false; },
        setLoginError: (state, { payload }) => { state.ui.loginError = true; state.ui.loginPending = false; state.ui.errorMessage = payload.errorMessage; }
    },
    extraReducers: builder => {
        builder.addMatcher(sessionApi.endpoints.login.matchFulfilled, (state, { payload }) => { state.ui.loginPending = false; state.accessToken = payload.access_token; }); // Match with the endpoint
    }
});

export const { setLoginPending, setLoginError } = authSlice.actions;
export default authSlice.reducer;