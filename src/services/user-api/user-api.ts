import { getCurrentUserResponseSchema, User } from "@/schemas/user/user-response/user-response";

import { baseApi } from "../base-api/base-api";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCurrentUser: builder.query<User, void>({
            query: () => ({
                url: "/v1/users/me",
                method: "GET",
            }),
            transformResponse: (response) => {
                const validatedResponse = getCurrentUserResponseSchema.parse(response);

                return validatedResponse.data.user;
            },
        }),
    }),
});

export const { useGetCurrentUserQuery } = userApi;
