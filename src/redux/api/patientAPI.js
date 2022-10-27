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
    }),
});

export const { useLazyGetPatientDataQuery, useLazyGetAppetiteHydrationQuery, useLazyGetSocialPhysicalQuery } = patientApi;

export const {
    endpoints: { getPatientData, getAppetiteHydration, getSocialPhysical },
} = patientApi;