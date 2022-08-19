import { createSlice } from "@reduxjs/toolkit";
import { sessionApi } from "../api/sessionApi";

const initialState = {
    user: {
        avatarId: null,
        name: null,
        surname: null,

    },
};

export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addMatcher(sessionApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            const { avatarId, name, surname } = payload;

            state.user = { avatarId, name, surname };
        }); // Match with the login endpoint
    }
});

// export const { } = homeSlice.actions;
export default homeSlice.reducer;