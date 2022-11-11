import { api } from './api';

export const validateFormApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getCancer: builder.query({
			query: () => ({
				url: '/api/cancer',
				method: 'GET',
			}),
		}),
		getCancerType: builder.query({
			query: (cancerId) => ({
				url: `/api/cancer/types/${cancerId}`,
				method: 'GET',
			}),
		}),
		getCancerSubType: builder.query({
			query: (cancerTypeId) => ({
				url: `/api/cancer/subtypes/${cancerTypeId}`,
				method: 'GET',
			}),
		}),
		getCancerMedication: builder.query({
			query: () => ({
				url: '/api/treatment/cancer-medication',
				method: 'GET',
			}),
		}),
		getBiomarkers: builder.query({
			query: () => ({
				url: '/api/cancer/biomarkers',
				method: 'GET',
			}),
		}),
		setPatientForm: builder.mutation({
			query: (medicalHistory) => ({
				url: '/api/medical-history',
				method: 'POST',
				body: medicalHistory,
			}),
		}),
		setSetbacks: builder.mutation({
			query: (setBacks) => ({
				url: '/api/medical-history/setback',
				method: 'POST',
				body: setBacks,
			}),
		}),
		setTreatmentForm: builder.mutation({
			query: (treatment) => ({
				url: '/api/treatment',
				method: 'POST',
				body: treatment,
			}),
			invalidatesTags: ['TreatmentList'],
		}),
		updateValidatePatient: builder.mutation({
			query: (status) => ({
				url: '/api/user/validate',
				method: 'PATCH',
				body: status,
			}),
			invalidatesTags: [
				'UserList',
				'CancerStatistics',
				'PatientsStatistics',
			],
		}),
	}),
});

export const {
	useLazyGetCancerQuery,
	useGetCancerQuery,
	useGetBiomarkersQuery,
	useLazyGetCancerTypeQuery,
	useLazyGetCancerSubTypeQuery,
	useGetCancerMedicationQuery,
	useSetPatientFormMutation,
	useSetSetbacksMutation,
	useSetTreatmentFormMutation,
	useUpdateValidatePatientMutation,
} = validateFormApi;

export const {
	endpoints: {
		getCancer,
		getBiomarkers,
		getCancerType,
		getCancerSubType,
		getCancerMedication,
		setPatientForm,
		setSetbacks,
		setTreatmentForm,
		updateValidatePatient,
	},
} = validateFormApi;
