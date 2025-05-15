
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ScrollReveal';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "שגיאה",
        description: "אנא מלא את כל השדות הנדרשים",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // In a real application, this would send the data to a server
      console.log("Form data submitted:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "הטופס נשלח בהצלחה!",
        description: "ניצור איתך קשר בהקדם",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: "שגיאה בשליחת הטופס",
        description: "אנא נסה שוב מאוחר יותר",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black bg-opacity-70">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="relative inline-block">
              רוצה מותג שמושך לקוחות?
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-brand transform animate-[expandWidth_0.6s_ease_forwards]"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-30 blur moving-gradient"></div>
            <div className="relative bg-black bg-opacity-90 p-6 md:p-10 rounded-lg border border-gray-800 shadow-xl transition-all duration-500 hover:shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    שם מלא
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-700 bg-gray-900 text-white transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    אימייל
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-700 bg-gray-900 text-white transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium">
                    טלפון
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-gray-700 bg-gray-900 text-white transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    מה חשוב לך שנדע?
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border-gray-700 bg-gray-900 text-white h-32 transition-all duration-300 focus:border-brandlify-cyan focus:ring-brandlify-cyan"
                  />
                </div>
                
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
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
