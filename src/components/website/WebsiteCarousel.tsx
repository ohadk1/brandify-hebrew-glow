import React from 'react';
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
  if (websites.length === 0) {
    return <div className="text-center text-white">אין אתרים להציג.</div>;
  }

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent className="flex flex-nowrap">
          {websites.map((site, index) => (
            <CarouselItem
              key={`site-${index}`}
              className="w-full px-1"
              style={{
                flex: '0 0 100%',
                minHeight: '680px',
              }}
            >
              <div className="h-full">
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
