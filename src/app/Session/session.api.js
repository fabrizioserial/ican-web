import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import appInfo from "../../settings.json"

export const sessionApi = createApi({
    reducerPath: 'sessionApi',
    baseQuery: fetchBaseQuery({ baseUrl: appInfo.BASE_URL }),
    tagTypes: ['Post'],

    endpoints: (builder) => ({
        login: builder.mutation({
            query: body => ({ 
                url: '/api/user/login',
                method: 'POST',
                body,
                headers: { 'Content-type': 'application/json' }
            }),
            invalidatesTags: ['Post'],
        }),
    }),
});

export const { useLoginMutation } = sessionApi;
export default sessionApi.reducer;