import { api } from './api';
import { clearPatientList, saveParams } from '../slices/listSlice';

export const listApi = api.injectEndpoints({
	endpoints: (builder) => ({
		filterPatient: builder.query({
			query: (arg) => ({
				url: `/api/home/filter-patients/${arg.column}`,
				params: arg.params,
			}),
			async onQueryStarted(arg, { dispatch }) {
				dispatch(clearPatientList());
				dispatch(saveParams(arg));
			},
		}),
		orderPatients: builder.query({
			query: (arg) => ({
				url: `/api/home/order-patients/${arg.column}`,
				params: arg.params,
			}),
			async onQueryStarted(arg, { dispatch }) {
				dispatch(clearPatientList());
				dispatch(saveParams(arg));
			},
		}),
		patientsList: builder.query({
			query: () => ({
				url: '/api/home/patients-table',
			}),
		}),
		getFixedPatients: builder.query({
			query: () => ({
				url: '/api/home/fixed-patients',
				method: 'GET',
			}),
		}),
		patientsListWithParams: builder.query({
			query: (params) => ({
				url: '/api/home/patients-table',
				params: params,
			}),
			async onQueryStarted(arg, { dispatch }) {
				dispatch(clearPatientList());
				dispatch(saveParams(arg));
			},
		}),
	}),
});

export const {
	useFilterPatientQuery,
	useGetFixedPatientsQuery,
	useLazyOrderPatientsQuery,
	usePatientsListQuery,
	useLazyPatientsListWithParamsQuery,
} = listApi;
