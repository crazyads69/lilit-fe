import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { logOut, setNewToken } from "@/redux/slice/auth-slice/auth-slice";
import { RootState } from "@/redux/store/store";
import {
    LoginInput,
    loginInputSchema,
    RegisterInput,
    registerInputSchema,
} from "@/schemas/auth/auth-input/auth-input";
import {
    LoginResponse,
    loginResponseSchema,
    refreshTokenResponseSchema,
    RegisterResponse,
    registerResponseSchema,
} from "@/schemas/auth/auth-response/auth-response";

// Create a base query with authentication headers
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL!,
    prepareHeaders: (headers, { getState }) => {
        const acessToken = (getState() as RootState).auth.accessToken;
        const deviceId = (getState() as RootState).auth.deviceId;

        if (acessToken) {
            headers.set("Authorization", `Bearer ${acessToken}`);
        }
        if (deviceId) {
            headers.set("Device-ID", deviceId);
        }

        return headers;
    },
});

// Create a base query with reauthentication
const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions,
) => {
    let result = await baseQuery(args, api, extraOptions);

    if ((result.error && result.error.status === 401) || result.error?.status === 403) {
        const refreshToken = (api.getState() as RootState).auth.refreshToken;
        const deviceId = (api.getState() as RootState).auth.deviceId;

        if (refreshToken && deviceId) {
            try {
                // Make refresh token request with token in header
                const refreshResult = await baseQuery(
                    {
                        url: "/v1/auth/refresh-token",
                        method: "POST",
                        headers: {
                            Authorization: `Bearer ${refreshToken}`,
                            "Device-ID": deviceId,
                        },
                    },
                    api,
                    extraOptions,
                );

                if (refreshResult.data) {
                    const newToken = refreshTokenResponseSchema.parse(refreshResult.data);

                    api.dispatch(setNewToken(newToken.data));

                    // Retry original request with new access token
                    result = await baseQuery(args, api, extraOptions);
                } else {
                    api.dispatch(logOut());
                }
            } catch (error) {
                console.log("Failed to refresh token:", error);
                api.dispatch(logOut());
            }
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};

// Create an API with authentication
export const api = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        // Login endpoint
        login: builder.mutation<LoginResponse, LoginInput>({
            query: (credentials) => ({
                url: "/v1/auth/login",
                method: "POST",
                body: credentials,
            }),
            // Validate the input
            async onQueryStarted(credentials, { queryFulfilled }) {
                try {
                    loginInputSchema.parse(credentials);
                    await queryFulfilled;
                } catch (error) {
                    // Handle validation error (e.g., dispatch an action to show an error message)
                    console.log("Login input validation failed:", error);
                }
            },
            transformResponse: (response) => loginResponseSchema.parse(response),
            invalidatesTags: ["Auth"],
        }),
        // Register endpoint
        register: builder.mutation<RegisterResponse, RegisterInput>({
            query: (credentials) => ({
                url: "/v1/auth/register",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(credentials, { queryFulfilled }) {
                try {
                    registerInputSchema.parse(credentials);
                    await queryFulfilled;
                } catch (error) {
                    console.log("Register input validation failed:", error);
                }
            },
            transformResponse: (response) => registerResponseSchema.parse(response),
            invalidatesTags: ["Auth"],
        }),
        // Logout endpoint
        logout: builder.mutation<void, void>({
            query: () => ({
                url: "/v1/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["Auth"],
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = api;
