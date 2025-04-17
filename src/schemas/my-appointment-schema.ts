import { z } from "zod";

export const myAppointmentSchema = z.object({
  review: z.string().min(5, "Review must be at least 5 characters"),
});

export type ReviewForm = z.infer<typeof myAppointmentSchema>;
