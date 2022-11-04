import { createSlice } from '@reduxjs/toolkit';
import { homeApi } from '../api/homeApi';
import { sessionApi } from '../api/sessionApi';
import { patientApi } from '../api/patientApi';
import { listApi } from '../api/listApi';
import { authSlice } from './authSlice';

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
			.addCase(authSlice.actions.logout, (state) => {
				state = initialState;
			})
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
								type: question.questionType,
								value: undefined,
								date: undefined,
							})),
						})),
					}));
					state.weekly = newWeekly;
				},
			)
			.addMatcher(
				patientApi.endpoints.getWeeklyReport.matchFulfilled,
				(state, action) => {
					let newAnswerMap = {};
					action.payload.answers.forEach((answer) => {
						newAnswerMap = {
							...newAnswerMap,
							[answer.question.id]: {
								date: answer.answerDate,
								idQuestion: answer.question.id,
								value: answer.value,
							},
						};
					});
					state.weekly = state.weekly.map((category) => ({
						id: category.id,
						name: category.name,
						symptoms: category.symptoms.map((symp) => ({
							id: symp.id,
							name: symp.name,
							questions: symp.questions.map((question) => ({
								id: question.id,
								type: question.type,
								value: newAnswerMap[question.id]?.value,
								date: newAnswerMap[question.id]?.date,
							})),
						})),
					}));
				},
			);
	},
});

// export const { } = homeSlice.actions;
export default homeSlice.reducer;
