
import React, { useEffect } from 'react';
import Starfield from '@/components/Starfield';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactForm from '@/components/ContactForm';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import { Sparkles } from 'lucide-react';

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
        }
      }
    };

    // Add intersection observer to reveal sections on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.reveal-section').forEach((el) => {
      observer.observe(el);
    });

    document.addEventListener('click', handleScrollToAnchor);
    return () => {
      document.removeEventListener('click', handleScrollToAnchor);
      document.querySelectorAll('.reveal-section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <Starfield />
      
      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <ContactForm />
      </main>
      
      <footer className="relative z-10 py-8 text-center text-gray-300 text-sm">
        <div className="container mx-auto">
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_2s_forwards] flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-brandlify-cyan mr-2" />
            © {new Date().getFullYear()} BRANDLIFY. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
      
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
