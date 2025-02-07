import { z } from "zod";

import { apiResponseSchema } from "../../api-response/api-response";

const userSchema = z.object({
    id: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    firebase_uid: z.string(),
    dob: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    facebook_id: z.string().nullable(),
    google_id: z.string().nullable(),
    profile_pictures: z.array(z.string()),
    cover_pictures: z.array(z.string()),
    bio: z.string().nullable(),
    following_ids: z.array(z.string()),
    follower_ids: z.array(z.string()),
    roles: z.array(z.string()),
    is_verified: z.boolean(),
    donations_received_amount: z.number(),
    donations_sent_amount: z.number(),
    created_at: z.string(),
    updated_at: z.string(),
    last_active: z.string().nullable(),
    followed_reading_list_ids: z.array(z.string()),
    oauth_providers: z.array(z.string()).optional(),
    profile_picture: z.string(),
    cover_picture: z.string(),
});

const authDataSchema = z.object({
    user: userSchema,
    access_token: z.string(),
    refresh_token: z.string(),
});

export const loginResponseSchema = apiResponseSchema(authDataSchema);
export const registerResponseSchema = apiResponseSchema(authDataSchema);

export type User = z.infer<typeof userSchema>;
export type LoginResponse = z.infer<typeof loginResponseSchema>;
export type RegisterResponse = z.infer<typeof registerResponseSchema>;
