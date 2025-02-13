import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { logOut, setNewToken } from "@/redux/slice/auth-slice/auth-slice";
import { RootState } from "@/redux/store/store";
import { refreshTokenResponseSchema } from "@/schemas/auth/auth-response/auth-response";

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
                    console.log("Failed to refresh token:", error);
                    api.dispatch(logOut());
                    throw error;
                }
            } else {
                api.dispatch(logOut());
            }
        }

        return result;
    } catch (error) {
        console.log("API request failed:", error);
        throw error;
    }
};

export const baseApi = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Auth", "User"],
    endpoints: () => ({}),
});
