import { api } from './api';

export const validateFormApi = api.injectEndpoints({
    endpoints: (builder) => ({
        setPatientForm: builder.mutation({
            query: (medicalHistory) => ({
                url: '/api/medical-history',
                method: 'POST',
                body: medicalHistory,
            }),
        }),
        setTreatmentForm: builder.mutation({
            query: (treatment) => ({
                url: '/api/treatment',
                method: 'POST',
                body: treatment,
            }),
        }),
        updateValidatePatient: builder.mutation({
            query: (status) => ({
                url: '/api/user/validate',
                method: 'PATCH',
                body: status,
            }),
        }),
    }),
});

export const { useSetPatientFormMutation, useSetTreatmentFormMutation, useUpdateValidatePatientMutation } = validateFormApi;

export const {
    endpoints: { setPatientForm, setTreatmentForm, updateValidatePatient },
} = validateFormApi;
