
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center relative px-4 py-20">
      {/* Removed solid background overlay to allow starfield to be visible behind content */}
      
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="inline-block relative mb-8 animate-float">
          <img 
            src="/lovable-uploads/545b2919-a502-4994-8e4b-f826a13be127.png" 
            alt="Brandlify Logo" 
            className="w-24 h-24 md:w-32 md:h-32 mx-auto object-contain animate-[fadeIn_2s_ease-in-out]"
          />
          <div className="absolute -inset-4 bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red rounded-full opacity-30 blur-xl animate-pulse"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards]">
          <span className="text-gradient">יצירת מותג</span>
          <span className="block mt-2">שנראה בשווי מיליון דולר</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.7s_forwards]">
          עיצוב זהות חזותית נועזת, לוגו מותאם אישית, אתרים ודפי נחיתה מודרניים – 
          הכל מעוצב כדי להפוך את העסק שלך לבלתי נשכח ולמכור יותר.
        </p>

        <Button 
          className="gradient-btn text-xl px-8 py-6 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.9s_forwards]"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>דברו איתנו</span>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
