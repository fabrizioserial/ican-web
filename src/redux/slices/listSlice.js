import { createSlice } from '@reduxjs/toolkit';
import { listApi } from '../api/listApi';
import { authSlice } from './authSlice';

const initialState = {
	patientList: [],
	treatmentList: [],
	columnState: {
		medicHistoryNumber: 'desc',
		name: 'desc',
		organ: 'desc',
		treatment: 'desc',
		tumorTreatment: 'desc',
		status: 'desc',
	},
	maxPage: undefined,
	page: undefined,
};

export const listSlice = createSlice({
	name: 'listSlice',
	initialState,
	reducers: {
		setColumnState: (state, action) => {
			state.columnState = {
				...state.columnState,
				[action.payload.columnName]: action.payload.orden,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addMatcher(
				listApi.endpoints.filterPatient.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload.patients;
					state.maxPage = action.payload.maxPage;
					state.page = action.payload.page;
				},
			)
			.addMatcher(
				listApi.endpoints.orderPatients.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload.patients;
					state.maxPage = action.payload.maxPage;
					state.page = action.payload.page;
				},
			)
			.addMatcher(
				listApi.endpoints.patientsList.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload.patients;
					state.maxPage = action.payload.maxPage;
					state.page = action.payload.page;
				},
			);
	},
});

export const { setColumnState } = listSlice.actions;

export default listSlice.reducer;
