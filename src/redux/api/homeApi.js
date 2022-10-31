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
		weeklyQuestions: builder.query({
			query: () => ({
				url: '/api/weekly/categories',
			}),
		}),
		cancerStatistics: builder.query({
			query: () => ({
				url: '/api/cancer/statistics',
			}),
		}),
		dailySummaryStatistics: builder.query({
			query: () => ({
				url: '/api/log/statistics',
			}),
		}),
		patientsList: builder.query({
			query: () => ({
				url: '/api/home/patients-table',
			}),
		}),
		weeklyStatistics: builder.query({
			query: () => ({
				url: '/api/weekly/statistics',
			}),
		}),
	}),
});

export const {
	usePatientsQuery,
	usePatientsReportQuery,
	useWeeklyQuestionsQuery,
	useCancerStatisticsQuery,
	useDailySummaryStatisticsQuery,
	usePatientsListQuery,
	useWeeklyStatisticsQuery
} = homeApi;

export const {
	endpoints: {
		patients,
		patientsReport,
		weeklyQuestions,
		cancerStatistics,
		dailySummaryStatistics,
		patientsList,
		weeklyStatistics
	},
} = homeApi;
