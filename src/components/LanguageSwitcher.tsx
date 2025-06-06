
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Flag } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="flex gap-2">
        <Button
          variant={language === 'he' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('he')}
          className={`flex items-center gap-2 ${
            language === 'he' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-white/10 hover:bg-white/20 text-white border-white/30'
          }`}
        >
          <span className="text-lg">🇮🇱</span>
          <span className="text-sm">עברית</span>
        </Button>
        
        <Button
          variant={language === 'en' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-2 ${
            language === 'en' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-white/10 hover:bg-white/20 text-white border-white/30'
          }`}
        >
          <span className="text-lg">🇺🇸</span>
          <span className="text-sm">English</span>
        </Button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
