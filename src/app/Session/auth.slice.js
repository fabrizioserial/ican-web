import { createSlice } from "@reduxjs/toolkit";
import { sessionApi } from "./session.api";

const initialState = {
    accessToken: "ola",
};

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(sessionApi.endpoints.login.matchFulfilled, (state, { payload }) => { state.accessToken = payload.access_token }); // Math with the endpoint
    }
});

export default authSlice.reducer;