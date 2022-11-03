import { createSlice } from '@reduxjs/toolkit';
import { listApi } from '../api/listApi';
import { authSlice } from './authSlice';
import { EndpointsListType } from '../../utils/utils';

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
	lastCalled: undefined,
	lastParams: undefined,
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
		clearPatientList: (state, action) => {
			state.patientList = [];
		},
		saveParams: (state, action) => {
			state.lastParams = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(authSlice.actions.logout, (state) => {
				state = initialState;
			})
			.addMatcher(
				listApi.endpoints.filterPatient.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload.patients;
					state.maxPage = action.payload.maxPage;
					state.page = action.payload.page;
					state.lastCalled = EndpointsListType.FILTER;
				},
			)
			.addMatcher(
				listApi.endpoints.orderPatients.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload.patients;
					state.maxPage = action.payload.maxPage;
					state.page = action.payload.page;
					state.lastCalled = EndpointsListType.ORDEN;
				},
			)
			.addMatcher(
				listApi.endpoints.patientsList.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload.patients;
					state.maxPage = action.payload.maxPage;
					state.page = action.payload.page;
					state.lastCalled = EndpointsListType.TABLE;
				},
			)
			.addMatcher(
				listApi.endpoints.patientsListWithParams.matchFulfilled,
				(state, action) => {
					state.patientList = action.payload.patients;
					state.maxPage = action.payload.maxPage;
					state.page = action.payload.page;
				},
			);
	},
});

export const { setColumnState, clearPatientList, saveParams } =
	listSlice.actions;

export default listSlice.reducer;
