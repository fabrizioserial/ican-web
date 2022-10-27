import { api } from './api';

// TODO add endpoints
export const homeApi = api.injectEndpoints({
	endpoints: (builder) => ({
		patients: builder.query({
			query: () => ({ url: '/api/user/doctor-patients', method: 'GET' }),
		}),
		patientsReport: builder.query({
			query: () => ({ url: '/api/home/patients-statistics', method: 'GET' }),
		}),
		cancerStatistics: builder.query({
			query: () => ({
				url: '/api/cancer/statistics',
			}),
		}),
	}),
});

export const {
	usePatientsQuery,
	usePatientsReportQuery,
	useCancerStatisticsQuery,
} = homeApi;

export const {
	endpoints: { patients, patientsReport, cancerStatistics },
} = homeApi;
