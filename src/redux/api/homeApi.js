import { api } from './api';

// TODO add endpoints
export const homeApi = api.injectEndpoints({
	endpoints: (builder) => ({
		patients: builder.query({
			query: () => ({ url: '/api/user/doctor-patients', method: 'GET' }),
		}),
		weeklyReport: builder.query({
			query: () => ({ url: '/api/user/statistics', method: 'GET' }),
		}),
	}),
});

export const { usePatientsQuery, useWeeklyReportQuery } = homeApi;

export const {
	endpoints: { patients },
} = homeApi;
