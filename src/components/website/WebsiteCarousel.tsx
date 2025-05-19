
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
  
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {websites.map((site, index) => (
          <CarouselItem key={`mobile-${site.title}-${index}`} className="px-1 md:px-2">
            <WebsiteCard {...site} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <CarouselPrevious className="position-relative left-auto right-auto" />
        <CarouselNext className="position-relative left-auto right-auto" />
      </div>
    </Carousel>
  );
};

export default WebsiteCarousel;
