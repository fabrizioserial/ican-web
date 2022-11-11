import { api } from './api';

export const patientApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getPatientDataForm: builder.query({
			query: (patientId) => ({
				url: `/api/home/patient-form/${patientId}`,
				method: 'GET',
			}),
		}),
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
				url: `/api/home/patient-treatments/${patientID}`,
				method: 'GET',
			}),
			providesTags: ['TreatmentList'],
		}),
		getPollResults: builder.query({
			query: (userId) => ({
				url: '/api/home/patient-reports/' + userId,
				method: 'GET',
			}),
		}),
		updateFixedPatient: builder.mutation({
			query: (body) => ({
				url: '/api/medical-history/fix',
				body: body,
				method: 'PATCH',
			}),
		}),
		getTreatmentById: builder.query({
			query: ({ reportId }) => ({
				url: `/api/treatment/${reportId}`,
				method: 'GET',
			}),
			invalidatesTags: ['TreatmentList'],
			keepUnusedDataFor: 0.1,
		}),
	}),
});

export const {
	useGetTreatmentByIdQuery,
	useLazyGetPatientDataFormQuery,
	useLazyGetPatientDataQuery,
	useGetPatientDataQuery,
	useLazyGetAppetiteHydrationQuery,
	useLazyGetSocialPhysicalQuery,
	useLazyGetCalendarQuery,
	useGetPollResultsQuery,
	useGetDailyReportQuery,
	useGetWeeklyReportQuery,
	useGetPatientTreatmetsQuery,
	useUpdateFixedPatientMutation,
} = patientApi;

export const {
	endpoints: {
		getPatientDataForm,
		getPatientData,
		getAppetiteHydration,
		getSocialPhysical,
		getCalendar,
		getDailyReport,
		getWeeklyReport,
		getPollResults,
		getPatientTreatments,
		updateFixedPatient,
	},
} = patientApi;
