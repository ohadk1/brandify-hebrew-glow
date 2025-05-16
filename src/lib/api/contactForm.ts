
import { ContactFormValues } from '../schemas/contactFormSchema';

const WEBHOOK_URL = 'https://hook.eu2.make.com/xkr9o2422keuybhhnicmob43o6eqpkmw';

export async function submitContactForm(data: ContactFormValues): Promise<Response> {
  return fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      businessName: data.businessName || '',
      phone: data.phone,
      email: data.email,
      service: data.service || '',
      message: data.message || '',
      timestamp: new Date().toISOString(),
      source: window.location.href,
    }),
  });
}
