import { z } from "zod";

import { apiResponseSchema } from "../../api-response/api-response";

// Define the schema for user stats
const userStatsSchema = z.object({
    stories_count: z.number(),
    followers_count: z.number(),
    following_count: z.number(),
    reading_lists_count: z.number(),
    total_donations_received: z.number(),
    total_donations_sent: z.number(),
});

// Define the schema for a user
const userSchema = z.object({
    id: z.string(),
    email: z.string().email(),
    username: z.string(),
    roles: z.array(z.string()),
    is_verified: z.boolean(),
    first_name: z.string(),
    last_name: z.string(),
    profile_pictures: z.array(z.string()),
    cover_pictures: z.array(z.string()),
    bio: z.string().nullable(),
    dob: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
    last_active: z.string().nullable(),
    donations_received_amount: z.number(),
    donations_sent_amount: z.number(),
    preferences: z.any().nullable(),
    following_ids: z.array(z.string()),
    follower_ids: z.array(z.string()),
    profile_picture: z.string(),
    cover_picture: z.string(),
    stats: userStatsSchema,
});

// Define the schema for the user response
const userResponseSchema = z.object({
    user: userSchema,
});

// Create the full API response schema
export const getCurrentUserResponseSchema = apiResponseSchema(userResponseSchema);

// Export types
export type UserStats = z.infer<typeof userStatsSchema>;
export type User = z.infer<typeof userSchema>;
export type GetCurrentUserResponse = z.infer<typeof getCurrentUserResponseSchema>;
