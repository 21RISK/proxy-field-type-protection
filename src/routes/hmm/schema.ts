import { z } from "zod";


export const userSchema = z.object({
    enabled: z.boolean(),
}) 