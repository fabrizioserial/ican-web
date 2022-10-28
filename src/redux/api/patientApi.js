import { api } from './api';

export const patientApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPatientDataForm: builder.query({
            query: (patientId) => ({ url: `/api/home/patient-form/${patientId}`, method: 'GET' }),
        }),
    }),
});

export const { useLazyGetPatientDataFormQuery } = patientApi;

export const {
    endpoints: { getPatientDataForm },
} = patientApi;
