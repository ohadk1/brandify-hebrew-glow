
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/972522174188?text=היי%2C%20אני%20רוצה%20לקבל%20הצעה%20למיתוג%20העסק%20שלי"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 animate-[fadeIn_0.8s_ease-out_1.5s_both] hover:shadow-[0_0_25px_rgba(0,255,127,0.6)]"
    >
      <MessageCircle size={24} className="animate-pulse" />
      <span className="hidden md:inline font-medium">צור קשר בוואטסאפ עכשיו</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
