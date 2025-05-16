
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const LogoGallery: React.FC = () => {
  const logos = [
    {
      id: 1,
      src: '/lovable-uploads/d07b194b-551c-475b-8928-117ec8d293ab.png',
      alt: "Maya's Dress Women's Fashion Logo"
    },
    {
      id: 2,
      src: '/lovable-uploads/b5a2aad4-ef6d-41af-a627-78a5c9e5043d.png',
      alt: "O.C Crown Jewelry Logo"
    },
    {
      id: 3,
      src: '/lovable-uploads/28eaa71b-f517-40e5-b0b2-4cf4d853dbe4.png',
      alt: "Neta Makeover Logo"
    },
    {
      id: 4,
      src: '/lovable-uploads/8aa696f6-34c5-4a31-9386-8bb5045e81aa.png',
      alt: "Eleven House Logo"
    },
    {
      id: 5,
      src: '/lovable-uploads/2d540cca-5425-4da4-91d6-bbb274946cf2.png',
      alt: "AluminMor Aluminum & Pergolas Logo"
    },
    {
      id: 6,
      src: '/lovable-uploads/c2c9a4db-545e-48f2-a0e6-e268c6bb074b.png',
      alt: "צִיפּוֹר הַשִׂמְחָה Logo"
    }
  ];
  
  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              הלוגואים שלנו
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#00E5FF] to-[#FF3C3C] transform animate-[expandWidth_0.6s_ease_forwards]"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {logos.map((logo) => (
              <div 
                key={logo.id} 
                className="relative group aspect-square bg-black bg-opacity-70 rounded-lg border border-gray-800 overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-0 blur moving-gradient group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative p-6 w-full h-full flex items-center justify-center">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        <div className="mt-10 text-center">
          <Button variant="link" className="text-brandlify-cyan hover:text-white flex items-center gap-2 mx-auto" asChild>
            <a href="https://www.brandlify.co.il" target="_blank" rel="noopener noreferrer">
              צפו בתיק העבודות המלא באתר הרשמי
              <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LogoGallery;
