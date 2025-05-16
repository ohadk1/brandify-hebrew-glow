
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ScrollReveal';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, { message: "נא להזין שם מלא" }),
  businessName: z.string().optional(),
  phone: z.string().min(9, { message: "נא להזין מספר טלפון תקין" }),
  email: z.string().email({ message: "נא להזין כתובת אימייל תקינה" }),
  service: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const WEBHOOK_URL = 'https://hook.eu2.make.com/xkr9o2422keuybhhnicmob43o6eqpkmw';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      phone: '',
      email: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send data to Make webhook
      const response = await fetch(WEBHOOK_URL, {
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
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            <span className="relative inline-block">
              רוצה להתחיל לבנות מותג?
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-brand transform animate-[expandWidth_0.6s_ease_forwards]"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <p className="text-center text-gray-200 mb-12">
            ⚡ מספר המקומות השבוע מוגבל – שלחו פרטים ונחזור אליכם בהקדם
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-30 blur moving-gradient"></div>
            <div className="relative bg-black bg-opacity-90 p-6 md:p-10 rounded-lg border border-gray-800 shadow-xl transition-all duration-500 hover:shadow-2xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                              <SelectItem value="landing">דף נחיתה</SelectItem>
                              <SelectItem value="branding">מיתוג מלא</SelectItem>
                              <SelectItem value="design">חבילת עיצוב</SelectItem>
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
                    className="gradient-btn w-full text-lg py-6 transition-transform duration-300 hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    <span>
                      {isSubmitting ? "שולח..." : "שלחו לי פרטים"}
                    </span>
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
