import { api } from './api';

export const listApi = api.injectEndpoints({
	endpoints: (builder) => ({
		filterPatient: builder.query({
			query: (params) => ({
				url: '/api/home/filter-patients',
				params: params,
			}),
		}),
		orderPatients: builder.query({
			query: (params) => ({
				url: '/api/home/order-patients',
				params: params,
			}),
		}),
		patientsList: builder.query({
			query: () => ({
				url: '/api/home/patients-table',
			}),
		}),
	}),
});

export const {
	useFilterPatientQuery,
	useOrderPatientsQuery,
	usePatientsListQuery,
} = listApi;
