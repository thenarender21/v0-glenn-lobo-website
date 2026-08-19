import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  propertyInterest: z.string().min(1, "Please select a property of interest"),
  message: z.string().optional().or(z.literal('')),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
