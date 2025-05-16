
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';

import FormHeader from './contact/FormHeader';
import FormContainer from './contact/FormContainer';
import ContactFormFields from './contact/ContactFormFields';
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas/contactFormSchema';
import { submitContactForm } from '@/lib/api/contactForm';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      businessName: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await submitContactForm(data);

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "ניצור איתך קשר בהקדם",
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black bg-opacity-70">
      <div className="max-w-4xl mx-auto">
        <FormHeader />
        <FormContainer>
          <ContactFormFields 
            form={form} 
            isSubmitting={isSubmitting} 
            onSubmit={onSubmit} 
          />
        </FormContainer>
      </div>
    </section>
  );
};

export default ContactForm;
