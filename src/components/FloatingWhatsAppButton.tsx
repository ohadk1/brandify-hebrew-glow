
import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/972522174188?text=היי%2C%20רוצה%20למתג%20את%20העסק"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 text-white px-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-[fadeIn_0.8s_ease-out_1.5s_both] hover:shadow-[0_0_20px_rgba(0,255,0,0.8)]"
    >
      <div className="relative">
        <MessageSquare size={28} className="animate-pulse" />
        <Sparkles className="absolute -top-2 -right-2 text-yellow-300 w-4 h-4" />
      </div>
      <span className="hidden md:inline font-bold">שלחו לי הודעה בוואטסאפ</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
