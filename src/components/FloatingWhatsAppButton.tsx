
import React from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/972522174188?text=היי%2C%20רוצה%20למתג%20את%20העסק"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 animate-[fadeIn_0.8s_ease-out_1.5s_both] hover:shadow-[0_0_15px_rgba(0,255,0,0.6)]"
    >
      <MessageSquare size={24} className="animate-pulse" />
      <span className="hidden md:inline">שלחו לי הודעה בוואטסאפ</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
