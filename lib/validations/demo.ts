import { z } from "zod";

export const demoSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  workEmail: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(24, "Enter a valid phone number."),
  societyName: z.string().trim().min(2, "Please enter the society name."),
  city: z.string().trim().min(2, "Please enter a city."),
  residents: z.string().min(1, "Select an approximate resident count."),
  role: z.string().min(1, "Select your role."),
  interestedModules: z
    .array(z.string())
    .min(1, "Select at least one module."),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more about what you need.")
    .max(1200, "Please keep the message under 1,200 characters."),
});

export type DemoFormValues = z.infer<typeof demoSchema>;
