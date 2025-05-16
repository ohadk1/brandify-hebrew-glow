
import React from 'react';
import { Button } from '@/components/ui/button';
import { X, Accessibility } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AccessibilityPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f17] via-[#0a0d13] to-[#090c12] p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-[#111827]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10" role="main" aria-labelledby="accessibility-title">
        <div className="flex justify-between items-center mb-8">
          <h1 id="accessibility-title" className="text-2xl md:text-3xl font-bold text-gradient">הצהרת נגישות</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => navigate(-1)} 
            className="rounded-full"
            aria-label="חזור לעמוד קודם"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
        
        <div className="prose prose-invert max-w-none text-right">
          <div className="flex items-center justify-end mb-6">
            <Accessibility className="ml-3 h-10 w-10 text-brandlify-cyan" aria-hidden="true" />
            <p className="text-xl font-bold">אתר זה נגיש בהתאם לדרישות תקן הנגישות הישראלי IS 5568</p>
          </div>
          
          <p className="text-lg mb-4">אנו ב-Brandlify מחויבים להנגיש את האתר שלנו בהתאם לתקן הנגישות הישראלי IS 5568, המבוסס על WCAG 2.1 ברמה AA.</p>
          
          <h2 className="text-xl mt-6 mb-3 font-semibold">כיצד אנחנו מיישמים נגישות:</h2>
          
          <ul className="list-disc mr-6 mb-4 space-y-2">
            <li>שימוש בתוכנת Nagich המספקת תפריט נגישות מקיף</li>
            <li>סימון תמונות עם תיאורים עבור קוראי מסך</li>
            <li>מבנה אתר היררכי וסמנטי</li>
            <li>ניגודיות צבעים ראויה והתאמות גופן</li>
            <li>תמיכה בניווט מקלדת</li>
            <li>טפסים נגישים עם תוויות ברורות</li>
          </ul>
          
          <p className="mb-4">שיפורי נגישות הינם תהליך מתמשך ואנו פועלים לשיפור חווית המשתמש עבור כולם.</p>
          
          <h2 className="text-xl mt-6 mb-3 font-semibold">סיוע בנושאי נגישות:</h2>
          
          <p className="mb-4">אם נתקלת בבעיות נגישות באתר, אנא צור איתנו קשר דרך WhatsApp או טלפון ואנו נעזור לך באופן אישי.</p>
          
          <p className="mb-4">אנו משקיעים מאמצים רבים להנגיש את האתר ומוכנים לבצע התאמות בתוכן במידת הצורך.</p>
          
          <div className="mt-6 p-4 border border-brandlify-cyan/30 rounded-lg bg-brandlify-cyan/5">
            <h3 className="font-semibold mb-2">שימוש בתפריט הנגישות:</h3>
            <p>לחצו על סמל הנגישות המופיע בפינת המסך כדי להפעיל את תפריט הנגישות, המאפשר שינוי גודל טקסט, ניגודיות צבעים, הדגשת קישורים, השבתת אנימציות ועוד.</p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            onClick={() => navigate(-1)}
            className="gradient-btn text-lg px-6 py-4"
            aria-label="חזרה לעמוד הראשי"
          >
            <span>חזרה לעמוד הראשי</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityPage;
