
import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { ContactFormValues } from '@/lib/schemas/contactFormSchema';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface ContactFormFieldsProps {
  form: UseFormReturn<ContactFormValues>;
  isSubmitting: boolean;
  onSubmit: (data: ContactFormValues) => Promise<void>;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({ 
  form, 
  isSubmitting, 
  onSubmit 
}) => {
  return (
    <Form {...form}>
      <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>שם מלא</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full border-gray-700 bg-gray-900 text-white transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="businessName"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>שם העסק</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="w-full border-gray-700 bg-gray-900 text-white transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>טלפון</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="tel"
                  className="w-full border-gray-700 bg-gray-900 text-white transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>אימייל</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="email"
                  className="w-full border-gray-700 bg-gray-900 text-white transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>איזה שירות מעניין אותך?</FormLabel>
              <FormControl>
                <Select 
                  onValueChange={field.onChange} 
                  value={field.value}
                >
                  <SelectTrigger className="w-full border-gray-700 bg-gray-900 text-white transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan">
                    <SelectValue placeholder="בחר שירות" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-700 text-white">
                    <SelectItem value="logo">לוגו בלבד</SelectItem>
                    <SelectItem value="digital-card">כרטיס ביקור דיגיטלי</SelectItem>
                    <SelectItem value="physical-card">כרטיס ביקור פיזי</SelectItem>
                    <SelectItem value="media-post">פוסט פרסום מדיה</SelectItem>
                    <SelectItem value="landing">דף נחיתה</SelectItem>
                    <SelectItem value="branding-site">אתר תדמית</SelectItem>
                    <SelectItem value="ecommerce-site">אתר חנות</SelectItem>
                    <SelectItem value="other">אחר</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-2">
              <FormLabel>במה נוכל לעזור לך?</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="w-full border-gray-700 bg-gray-900 text-white h-32 transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="gradient-btn w-full text-xl py-6 font-bold transition-transform duration-300 hover:scale-[1.02]"
          disabled={isSubmitting}
        >
          <span>
            {isSubmitting ? "שולח..." : "לקבלת הצעה משתלמת – לחץ כאן"}
          </span>
        </Button>
      </form>
    </Form>
  );
};

export default ContactFormFields;
