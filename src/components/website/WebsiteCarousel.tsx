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
  if (websites.length === 0) {
    return <div className="text-center text-white">No websites to display.</div>;
  }

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent className="flex flex-nowrap">
          {websites.map((site, index) => (
            <CarouselItem
              key={`mobile-${site.title}-${index}`}
              className="w-full flex-shrink-0 px-2"
            >
              <WebsiteCard {...site} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="relative left-auto right-auto transform-none" />
          <CarouselNext className="relative left-auto right-auto transform-none" />
        </div>
      </Carousel>
    </div>
  );
};

export default WebsiteCarousel;
