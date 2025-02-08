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

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL!,
    prepareHeaders: (headers, { getState }) => {
        const accessToken = (getState() as RootState).auth.accessToken;
        const deviceId = (getState() as RootState).auth.deviceId;

        if (accessToken) {
            headers.set("Authorization", `Bearer ${accessToken}`);
        }
        if (deviceId) {
            headers.set("Device-ID", deviceId);
        }

        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions,
) => {
    try {
        let result = await baseQuery(args, api, extraOptions);

        if (result.error?.status === 401 || result.error?.status === 403) {
            const refreshToken = (api.getState() as RootState).auth.refreshToken;
            const deviceId = (api.getState() as RootState).auth.deviceId;

            if (refreshToken && deviceId) {
                try {
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
                        result = await baseQuery(args, api, extraOptions);
                    } else {
                        api.dispatch(logOut());
                    }
                } catch (error) {
                    console.error("Failed to refresh token:", error);
                    api.dispatch(logOut());
                    throw error;
                }
            } else {
                api.dispatch(logOut());
            }
        }

        return result;
    } catch (error) {
        console.error("API request failed:", error);
        throw error;
    }
};

export const api = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Auth"],
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginInput>({
            query: (credentials) => {
                // Validate input before making the request
                loginInputSchema.parse(credentials);

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

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = api;
