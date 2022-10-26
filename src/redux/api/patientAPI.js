import { api } from './api';

export const patientApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPatientData: builder.query({
            query: (patientID) => ({
                url: `/api/home/profile/${patientID}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useLazyGetPatientDataQuery } = patientApi;

export const {
    endpoints: { getPatientData },
} = patientApi;