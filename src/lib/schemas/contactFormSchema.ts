
import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "נא להזין שם מלא" }),
  businessName: z.string().optional(),
  phone: z.string().min(9, { message: "נא להזין מספר טלפון תקין" }),
  email: z.string().email({ message: "נא להזין כתובת אימייל תקינה" }),
  service: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
