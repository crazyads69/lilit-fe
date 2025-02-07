import { z } from "zod";

export const apiResponseSchema = <T extends z.ZodType>(dataSchema: T) =>
    z.object({
        status_code: z.number(),
        message: z.string(),
        message_vi: z.string(),
        data: dataSchema,
    });
