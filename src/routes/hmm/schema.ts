import { z } from "zod";


export const userSchema = z.object({
    age: z.number()
}) 