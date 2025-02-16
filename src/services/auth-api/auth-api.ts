import { logOut } from "@/redux/slice/auth-slice/auth-slice";
import {
    LoginInput,
    loginInputSchema,
    RegisterInput,
    registerInputSchema,
} from "@/schemas/auth/auth-input/auth-input";
import {
    CheckEmailVerificationResponse,
    checkEmailVerificationResponseSchema,
    LoginResponse,
    loginResponseSchema,
    LogoutResponse,
    logoutResponseSchema,
    RegisterResponse,
    registerResponseSchema,
    ResendEmailVerificationResponse,
    resendEmailVerificationResponseSchema,
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
        logout: builder.mutation<LogoutResponse, void>({
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
            transformResponse: (response) => logoutResponseSchema.parse(response),
        }),
        checkEmailVerification: builder.mutation<CheckEmailVerificationResponse, void>({
            query: () => ({
                url: "/v1/auth/check-email-verification",
                method: "POST",
            }),
            transformResponse: (response) => checkEmailVerificationResponseSchema.parse(response),
            invalidatesTags: ["Auth"],
        }),
        resendEmailVerification: builder.mutation<ResendEmailVerificationResponse, void>({
            query: () => ({
                url: "/v1/auth/resend-verification-email",
                method: "POST",
            }),
            invalidatesTags: ["Auth"],
            transformResponse: (response) => resendEmailVerificationResponseSchema.parse(response),
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useCheckEmailVerificationMutation,
    useResendEmailVerificationMutation,
} = authApi;
