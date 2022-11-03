import { api } from './api';

export const patientApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getPatientData: builder.query({
			query: (patientID) => ({
				url: `/api/home/profile/${patientID}`,
				method: 'GET',
			}),
		}),
		getAppetiteHydration: builder.query({
			query: (patientID) => ({
				url: `/api/log/appetite-hydration/${patientID}`,
				method: 'GET',
			}),
		}),
		getSocialPhysical: builder.query({
			query: (patientID) => ({
				url: `/api/log/social-physical/${patientID}`,
				method: 'GET',
			}),
		}),
		getCalendar: builder.query({
			query: (patientID) => ({
				url: `/api/home/calendar/${patientID}`,
				method: 'GET',
			}),
		}),
		getDailyReport: builder.query({
			query: (reportId) => ({
				url: `/api/log/report/${reportId}`,
			}),
		}),
		getWeeklyReport: builder.query({
			query: (reportId) => ({
				url: `/api/weekly/report/${reportId}`,
			}),
		}),
		getPatientTreatmets: builder.query({
			query: (patientID) => ({
				url: `/api/home/patient-treatmets/${patientID}`,
				method: 'GET',
			}),
		}),
		getPollResults: builder.query({
			query: (userId) => ({
				url: '/api/home/patient-reports/' + userId,
				method: 'GET',
			}),
		}),
	}),
});

export const {
	useLazyGetPatientDataQuery,
	useLazyGetAppetiteHydrationQuery,
	useLazyGetSocialPhysicalQuery,
	useLazyGetCalendarQuery,
	useGetPollResultsQuery,
	useGetDailyReportQuery,
	useGetWeeklyReportQuery,
	useGetPatientTreatmetsQuery,
} = patientApi;

export const {
	endpoints: {
		getPatientData,
		getAppetiteHydration,
		getSocialPhysical,
		getCalendar,
		getDailyReport,
		getWeeklyReport,
		getPollResults,
		getPatientTreatments,
	},
} = patientApi;