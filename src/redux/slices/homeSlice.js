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
	waitingPatients: [
		{
			fullName: "Agustin Von Staweksi",
			dni: "0943892948",
			avatar: "img"
		},
		{
			fullName: "Carlos Gomez",
			dni: "9124837499",
			avatar: "img"
		},
		{
			fullName: "Elisa Furnari",
			dni: "3789438384",
			avatar: "img"
		},
		{
			fullName: "Reina Isabel II",
			dni: "0000000001",
			avatar: "img"
		},
		{
			fullName: "Agustin Von Staweksi",
			dni: "0943892948",
			avatar: "img"
		},
		{
			fullName: "Carlos Gomez",
			dni: "9124837499",
			avatar: "img"
		},
		{
			fullName: "Elisa Furnari",
			dni: "3789438384",
			avatar: "img"
		},
		{
			fullName: "Reina Isabel II",
			dni: "0000000001",
			avatar: "img"
		},
		{
			fullName: "Agustin Von Staweksi",
			dni: "0943892948",
			avatar: "img"
		},
		{
			fullName: "Carlos Gomez",
			dni: "9124837499",
			avatar: "img"
		},
		{
			fullName: "Elisa Furnari",
			dni: "3789438384",
			avatar: "img"
		},
		{
			fullName: "Reina Isabel II",
			dni: "0000000001",
			avatar: "img"
		}
	]
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
