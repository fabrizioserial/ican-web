import { api } from './api';

export const listApi = api.injectEndpoints({
	endpoints: (builder) => ({
		filterPatient: builder.query({
			query: (arg) => ({
				url: `/api/home/filter-patients/${arg.column}`,
				params: arg.params,
			}),
		}),
		orderPatients: builder.query({
			query: (arg) => ({
				url: `/api/home/order-patients/${arg.column}`,
				params: arg.params,
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
	useLazyOrderPatientsQuery,
	usePatientsListQuery,
} = listApi;
