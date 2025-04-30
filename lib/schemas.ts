import { object, string } from "zod"

export const signInSchema = object({
    email: string().email(),
    password: string(),
});
