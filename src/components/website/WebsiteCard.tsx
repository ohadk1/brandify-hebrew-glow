
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, GalleryHorizontal } from "lucide-react";

export interface WebsiteProps {
  title: string;
  url: string;
  descriptionEn: string;
  descriptionHe: string;
  desktopImage: string;
  mobileImage: string;
  buttonText: string;
}

const WebsiteCard: React.FC<WebsiteProps> = ({
  title,
  url,
  descriptionHe,
  desktopImage,
  mobileImage,
  buttonText,
}) => {
  const [desktopImgLoaded, setDesktopImgLoaded] = useState(false);
  const [mobileImgLoaded, setMobileImgLoaded] = useState(false);
  
  // Force image preloading
  useEffect(() => {
    const preloadDesktopImg = new Image();
    preloadDesktopImg.onload = () => setDesktopImgLoaded(true);
    preloadDesktopImg.onerror = (e) => {
      console.error("Desktop image failed to load:", desktopImage, e);
      setDesktopImgLoaded(true); // Still mark as loaded to show fallback
    };
    preloadDesktopImg.src = desktopImage;
    
    const preloadMobileImg = new Image();
    preloadMobileImg.onload = () => setMobileImgLoaded(true);
    preloadMobileImg.onerror = (e) => {
      console.error("Mobile image failed to load:", mobileImage, e);
      setMobileImgLoaded(true); // Still mark as loaded to show fallback
    };
    preloadMobileImg.src = mobileImage;
    
    console.log('Preloading images for card:', title, { desktopImage, mobileImage });
  }, [desktopImage, mobileImage, title]);

  // Added logging for rendering events
  console.log(`Rendering WebsiteCard: ${title}`);

  return (
    <Card className="bg-black bg-opacity-80 border border-gray-700 overflow-visible group transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-2xl relative h-full w-full flex flex-col min-h-[650px]">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-30 blur moving-gradient"></div>

      <CardContent className="p-6 relative flex flex-col h-full z-10 overflow-visible">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{descriptionHe}</p>

        <div className="flex-grow mt-2 mb-8 overflow-visible">
          <div className="flex flex-col md:flex-row gap-4 mb-6 overflow-visible">
            {/* Desktop Image */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-md bg-gray-900 cursor-pointer group/img w-full md:w-auto overflow-visible">
                  <div className="w-full h-48 flex items-center justify-center bg-gray-900 overflow-visible">
                    <img
                      src={desktopImage}
                      alt={`${title} - Desktop View`}
                      className="w-full h-full object-cover rounded-md border border-gray-700 z-20 block"
                      style={{
                        objectPosition: 'center',
                        minHeight: '192px',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible'
                      }}
                      onError={(e) => {
                        console.error("Image failed to load:", desktopImage);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                      loading="eager"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity pointer-events-none z-30">
                    <GalleryHorizontal className="w-8 h-8 text-white" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black border border-gray-700">
                <DialogTitle>{title} - Desktop View</DialogTitle>
                <img
                  src={desktopImage}
                  alt={`${title} - Desktop View`}
                  className="w-full rounded-md"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </DialogContent>
            </Dialog>

            {/* Mobile Image */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-md bg-gray-900 cursor-pointer group/img w-full md:w-24 overflow-visible">
                  <div className="w-full h-48 md:h-48 flex items-center justify-center bg-gray-900 overflow-visible">
                    <img
                      src={mobileImage}
                      alt={`${title} - Mobile View`}
                      className="w-full h-full object-cover rounded-md border border-gray-700 z-20 block"
                      style={{
                        objectPosition: 'center',
                        minHeight: '192px',
                        display: 'block',
                        opacity: 1,
                        visibility: 'visible'
                      }}
                      onError={(e) => {
                        console.error("Image failed to load:", mobileImage);
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                      loading="eager"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity pointer-events-none z-30">
                    <GalleryHorizontal className="w-8 h-8 text-white" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-sm bg-black border border-gray-700">
                <DialogTitle>{title} - Mobile View</DialogTitle>
                <img
                  src={mobileImage}
                  alt={`${title} - Mobile View`}
                  className="w-full rounded-md"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </DialogContent>
            </Dialog>
          </div>

          {/* Visit Button - Positioned with absolute positioning to ensure visibility */}
          <div className="mt-4 pb-4 relative z-20 overflow-visible">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <Button
                variant="outline"
                className="group/btn border-brandlify-cyan hover:border-brandlify-purple transition-colors duration-300"
              >
                <span>{buttonText}</span>
                <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WebsiteCard;
