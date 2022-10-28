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
		total: 0,
		active: 0,
		pending: 0,
		inTreatment: 0,
	},
	weekly: [],
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
				homeApi.endpoints.patientsReport.matchFulfilled,
				(state, { payload }) => {
					state.weeklyGeneralPatientsReport = payload;
				},
			)

			.addMatcher(
				homeApi.endpoints.weeklyQuestions.matchFulfilled,
				(state, action) => {
					const newWeekly = action.payload.map((category) => ({
						id: category.id,
						name: category.name,
						symptoms: category.weeklySubCategories.map((symp) => ({
							id: symp.id,
							name: symp.name,
							questions: symp.weeklyQuestions.map((question) => ({
								id: question.id,
								type: question.type,
								value: undefined,
							})),
						})),
					}));
					state.weekly = newWeekly;
				},
			);
	},
});

// export const { } = homeSlice.actions;
export default homeSlice.reducer;
