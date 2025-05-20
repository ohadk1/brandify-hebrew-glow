
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

/**
 * Custom hook to enforce visibility of carousel slides
 * 
 * @param api The embla carousel API
 * @param carouselRef Reference to the carousel container element
 */
export function useCarouselVisibility(
  api: ReturnType<typeof useEmblaCarousel>[1],
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
) {
  React.useEffect(() => {
    if (!api) return;
    
    console.log("Carousel API initialized, forcing reflow");
    
    const forceVisibility = () => {
      ensureAllSlidesVisible();
    };
    
    // Initial call
    forceVisibility();
    
    // Setup listeners for slide changes
    api.on("select", () => {
      console.log("Carousel slide changed");
      handleSlideChange();
    });
    
    // Staggered visibility enforcement to handle various timing scenarios
    const timeouts = [100, 300, 600, 1000].map(delay => 
      setTimeout(forceVisibility, delay)
    );
    
    return () => {
      // Clean up timeouts
      timeouts.forEach(timeout => clearTimeout(timeout));
      
      // Remove event listener if api still exists
      if (api) {
        api.off("select", handleSlideChange);
      }
    };
  }, [api, carouselRef]);
  
  // Handler for slide changes
  const handleSlideChange = () => {
    if (!api) return;
    
    // Staggered enforcement for reliable rendering
    [50, 150, 300, 500, 1000].forEach(delay => {
      setTimeout(ensureAllSlidesVisible, delay);
    });
  };
  
  // Core function to ensure slide visibility
  const ensureAllSlidesVisible = () => {
    // Force all slides to be visible with explicit styling
    const slides = document.querySelectorAll('[aria-roledescription="slide"]');
    const currentSlideIndex = api?.selectedScrollSnap() || 0;
    
    slides.forEach((slide, idx) => {
      if (slide instanceof HTMLElement) {
        // Extra emphasis on current slide
        const zIndex = idx === currentSlideIndex ? 20 : 10;
        
        slide.style.visibility = 'visible';
        slide.style.display = 'block';
        slide.style.opacity = '1';
        slide.style.height = 'auto';
        slide.style.minHeight = '700px';
        slide.style.overflow = 'visible';
        slide.style.position = 'relative';
        slide.style.zIndex = String(zIndex);
        
        console.log(`Applied visibility styles to slide ${idx}`);
      }
    });
    
    // Force carousel container to maintain height
    if (carouselRef) {
      // Properly cast the EmblaViewportRefType to HTMLElement
      const container = carouselRef as unknown as HTMLElement;
      container.style.minHeight = '700px';
      container.style.overflow = 'visible';
    }
    
    // Re-initialize the carousel if possible
    if (api && api.reInit) {
      api.reInit();
    }
  };
}
