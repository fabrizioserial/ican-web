import { api } from './api';

export const patientAPI = api.injectEndpoints({
    endpoints: (builder) => ({
        getPatientData: builder.query({
            query: (patientID) => ({
                url: `/api/home/profile/${patientID}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { usePatientDataQuery } = patientAPI;

export const {
    endpoints: { getPatientData },
} = patientAPI;