
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Accessibility: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f17] via-[#0a0d13] to-[#090c12] p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-[#111827]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gradient">הצהרת נגישות</h1>
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="prose prose-invert max-w-none text-right">
          <p className="text-lg mb-4">Brandlify שואפת לעמוד בתקן הנגישות הישראלי IS 5568, המבוסס על WCAG 2.1 AA.</p>
          
          <p className="mb-4">שיפורי נגישות הינם תהליך מתמשך.</p>
          
          <p className="mb-4">אם למבקר יש בעיות נגישות, הוא יכול ליצור קשר עם Brandlify דרך WhatsApp או טלפון ולקבל עזרה באופן ידני.</p>
          
          <p className="mb-4">אנו משקיעים מאמצים רבים להנגיש את האתר ומוכנים לבצע התאמות בתוכן במידת הצורך.</p>
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

export default Accessibility;
