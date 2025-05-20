
import * as React from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { enhanceSlideVisibility, getCarouselViewport } from "@/lib/carousel-utils";

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
    // Exit early if API is not available
    if (!api) return;
    
    // Force all slides to be visible with explicit styling
    const slides = document.querySelectorAll('[aria-roledescription="slide"]');
    const currentSlideIndex = api.selectedScrollSnap() || 0;
    
    // Use the extracted utility function
    enhanceSlideVisibility(slides, currentSlideIndex);
    
    // Force carousel container to maintain height only if carouselRef exists and is valid
    if (carouselRef) {
      // Get viewport safely using our utility function
      const container = getCarouselViewport(carouselRef);
      
      // Only set styles if the container exists
      if (container) {
        container.style.minHeight = '700px';
        container.style.overflow = 'visible';
      }
    }
    
    // Re-initialize the carousel if possible
    if (api && api.reInit) {
      api.reInit();
    }
  };
}
