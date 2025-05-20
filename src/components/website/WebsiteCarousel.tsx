
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import WebsiteCard, { WebsiteProps } from './WebsiteCard';

interface WebsiteCarouselProps {
  websites: WebsiteProps[];
}

const WebsiteCarousel: React.FC<WebsiteCarouselProps> = ({ websites }) => {
  console.log("WebsiteCarousel rendering websites:", websites.length);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Force reflow after component mounts to ensure proper rendering
  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        // Force a reflow to ensure all slides are properly sized and visible
        carouselRef.current.style.display = 'none';
        carouselRef.current.offsetHeight; // Force reflow
        carouselRef.current.style.display = 'block';
        
        // Make all carousel items visible explicitly
        const items = carouselRef.current.querySelectorAll('[aria-roledescription="slide"]');
        items.forEach((item) => {
          if (item instanceof HTMLElement) {
            item.style.display = 'block';
            item.style.visibility = 'visible';
            item.style.opacity = '1';
            item.style.minHeight = '700px';
            item.style.height = 'auto';
            item.style.position = 'relative';
            item.style.overflow = 'visible';
          }
        });
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  if (websites.length === 0) {
    return <div className="text-center text-white">No websites to display.</div>;
  }

  return (
    <div className="w-full" ref={carouselRef}>
      <Carousel className="w-full">
        <CarouselContent className="flex flex-nowrap">
          {websites.map((site, index) => (
            <CarouselItem
              key={`mobile-${site.title}-${index}`}
              className="w-full flex-shrink-0 px-2 min-h-[700px] relative block visible opacity-100"
              style={{
                visibility: 'visible',
                opacity: 1,
                display: 'block',
                minHeight: '700px',
                height: 'auto',
                position: 'relative',
                overflow: 'visible'
              }}
            >
              <WebsiteCard {...site} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-2 mt-8">
          <CarouselPrevious className="relative left-auto right-auto transform-none" />
          <CarouselNext className="relative left-auto right-auto transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default WebsiteCarousel;
