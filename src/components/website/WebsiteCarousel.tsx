
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
  console.log("Rendering WebsiteCarousel with items:", websites.length);

  if (websites.length === 0) {
    return <div className="text-center text-white">אין אתרים להציג.</div>;
  }

  return (
    <div className="w-full relative min-h-[700px]">
      <Carousel className="w-full min-h-[700px]">
        <CarouselContent className="min-h-[700px]">
          {websites.map((site, index) => (
            <CarouselItem
              key={`site-${index}`}
              className="w-full flex-shrink-0 px-1 min-h-[700px] relative z-10"
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
