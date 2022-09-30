import { createSlice } from '@reduxjs/toolkit';
import { homeApi } from '../api/homeApi';
import { sessionApi } from '../api/sessionApi';

const initialState = {
	user: {
		avatarId: null,
		name: null,
		surname: null,
	},
	weeklyGeneralPatientsReport: {
		total: null,
		active: null,
		pending: null,
		inTreatment: null,
	},
};

export const homeSlice = createSlice({
	name: 'homeSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				sessionApi.endpoints.login.matchFulfilled,
				(state, { payload }) => {
					const { avatarId, name, surname } = payload;

					state.user = { avatarId, name, surname };
				},
			)
			.addMatcher(
				homeApi.endpoints.weeklyReport.matchFulfilled,
				(state, { payload }) => {
					state.weeklyGeneralPatientsReport = payload;
				},
			);
	},
});

// export const { } = homeSlice.actions;
export default homeSlice.reducer;
