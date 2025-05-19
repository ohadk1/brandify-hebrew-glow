
import React, { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, GalleryHorizontal } from "lucide-react";
import ScrollReveal from '@/components/ScrollReveal';

interface WebsiteProps {
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

const WebsiteShowcase: React.FC = () => {
  const websites: WebsiteProps[] = [
    {
      title: "מטבחי דניאל – אתר תדמית יוקרתי",
      url: "https://danielkitchens.com",
      descriptionEn: "Modern showcase website for a luxury kitchen brand. Designed with a minimalist layout, soft animation transitions, and a hero section featuring call-to-action buttons.",
      descriptionHe: "עיצוב נקי ומוקפד למותג בתחום המטבחים המודרניים, עם דגש על תצוגת פרויקטים מרהיבה ותיאום שיחה נוח.",
      desktopImage: "/placeholder.svg",
      mobileImage: "/placeholder.svg",
      buttonText: "בקרו באתר",
    },
    {
      title: "MOE Bride Studio – סטודיו לשמלות ואיפור",
      url: "https://moebridestudio.co.il",
      descriptionEn: "Elegant and feminine branding site for a bridal makeup and dress studio. Rich visuals and smooth gallery transitions help highlight the luxurious style.",
      descriptionHe: "אתר תדמית קלאסי ונשי עם קווים אלגנטיים וגלריה מקצועית להצגת העבודות.",
      desktopImage: "/placeholder.svg",
      mobileImage: "/placeholder.svg",
      buttonText: "בקרו באתר",
    },
    {
      title: "דף נחיתה – מערכות איטום 26 בע\"מ",
      url: "https://landing-page-itum26.lovable.app",
      descriptionEn: "Landing page designed for a waterproofing and sealing company. Optimized for high conversion with lead form integration, bold typography, and strong call-to-action.",
      descriptionHe: "דף נחיתה תכליתי עם מיקוד בקריאה לפעולה, חיבור למערכת לידים ונראות מקצועית לעסק בתחום הבנייה והאיטום.",
      desktopImage: "/placeholder.svg",
      mobileImage: "/placeholder.svg",
      buttonText: "בקרו באתר",
    }
  ];

  return (
    <section id="websites" className="py-20 px-4">
      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 inline-block relative text-center w-full">
            <span className="text-gradient">אתרים שבנינו</span>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-brandlify-cyan to-brandlify-purple transform animate-[expandWidth_0.6s_ease_0.3s_forwards]"></div>
          </h2>

          {/* Mobile Carousel (visible on mobile) */}
          <div className="md:hidden">
            <Carousel className="w-full">
              <CarouselContent>
                {websites.map((site, index) => (
                  <CarouselItem key={`mobile-${site.title}-${index}`}>
                    <WebsiteCard {...site} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="position-relative left-auto right-auto" />
                <CarouselNext className="position-relative left-auto right-auto" />
              </div>
            </Carousel>
          </div>

          {/* Desktop Grid (visible on desktop) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {websites.map((site, index) => (
              <div 
                key={`desktop-${site.title}-${index}`}
                className="stagger-item"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <WebsiteCard {...site} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">רוצים אתר משלכם?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="gradient-btn text-xl px-8 py-6 font-bold"
                onClick={() => document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                })}
              >
                <span>צרו קשר עכשיו</span>
              </Button>
              <a 
                href="https://wa.me/972541234567" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="text-xl px-8 py-6 font-bold border-2 border-white hover:bg-white/10"
                >
                  <span>🟢 שלחו לנו וואטסאפ</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default WebsiteShowcase;
