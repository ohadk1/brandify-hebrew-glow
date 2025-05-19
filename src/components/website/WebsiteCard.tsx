
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
  return (
    <Card className="bg-black bg-opacity-80 border border-gray-700 overflow-hidden group transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-2xl relative h-full">
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-30 blur moving-gradient"></div>
      <CardContent className="p-6 relative flex flex-col h-full">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{descriptionHe}</p>
        
        <div className="mt-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-4 mt-3">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-md cursor-pointer transform transition-transform hover:scale-[1.02] group/img">
                  <img 
                    src={desktopImage || "/placeholder.svg"} 
                    alt={`${title} - Desktop View`}
                    className="w-full rounded-md border border-gray-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                    <GalleryHorizontal className="w-8 h-8 text-white" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-black border border-gray-700">
                <img
                  src={desktopImage || "/placeholder.svg"}
                  alt={`${title} - Desktop View`}
                  className="w-full rounded-md"
                />
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-md cursor-pointer transform transition-transform hover:scale-[1.02] group/img">
                  <img 
                    src={mobileImage || "/placeholder.svg"} 
                    alt={`${title} - Mobile View`}
                    className="w-full md:w-24 md:h-auto rounded-md border border-gray-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity">
                    <GalleryHorizontal className="w-8 h-8 text-white" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-sm bg-black border border-gray-700">
                <img
                  src={mobileImage || "/placeholder.svg"}
                  alt={`${title} - Mobile View`}
                  className="w-full rounded-md"
                />
              </DialogContent>
            </Dialog>
          </div>
          
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
      </CardContent>
    </Card>
  );
};

export default WebsiteCard;
