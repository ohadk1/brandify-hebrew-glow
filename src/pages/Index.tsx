
import React, { useEffect } from 'react';
import Starfield from '@/components/Starfield';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import LogoGallery from '@/components/LogoGallery';
import Testimonial from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

const Index: React.FC = () => {
  // Add a smooth scroll handler for navigation links
  useEffect(() => {
    const handleScrollToAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Add margin for header
          window.scrollBy(0, -100);
        }
      }
    };

    document.addEventListener('click', handleScrollToAnchor);
    return () => document.removeEventListener('click', handleScrollToAnchor);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Darker gradient background underneath everything */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#0b0f17] via-[#0a0d13] to-[#090c12] z-[-2]"></div>
      
      {/* Starfield above the gradient background but below content */}
      <Starfield />
      
      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <Services />
        <LogoGallery />
        <WhyChooseUs />
        <Testimonial />
        <ContactForm />
      </main>
      
      <footer className="relative z-10 py-6 text-center text-gray-400 text-sm">
        <div className="container mx-auto">
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_2s_forwards]">
            © {new Date().getFullYear()} BRANDLIFY. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
      
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
