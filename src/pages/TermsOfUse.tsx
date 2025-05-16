
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfUse: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f17] via-[#0a0d13] to-[#090c12] p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-[#111827]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gradient">תנאי שימוש</h1>
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="prose prose-invert max-w-none text-right">
          <p className="text-lg mb-4">האתר אינו מציע פונקציות תשלום או קופה - כל התקשורת היא באמצעות הגשת טופס.</p>
          
          <p className="mb-4">לא נוצר הסכם מחייב עד לאישור ידני עם הלקוח.</p>
          
          <p className="mb-4">כל הזכויות לעיצובים, תמונות, טקסטים ולוגואים המוצגים שייכים ל-Brandlify.</p>
          
          <p className="mb-4">משתמשים אינם רשאים להעתיק, לעשות שימוש חוזר, לגרד או לשחזר את תוכן האתר.</p>
          
          <p className="mb-4">Cloudflare משמש כשירות DNS ושכבת אבטחה; המבקר מסכים לניתוב נתונים דרך שרתי Cloudflare כחלק משימוש באינטרנט.</p>
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

export default TermsOfUse;
