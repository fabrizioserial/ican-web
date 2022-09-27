import { api } from './api';

// TODO add endpoints
export const homeApi = api.injectEndpoints({
	endpoints: (builder) => ({
		patients: builder.query({
			query: () => ({
				url: '/api/user/doctor-patients',
				method: 'GET',
			}),
		}),
	}),
});

// To export the actions, the format is: use[Action]Mutation (for post methods) or use[Action]Query (for get methods). See more at: https://redux-toolkit.js.org/rtk-query/usage/mutations
export const { usePatientsQuery } = homeApi;

export const {
	endpoints: { patients },
} = homeApi;
