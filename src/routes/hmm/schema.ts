import { z } from "zod";


export const userSchema = z.object({
    name: z.string(),
    options: z.array(
        z.object({
            color: z.string().trim().nullable(),
            value: z.string().trim(),
        })
    )
    .default([]),
})
/**
 * 
 * Expected type
 * ----------------
   name: string;
   options: {
        value: string;
        color: string | null;
    }[];
 * 
 */
export type UserSchemaInffered = z.infer<typeof userSchema>;