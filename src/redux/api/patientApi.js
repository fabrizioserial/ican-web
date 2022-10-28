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
		getPollResults: builder.query({
			query: (userId) => ({ url: '/api/home/patient-reports/'+userId, method: 'GET' }),
		}),
	}),
});

export const {
	useLazyGetPatientDataQuery,
	useLazyGetAppetiteHydrationQuery,
	useLazyGetSocialPhysicalQuery,
	useLazyGetCalendarQuery,
	useLazyGetPollResultsQuery
} = patientApi;

export const {
	endpoints: {
		getPatientData,
		getAppetiteHydration,
		getSocialPhysical,
		getCalendar,
		getPollResults
	},
} = patientApi;
