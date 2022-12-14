import { api } from './api';

// TODO add endpoints
export const homeApi = api.injectEndpoints({
	endpoints: (builder) => ({
		patients: builder.query({
			query: () => ({ url: '/api/user/doctor-patients', method: 'GET' }),
		}),
		patientsReport: builder.query({
			query: () => ({ url: '/api/home/patients-statistics', method: 'GET' }),
			providesTags: ['PatientsStatistics'],
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
			providesTags: ['CancerStatistics'],
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
			providesTags: ['UserList'],
		}),
		weeklyStatistics: builder.query({
			query: () => ({
				url: '/api/log/response-rate',
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
	useWeeklyStatisticsQuery,
} = homeApi;

export const {
	endpoints: {
		patients,
		patientsReport,
		weeklyQuestions,
		cancerStatistics,
		dailySummaryStatistics,
		patientsList,
		weeklyStatistics,
	},
} = homeApi;
