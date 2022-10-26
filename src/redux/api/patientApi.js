import { api } from './api';

export const patientApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPatientData: builder.query({
            query: (patientId) => ({ url: `/api/home/patient-form/${patientId}`, method: 'GET' }),
        }),
    }),
});

export const { useLazyGetPatientDataQuery } = patientApi;

export const {
    endpoints: { getPatientData },
} = patientApi;
