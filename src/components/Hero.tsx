
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center relative px-4 py-20">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-80 z-0"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="inline-block relative mb-8 animate-float">
          <img 
            src="/lovable-uploads/545b2919-a502-4994-8e4b-f826a13be127.png" 
            alt="Brandlify Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto object-contain animate-[fadeIn_2s_ease-in-out] drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]"
          />
          <div className="absolute -inset-8 bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red rounded-full opacity-40 blur-xl animate-pulse"></div>
          <div className="absolute -inset-16 bg-gradient-to-r from-brandlify-cyan to-brandlify-purple rounded-full opacity-20 blur-2xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red">BRANDLIFY</span>
          <span className="block mt-4 text-4xl md:text-5xl"> – מיתוג ובניית אתרים</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
          אנחנו מתמחים בעיצוב לוגו לעסק, בניית אתר תדמית וחבילת מיתוג לעסקים קטנים. 
          <span className="block mt-4 text-white font-medium">השילוב המושלם בין יצירתיות, טכנולוגיה ונראות מתקדמת – יעזור לעסק שלך לבלוט מעל המתחרים.</span>
        </p>

        <Button 
          className="gradient-btn text-xl px-8 py-7 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards] shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_30px_rgba(143,0,255,0.6)]"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <Sparkles className="mr-2 h-5 w-5" />
          <span>🚀 דברו איתנו עכשיו</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
