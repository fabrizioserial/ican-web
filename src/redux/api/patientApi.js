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
	}),
});

export const {
	useLazyGetPatientDataQuery,
	useLazyGetAppetiteHydrationQuery,
	useLazyGetSocialPhysicalQuery,
	useLazyGetCalendarQuery,
	useGetDailyReportQuery,
	useGetWeeklyReportQuery,
} = patientApi;

export const {
	endpoints: {
		getPatientData,
		getAppetiteHydration,
		getSocialPhysical,
		getCalendar,
		getDailyReport,
		getWeeklyReport,
	},
} = patientApi;
