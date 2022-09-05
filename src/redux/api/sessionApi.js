import { api } from "./api";

export const sessionApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/user/medic-login",
                method: 'POST',
                body: credentials,
            })
        })
    })
})

export const { useLoginMutation, useSignupMutation } = sessionApi;

export const {
    endpoints: { login, signup },
} = sessionApi;