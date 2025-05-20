
/**
 * Applies visibility styles to carousel slides with extra emphasis on the current slide
 * 
 * @param slides The HTML slides to enhance
 * @param currentIndex The index of the currently selected slide
 */
export function enhanceSlideVisibility(
  slides: NodeListOf<Element>,
  currentIndex: number
) {
  if (!slides || slides.length === 0) {
    console.log('No slides found to enhance');
    return;
  }
  
  console.log(`Enhancing ${slides.length} slides, current index: ${currentIndex}`);
  
  slides.forEach((slide, idx) => {
    if (slide instanceof HTMLElement) {
      // Extra emphasis on current slide
      const zIndex = idx === currentIndex ? 30 : 10;
      const opacity = idx === currentIndex ? 1 : 0.9;
      
      // Apply critical visibility styles directly
      slide.style.visibility = 'visible';
      slide.style.display = 'block';
      slide.style.opacity = String(opacity);
      slide.style.height = 'auto';
      slide.style.minHeight = '700px';
      slide.style.overflow = 'visible';
      slide.style.position = 'relative';
      slide.style.zIndex = String(zIndex);
      
      // Add debugging attributes to help trace rendering
      slide.setAttribute('data-slide-index', String(idx));
      slide.setAttribute('data-is-current', String(idx === currentIndex));
      
      if (idx === currentIndex) {
        console.log(`Enhanced current slide ${idx} with z-index: ${zIndex}`);
      }
    }
  });
}

/**
 * Safely gets the viewport element from an Embla carousel reference
 * This helps with TypeScript compatibility
 */
export function getCarouselViewport(ref: any): HTMLElement | null {
  if (!ref) return null;
  
  try {
    // Handle both direct HTMLElements and Embla refs
    if (ref instanceof HTMLElement) return ref;
    if (ref.current && ref.current instanceof HTMLElement) return ref.current;
    
    // For Embla ref objects, safely cast
    const element = ref.current;
    if (element instanceof HTMLElement) {
      return element;
    }
    
    return null;
  } catch (e) {
    console.error("Failed to access carousel viewport:", e);
    return null;
  }
}
