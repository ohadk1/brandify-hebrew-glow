
import React from 'react';
import Starfield from '@/components/Starfield';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Starfield />
      
      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <ContactForm />
      </main>
      
      <footer className="relative z-10 py-6 text-center text-gray-500 text-sm">
        <div className="container mx-auto">
          © {new Date().getFullYear()} BRANDLIFY. כל הזכויות שמורות.
        </div>
      </footer>
      
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
