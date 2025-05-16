
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f17] via-[#0a0d13] to-[#090c12] p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-[#111827]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gradient">מדיניות עוגיות</h1>
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="prose prose-invert max-w-none text-right">
          <p className="text-lg mb-4">אתר האינטרנט של Brandlify משתמש בעוגיות ופיקסלים מ:</p>
          
          <ul className="list-disc mr-8 space-y-2">
            <li>Google Analytics</li>
            <li>Facebook Pixel</li>
            <li>TikTok Pixel</li>
            <li>סקריפטים מפלטפורמת Lovable</li>
          </ul>
          
          <p className="mt-4 mb-4">כלים אלה עוקבים אחר התנהגות המשתמש למטרות שיווק וניתוח.</p>
          
          <p className="mb-4">משתמשים יכולים להשבית עוגיות דרך הגדרות הדפדפן.</p>
          
          <p className="mb-4">האתר אינו מתקין עוגיות שאינן קשורות לפונקציונליות ללא אינטראקציה של המשתמש.</p>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            onClick={() => navigate(-1)}
            className="gradient-btn text-lg px-6 py-4"
          >
            <span>חזרה לעמוד הראשי</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
