
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f17] via-[#0a0d13] to-[#090c12] p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-[#111827]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gradient">מדיניות פרטיות</h1>
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="prose prose-invert max-w-none text-right">
          <p className="text-lg mb-4">האתר (Brandlify) אוסף מידע אישי ממשתמשים המגישים טפסי יצירת קשר: שם, טלפון, אימייל.</p>
          
          <p className="mb-4">הטפסים מטופלים באמצעות Make, והנתונים מאוחסנים ב-Airtable.</p>
          
          <p className="mb-4">הנתונים אינם משותפים עם צד שלישי כלשהו למעט כלים הנדרשים ישירות לניהול לידים.</p>
          
          <p className="mb-4">משתמשים רשאים לבקש לצפות, לעדכן או למחוק את הנתונים האישיים שלהם.</p>
          
          <p className="mb-4">Brandlify משתמש בעוגיות ושירותים חיצוניים כגון:</p>
          
          <ul className="list-disc mr-8 space-y-2">
            <li>Facebook Pixel</li>
            <li>TikTok Pixel</li>
            <li>Google Analytics</li>
            <li>אינטגרציות צד שלישי נוספות באמצעות Make ו-Cloudflare</li>
          </ul>
          
          <p className="mt-4">המשתמש מסכים לאחסון וטיפול בנתונים שלו כפי שתואר.</p>
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

export default PrivacyPolicy;
