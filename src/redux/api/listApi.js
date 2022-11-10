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
			providesTags: ['UserList'],
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
			providesTags: ['UserList'],
		}),
		patientsList: builder.query({
			query: () => ({
				url: '/api/home/patients-table',
			}),
			providesTags: ['UserList'],
		}),
		getFixedPatients: builder.query({
			query: () => ({
				url: '/api/home/fixed-patients',
				method: 'GET',
			}),
			providesTags: ['UserList'],
		}),
		patientsListWithParams: builder.query({
			query: (params) => ({
				url: '/api/home/patients-table',
				params: params,
			}),
			providesTags: ['UserList'],
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
