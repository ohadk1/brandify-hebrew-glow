
import React, { useRef, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import WebsiteCard, { WebsiteProps } from './WebsiteCard';

interface WebsiteCarouselProps {
  websites: WebsiteProps[];
}

const WebsiteCarousel: React.FC<WebsiteCarouselProps> = ({ websites }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Force reflow on mobile devices to ensure content is visible
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && carouselRef.current) {
        console.log("Mobile view detected, ensuring visibility");
        
        // Force reflow of carousel items
        const items = carouselRef.current.querySelectorAll('[aria-roledescription="slide"]');
        items.forEach((item, index) => {
          if (item instanceof HTMLElement) {
            item.style.visibility = 'visible';
            item.style.display = 'block';
            item.style.opacity = '1';
            item.style.position = 'relative';
            item.style.minHeight = '700px';
            item.style.height = 'auto';
            item.style.overflow = 'visible';
            console.log(`Enforced visibility on slide ${index}`);
          }
        });
      }
    };

    // Initial check
    handleResize();
    
    // Listen for orientation changes which are common on mobile
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  if (websites.length === 0) {
    return <div className="text-center text-white">אין אתרים להציג.</div>;
  }

  return (
    <div ref={carouselRef} className="w-full relative min-h-[700px]">
      <Carousel className="w-full min-h-[700px]">
        <CarouselContent className="min-h-[700px]">
          {websites.map((site, index) => (
            <CarouselItem
              key={`site-${index}`}
              className="w-full flex-shrink-0 px-1 min-h-[700px] relative z-10"
              style={{
                flex: '0 0 100%',
                minHeight: '700px',
                visibility: 'visible',
                opacity: 1,
                display: 'block'
              }}
            >
              <div className="h-full relative z-10">
                <WebsiteCard {...site} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="left-auto right-auto" />
          <CarouselNext className="left-auto right-auto" />
        </div>
      </Carousel>
    </div>
  );
};

export default WebsiteCarousel;
