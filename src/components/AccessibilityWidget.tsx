
import React, { useEffect, useState } from 'react';
import { Accessibility } from 'lucide-react';

declare global {
  interface Window {
    nagishLi?: any;
    nagishLiScript?: {
      init: () => void;
    };
  }
}

const AccessibilityWidget: React.FC = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Check if the Nagich widget script has loaded successfully
    const checkWidgetLoaded = setInterval(() => {
      if (window.nagishLi || document.querySelector('.nagishli-container')) {
        setWidgetLoaded(true);
        clearInterval(checkWidgetLoaded);
      }
    }, 1000);

    // If Nagich widget hasn't loaded after 5 seconds, we'll show our own button
    const timeout = setTimeout(() => {
      clearInterval(checkWidgetLoaded);
    }, 5000);

    // Attempt to manually initialize the widget if the function exists
    if (window.nagishLiScript && typeof window.nagishLiScript.init === 'function') {
      window.nagishLiScript.init();
    }

    return () => {
      clearInterval(checkWidgetLoaded);
      clearTimeout(timeout);
    };
  }, []);

  const handleAccessibilityClick = () => {
    // If the Nagich widget is available but not visible, try to show it
    if (window.nagishLi && typeof window.nagishLi.toggleMenu === 'function') {
      window.nagishLi.toggleMenu();
    } else {
      // Fallback: Try to click the Nagich button if it exists
      const nagichButton = document.querySelector('.nagishli-btn');
      if (nagichButton && nagichButton instanceof HTMLElement) {
        nagichButton.click();
      } else {
        // If all else fails, alert the user that accessibility options aren't available
        alert('אפשרויות נגישות אינן זמינות כרגע. אנא נסה שוב מאוחר יותר.');
        
        // Try to reinitialize the widget
        if (window.nagishLiScript && typeof window.nagishLiScript.init === 'function') {
          window.nagishLiScript.init();
        }
      }
    }
  };

  return (
    <>
      {/* Our custom accessibility button that serves as a fallback or activator */}
      <button
        onClick={handleAccessibilityClick}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="אפשרויות נגישות"
        title="אפשרויות נגישות"
      >
        <Accessibility className="h-6 w-6" />
      </button>
      
      {/* Hidden container for the Nagich widget */}
      <div 
        id="accessibility-widget-container"
        className="sr-only" 
        aria-hidden="true" 
      />
    </>
  );
};

export default AccessibilityWidget;
