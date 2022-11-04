import { createSlice } from '@reduxjs/toolkit';
import { sessionApi } from '../api/sessionApi';

const initialState = {
	accessToken: localStorage.getItem('accessToken'),
	ui: { loginPending: false, loginError: false, errorMessage: null },
};

export const authSlice = createSlice({
	name: 'authSlice',
	initialState,
	reducers: {
		setLoginPending: (state) => {
			state.ui.loginPending = true;
			state.ui.loginError = false;
		},
		setLoginError: (state, { payload }) => {
			state.ui.loginError = true;
			state.ui.loginPending = false;
			state.ui.errorMessage = payload.errorMessage;
		},
		logout: (state) => {
			state.accessToken = null;
			state.ui = initialState.ui;
		},
		logoutNew: (state) => {
			state.accessToken = undefined;
			localStorage.removeItem('accessToken');
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			sessionApi.endpoints.login.matchFulfilled,
			(state, { payload }) => {
				state.ui.loginPending = false;
				state.accessToken = payload.access_token;
				localStorage.setItem('accessToken', payload.access_token);
				localStorage.setItem('medicName', payload.name);
				localStorage.setItem('medicSurname', payload.surname);
			},
		); // Match with the endpoint
	},
});

export const { setLoginPending, setLoginError, logout, logoutNew } =
	authSlice.actions;
export default authSlice.reducer;
