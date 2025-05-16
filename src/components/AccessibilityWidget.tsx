
import React, { useEffect, useState } from 'react';
import { 
  Accessibility, 
  TextCursor, 
  Eye, 
  Underline, 
  Sun, 
  Moon, 
  ArrowUp, 
  ArrowDown, 
  Play,
  Pause, 
  RotateCcw,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckedState } from "@radix-ui/react-checkbox";

const AccessibilityWidget: React.FC = () => {
  // Accessibility settings
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);

  // When settings change, apply them to the document
  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize * 100}%`;
    
    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add('high-contrast-mode');
    } else {
      document.documentElement.classList.remove('high-contrast-mode');
    }
    
    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
    
    // Apply underlined links
    if (underlineLinks) {
      document.documentElement.classList.add('underline-links');
    } else {
      document.documentElement.classList.remove('underline-links');
    }
    
    // Apply keyboard navigation
    if (keyboardNavigation) {
      document.documentElement.classList.add('keyboard-navigation');
    } else {
      document.documentElement.classList.remove('keyboard-navigation');
    }
    
    // Apply paused animations
    if (pauseAnimations) {
      document.documentElement.classList.add('paused-animations');
    } else {
      document.documentElement.classList.remove('paused-animations');
    }
  }, [fontSize, highContrast, darkMode, underlineLinks, keyboardNavigation, pauseAnimations]);

  // Load settings from localStorage on component mount
  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem('accessibility-settings');
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        setFontSize(settings.fontSize || 1);
        setHighContrast(settings.highContrast || false);
        setDarkMode(settings.darkMode || false);
        setUnderlineLinks(settings.underlineLinks || false);
        setKeyboardNavigation(settings.keyboardNavigation || false);
        setPauseAnimations(settings.pauseAnimations || false);
      }
    } catch (error) {
      console.error('Error loading accessibility settings:', error);
    }
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem('accessibility-settings', JSON.stringify({
        fontSize,
        highContrast,
        darkMode,
        underlineLinks,
        keyboardNavigation,
        pauseAnimations
      }));
    } catch (error) {
      console.error('Error saving accessibility settings:', error);
    }
  }, [fontSize, highContrast, darkMode, underlineLinks, keyboardNavigation, pauseAnimations]);

  // Reset all settings to default
  const resetSettings = () => {
    setFontSize(1);
    setHighContrast(false);
    setDarkMode(false);
    setUnderlineLinks(false);
    setKeyboardNavigation(false);
    setPauseAnimations(false);
  };

  // Increase font size
  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      setFontSize(prev => Math.min(prev + 0.1, 1.5));
    }
  };

  // Decrease font size
  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      setFontSize(prev => Math.max(prev - 0.1, 0.8));
    }
  };

  // Handle checkbox change with CheckedState type
  const handleCheckboxChange = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    return (checked: CheckedState) => {
      if (checked === true || checked === false) {
        setter(checked);
      }
    };
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="rounded-full p-3 w-14 h-14 flex items-center justify-center bg-blue-500 hover:bg-blue-600 shadow-lg focus:ring-2 focus:ring-blue-300 transition-all"
            aria-label="אפשרויות נגישות"
            title="אפשרויות נגישות"
          >
            <Accessibility className="h-7 w-7" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-right text-xl mb-6 flex items-center justify-between">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
              <span>אפשרויות נגישות</span>
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col gap-6">
            {/* Font Size Controls */}
            <div className="bg-secondary/20 rounded-lg p-4">
              <h3 className="font-bold mb-3 text-right">גודל טקסט</h3>
              <div className="flex items-center justify-between gap-4">
                <Button 
                  onClick={decreaseFontSize} 
                  disabled={fontSize <= 0.8}
                  variant="outline"
                  aria-label="הקטן גודל טקסט"
                  className="flex-1"
                >
                  <ArrowDown className="h-4 w-4 ml-2" />
                  <span>הקטן</span>
                </Button>
                <div className="px-3 py-1 bg-secondary rounded-md min-w-[50px] text-center">
                  {Math.round(fontSize * 100)}%
                </div>
                <Button 
                  onClick={increaseFontSize} 
                  disabled={fontSize >= 1.5}
                  variant="outline"
                  aria-label="הגדל גודל טקסט"
                  className="flex-1"
                >
                  <ArrowUp className="h-4 w-4 ml-2" />
                  <span>הגדל</span>
                </Button>
              </div>
            </div>

            {/* Display Settings */}
            <div className="bg-secondary/20 rounded-lg p-4">
              <h3 className="font-bold mb-3 text-right">תצוגה</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse justify-end">
                  <Label htmlFor="high-contrast" className="text-right">ניגודיות גבוהה</Label>
                  <Checkbox 
                    id="high-contrast" 
                    checked={highContrast}
                    onCheckedChange={handleCheckboxChange(setHighContrast)}
                    aria-label="הפעל ניגודיות גבוהה"
                  />
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse justify-end">
                  <Label htmlFor="dark-mode" className="text-right">מצב כהה</Label>
                  <Checkbox 
                    id="dark-mode" 
                    checked={darkMode}
                    onCheckedChange={handleCheckboxChange(setDarkMode)}
                    aria-label="הפעל מצב כהה"
                  />
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse justify-end">
                  <Label htmlFor="underline-links" className="text-right">הדגש קישורים</Label>
                  <Checkbox 
                    id="underline-links" 
                    checked={underlineLinks}
                    onCheckedChange={handleCheckboxChange(setUnderlineLinks)}
                    aria-label="הדגש קישורים עם קו תחתון"
                  />
                </div>
              </div>
            </div>

            {/* Navigation & Animation Settings */}
            <div className="bg-secondary/20 rounded-lg p-4">
              <h3 className="font-bold mb-3 text-right">עזרי ניווט</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse justify-end">
                  <Label htmlFor="keyboard-navigation" className="text-right">ניווט מקלדת משופר</Label>
                  <Checkbox 
                    id="keyboard-navigation" 
                    checked={keyboardNavigation}
                    onCheckedChange={handleCheckboxChange(setKeyboardNavigation)}
                    aria-label="הפעל ניווט מקלדת משופר"
                  />
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse justify-end">
                  <Label htmlFor="pause-animations" className="text-right">השהה אנימציות</Label>
                  <Checkbox 
                    id="pause-animations" 
                    checked={pauseAnimations}
                    onCheckedChange={handleCheckboxChange(setPauseAnimations)}
                    aria-label="השהה אנימציות"
                  />
                </div>
              </div>
            </div>
            
            {/* Reset Button */}
            <Button 
              onClick={resetSettings} 
              className="mt-4 w-full"
              variant="destructive"
              aria-label="אפס הגדרות נגישות"
            >
              <RotateCcw className="h-4 w-4 ml-2" />
              <span>איפוס הגדרות</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AccessibilityWidget;
