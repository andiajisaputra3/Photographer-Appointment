import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email must not be empty"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password must be at most 50 characters"),
});
