import { z } from "zod";

export const userSchema = z.object({
    name: z.string(),
    lastName: z.string().trim().nullable()
    
})



