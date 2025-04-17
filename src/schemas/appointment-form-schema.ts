import { z } from "zod";

export const appointmentFormSchema = z.object({
  id: z.string().refine((val) => !isNaN(Number(val)), {
    message: "ID should be a valid number",
  }),
  name: z.string().min(3, "Name must be at least 3 characters"),
  message: z.string().min(3, "Message must be at least 3 characters"),
});
