import { createSlice } from '@reduxjs/toolkit';
import { listApi } from '../api/listApi';
import { authSlice } from './authSlice';

const initialState = {
	patientList: [],
	treatmentList: [],
};

export const listSlice = createSlice({
	name: 'listSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				listApi.endpoints.filterPatient.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload;
				},
			)
			.addMatcher(
				listApi.endpoints.orderPatients.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload;
				},
			)
			.addMatcher(
				listApi.endpoints.patientsList.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload;
				},
			);
	},
});

export const {} = listSlice.actions;

export default listSlice.reducer;
