
import React, { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import WebsiteCarousel from './website/WebsiteCarousel';
import WebsiteGrid from './website/WebsiteGrid';
import WebsiteCallToAction from './website/WebsiteCallToAction';
import { websiteData } from './website/WebsiteData';
import { useIsMobile } from '@/hooks/use-mobile';

const WebsiteShowcase: React.FC = () => {
  console.log("WebsiteShowcase rendering with data:", websiteData.length);
  
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(false);
  
  // Force activation of scroll reveal after component mount
  useEffect(() => {
    // Short timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsActive(true);
      console.log("Activating website showcase");
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (websiteData.length === 0) {
    return (
      <section id="websites" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 inline-block relative text-center w-full">
            <span className="text-gradient">אתרים שבנינו</span>
          </h2>
          <div className="text-center text-white">No websites to display.</div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="websites" className="py-20 px-4">
      <div className={`max-w-6xl mx-auto ${isActive ? 'reveal-section active' : 'reveal-section'}`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 inline-block relative text-center w-full">
          <span className="text-gradient">אתרים שבנינו</span>
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brandlify-cyan to-brandlify-purple"></div>
        </h2>

        {/* Display based on screen size */}
        <div className="opacity-100 transform-none">
          {isMobile ? (
            <WebsiteCarousel websites={websiteData} />
          ) : (
            <WebsiteGrid websites={websiteData} />
          )}
        </div>

        <WebsiteCallToAction />
      </div>
    </section>
  );
};

export default WebsiteShowcase;
