import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import appInfo from "../../settings.json";
import endpointsBuilder from "../../utils/endpointsBuilder";
import sessionEndpoints from './sessionEndpoints';

export const sessionApi = createApi({
    reducerPath: 'sessionApi',
    baseQuery: fetchBaseQuery({ baseUrl: appInfo.BASE_URL }),
    tagTypes: ['Post'],

    endpoints: (builder) => endpointsBuilder(builder, sessionEndpoints),
});


// To export the actions, the format is: use[Action]Mutation (for post methods) or use[Action]Query (for get methods). See more at: https://redux-toolkit.js.org/rtk-query/usage/mutations
export const { useLoginMutation, useAddPostMutation } = sessionApi; 
export default sessionApi.reducer;