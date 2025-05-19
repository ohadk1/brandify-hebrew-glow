
import React from 'react';
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
  
  if (websites.length === 0) {
    return <div className="text-center text-white">No websites to display.</div>;
  }
  
  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent className="min-h-[600px]">
          {websites.map((site, index) => (
            <CarouselItem 
              key={`mobile-${site.title}-${index}`} 
              className="px-1 md:px-2 h-[600px] flex"
            >
              <div className="w-full h-full">
                <WebsiteCard {...site} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="static relative-position-override left-auto right-auto transform-none" />
          <CarouselNext className="static relative-position-override left-auto right-auto transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default WebsiteCarousel;
