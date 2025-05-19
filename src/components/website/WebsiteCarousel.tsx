
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
  
  useEffect(() => {
    // Force reflow after mounting
    if (carouselRef.current) {
      const forceReflow = carouselRef.current.offsetHeight;
      console.log("Carousel reflow triggered:", forceReflow);
    }
  }, []);
  
  if (websites.length === 0) {
    return <div className="text-center text-white">No websites to display.</div>;
  }
  
  return (
    <div ref={carouselRef} className="min-h-[600px]">
      <Carousel className="w-full">
        <CarouselContent className="min-h-[550px]">
          {websites.map((site, index) => (
            <CarouselItem 
              key={`mobile-${site.title}-${index}`} 
              className="px-1 md:px-2 min-h-[500px]"
            >
              <div className="h-full">
                <WebsiteCard {...site} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="position-relative left-auto right-auto" />
          <CarouselNext className="position-relative left-auto right-auto" />
        </div>
      </Carousel>
    </div>
  );
};

export default WebsiteCarousel;
