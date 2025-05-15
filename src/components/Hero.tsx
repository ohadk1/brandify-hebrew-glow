
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center relative px-4 py-20">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-80 z-0"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="inline-block relative mb-8 animate-float">
          <svg 
            className="w-24 h-24 md:w-32 md:h-32 mx-auto" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              stroke="url(#logoGradient)" 
              strokeWidth="4" 
              className="opacity-0 animate-[drawCircle_2s_ease-in-out_forwards]"
            />
            <path 
              d="M30 50 L45 65 L70 35" 
              stroke="url(#logoGradient)" 
              strokeWidth="6" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="opacity-0 animate-[drawCheck_1s_ease-in-out_0.8s_forwards]"
            />
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="50%" stopColor="#8F00FF" />
                <stop offset="100%" stopColor="#FF3C3C" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute -inset-4 bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red rounded-full opacity-30 blur-xl animate-pulse"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
          <span className="text-gradient">BRANDLIFY</span>
          <span className="block mt-2"> – מיתוג ובניית אתרים</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
          אנחנו מתמחים בעיצוב לוגו לעסק, בניית אתר תדמית וחבילת מיתוג לעסקים קטנים. 
          השילוב המושלם בין יצירתיות, טכנולוגיה ונראות מתקדמת – יעזור לעסק שלך לבלוט מעל המתחרים.
        </p>

        <Button 
          className="gradient-btn text-xl px-8 py-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards]"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>אני כאן בשביל העסק שלך 🚀</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
