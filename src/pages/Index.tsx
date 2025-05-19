import React, { useEffect } from 'react';
import Starfield from '@/components/Starfield';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import LogoGallery from '@/components/LogoGallery';
import Testimonial from '@/components/Testimonial';
import ContactForm from '@/components/ContactForm';
import WebsiteShowcase from '@/components/WebsiteShowcase';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import Footer from '@/components/Footer';

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
          // Set focus to the element for screen reader users
          element.setAttribute('tabindex', '-1');
          element.focus();
          element.removeAttribute('tabindex');
        }
      }
    };

    // Enhance keyboard navigation
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      // Skip to content with Shift+Tab
      if (e.key === 'Tab' && e.shiftKey && document.activeElement === document.body) {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          (mainContent as HTMLElement).setAttribute('tabindex', '-1');
          (mainContent as HTMLElement).focus();
        }
      }
    };

    document.addEventListener('click', handleScrollToAnchor);
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    return () => {
      document.removeEventListener('click', handleScrollToAnchor);
      document.removeEventListener('keydown', handleKeyboardNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Skip to content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:right-4 focus:z-50 focus:p-4 focus:bg-black focus:text-white focus:ring-2 focus:ring-white"
      >
        דלג לתוכן העיקרי
      </a>

      {/* Darker gradient background underneath everything */}
      <div 
        className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#0b0f17] via-[#0a0d13] to-[#090c12] z-[-2]" 
        aria-hidden="true"
      ></div>
      
      {/* Starfield above the gradient background but below content */}
      <Starfield />
      
      <main 
        id="main-content" 
        className="relative z-10" 
        role="main" 
        aria-label="תוכן עיקרי"
      >
        <Hero />
        <AboutUs />
        <Services />
        <LogoGallery />
        <WebsiteShowcase />
        <WhyChooseUs />
        <Testimonial />
        <ContactForm />
      </main>
      
      <Footer />
      
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
