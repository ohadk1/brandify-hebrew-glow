
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
  
  slides.forEach((slide, idx) => {
    if (slide instanceof HTMLElement) {
      // Extra emphasis on current slide
      const zIndex = idx === currentIndex ? 20 : 10;
      
      slide.style.visibility = 'visible';
      slide.style.display = 'block';
      slide.style.opacity = '1';
      slide.style.height = 'auto';
      slide.style.minHeight = '700px';
      slide.style.overflow = 'visible';
      slide.style.position = 'relative';
      slide.style.zIndex = String(zIndex);
      
      console.log(`Enhanced visibility for slide ${idx}, current: ${idx === currentIndex}`);
    }
  });
}
