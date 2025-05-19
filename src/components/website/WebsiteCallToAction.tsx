
import React from 'react';
import { Button } from "@/components/ui/button";

const WebsiteCallToAction: React.FC = () => {
  return (
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
  );
};

export default WebsiteCallToAction;
