import { api } from './api';

export const listApi = api.injectEndpoints({
	endpoints: (builder) => ({
		filterPatient: builder.query({
			query: (column, params) => ({
				url: `/api/home/filter-patients/${column}`,
				params: { value: 'Pending' },
			}),
		}),
		orderPatients: builder.query({
			query: (column, params) => ({
				url: `/api/home/order-patients/${column}`,
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
