import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '../store';
import appInfo from '../../settings.json';
import authState from '../slices/authSlice';

const baseQuery = fetchBaseQuery({
	reducerPath: 'generalApi',
	baseUrl: appInfo.BASE_URL,
	prepareHeaders: (headers) => {
		const token = store.getState()?.authSlice?.accessToken;
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

export const api = createApi({
	baseQuery: baseQuery,
	endpoints: () => ({}),
});
