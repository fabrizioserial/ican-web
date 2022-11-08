import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { store } from '../store';
import devUrl from '../../settings.json';
import prodUrl from '../../settings_prod.json';

const baseQuery = fetchBaseQuery({
	reducerPath: 'generalApi',
	baseUrl:
		process.env.REACT_APP_DEVELOPMENT_MODE === 'dev'
			? devUrl.BASE_URL
			: prodUrl.BASE_URL,
	prepareHeaders: (headers) => {
		const token = store.getState()?.authSlice?.accessToken;
		console.log(
			process.env.REACT_APP_DEVELOPMENT_MODE,
			process.env.REACT_APP_DEVELOPMENT_MODE === 'dev'
				? devUrl.BASE_URL
				: prodUrl.BASE_URL,
		);

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
