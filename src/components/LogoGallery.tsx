
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const LogoGallery: React.FC = () => {
  // Note: When the user uploads the logo files, we can use them here
  // For now, we'll create placeholders
  const logoPlaceholders = Array(6).fill(null);
  
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
            {logoPlaceholders.map((_, index) => (
              <div 
                key={index} 
                className="relative group aspect-square bg-black bg-opacity-70 rounded-lg border border-gray-800 overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-0 blur moving-gradient group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative p-6 w-full h-full flex items-center justify-center">
                  <div className="w-full h-full bg-gray-800 rounded flex items-center justify-center text-gray-500">
                    Logo {index + 1}
                  </div>
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
