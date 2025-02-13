import { logOut } from "@/redux/slice/auth-slice/auth-slice";
import {
    LoginInput,
    loginInputSchema,
    RegisterInput,
    registerInputSchema,
} from "@/schemas/auth/auth-input/auth-input";
import {
    LoginResponse,
    loginResponseSchema,
    RegisterResponse,
    registerResponseSchema,
} from "@/schemas/auth/auth-response/auth-response";

import { baseApi } from "../base-api/base-api";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginInput>({
            query: (credentials) => {
                // Validate input before making the request
                loginInputSchema.parse(credentials);
                console.log(credentials);

                return {
                    url: "/v1/auth/login",
                    method: "POST",
                    body: credentials,
                };
            },
            transformResponse: (response) => loginResponseSchema.parse(response),
            invalidatesTags: ["Auth"],
        }),
        register: builder.mutation<RegisterResponse, RegisterInput>({
            query: (credentials) => {
                // Validate input before making the request
                registerInputSchema.parse(credentials);

                return {
                    url: "/v1/auth/register",
                    method: "POST",
                    body: credentials,
                };
            },
            transformResponse: (response) => registerResponseSchema.parse(response),
            invalidatesTags: ["Auth"],
        }),
        logout: builder.mutation<void, void>({
            query: () => ({
                url: "/v1/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["Auth"],
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    // Clean up local state after successful logout
                    dispatch(logOut());
                } catch {
                    // Handle failed logout
                    console.log("Logout failed");
                }
            },
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApi;
