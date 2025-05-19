
import React, { useEffect, useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import WebsiteCarousel from './website/WebsiteCarousel';
import WebsiteGrid from './website/WebsiteGrid';
import WebsiteCallToAction from './website/WebsiteCallToAction';
import { websiteData } from './website/WebsiteData';
import { useIsMobile } from '@/hooks/use-mobile';

const WebsiteShowcase: React.FC = () => {
  console.log("WebsiteShowcase rendering with data:", websiteData.length);
  console.log("WebsiteShowcase data content:", JSON.stringify(websiteData));
  
  const isMobile = useIsMobile();
  
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
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 inline-block relative text-center w-full">
            <span className="text-gradient">אתרים שבנינו</span>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brandlify-cyan to-brandlify-purple transform animate-[expandWidth_0.6s_ease_0.3s_forwards]"></div>
          </h2>

          {/* Force specific display based on screen size for better control */}
          <div className="block md:hidden">
            <WebsiteCarousel websites={websiteData} />
          </div>
          <div className="hidden md:block">
            <WebsiteGrid websites={websiteData} />
          </div>

          <WebsiteCallToAction />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default WebsiteShowcase;
