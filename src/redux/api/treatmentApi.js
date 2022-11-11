import { api } from './api';

export const treatmentApi = api.injectEndpoints({
	endpoints: (builder) => ({
		endTreatment: builder.mutation({
			query: ({ body, treatmentId }) => ({
				url: `/api/treatment/end/${treatmentId}`,
				body: body,
				method: 'PUT',
			}),
			invalidatesTags: ['TreatmentList'],
		}),
	}),
});

export const { useEndTreatmentMutation } = treatmentApi;

export const {
	endpoints: { endTreatment },
} = treatmentApi;
