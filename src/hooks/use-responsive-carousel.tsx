
import * as React from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { enhanceSlideVisibility, getCarouselViewport } from "@/lib/carousel-utils";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Custom hook to manage carousel responsiveness and visibility
 * 
 * @returns The embla carousel ref and API, along with additional status flags
 */
export function useResponsiveCarousel(options: Parameters<typeof useEmblaCarousel>[0] = { loop: true }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    axis: "x",
  });
  
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const isMobile = useIsMobile();
  
  // Track current slide index
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  // Function to properly style slides for visibility
  const forceSlideVisibility = React.useCallback(() => {
    if (!emblaRef || !emblaApi) return;
    
    const slides = document.querySelectorAll('[aria-roledescription="slide"]');
    if (!slides || slides.length === 0) return;
    
    // Use the current slide index if API is available, otherwise use the stored one
    const currentIdx = emblaApi ? emblaApi.selectedScrollSnap() : activeIndex;
    enhanceSlideVisibility(slides, currentIdx);
    
    // Safely access the viewport element
    const viewportElement = getCarouselViewport(emblaRef);
    if (viewportElement) {
      viewportElement.style.minHeight = '700px';
      viewportElement.style.overflow = 'visible';
    }
  }, [emblaRef, emblaApi, activeIndex]);
  
  // Update navigation button states
  const updateButtonStates = React.useCallback(() => {
    if (!emblaApi) return;
    
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);
  
  // Handle slide changes
  const onSlideChange = React.useCallback(() => {
    if (!emblaApi) return;
    
    updateButtonStates();
    
    // Apply staggered visibility enhancements after slide change
    [50, 200, 500].forEach(delay => {
      setTimeout(forceSlideVisibility, delay);
    });
  }, [emblaApi, updateButtonStates, forceSlideVisibility]);
  
  // Handle scroll operations
  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);
  
  // Listen for resize events to handle responsive changes
  React.useEffect(() => {
    const handleResize = () => {
      if (emblaApi) {
        emblaApi.reInit();
        forceSlideVisibility();
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [emblaApi, forceSlideVisibility]);
  
  // Setup on initial render and when API changes
  React.useEffect(() => {
    if (!emblaApi) return;
    
    // Initialize visibility when API becomes available
    updateButtonStates();
    forceSlideVisibility();
    setIsLoaded(true);
    
    // Register event listeners
    emblaApi.on("select", onSlideChange);
    emblaApi.on("reInit", onSlideChange);
    
    // Apply visibility enhancements at staggered intervals
    const timeouts = [100, 300, 600].map(delay => 
      setTimeout(forceSlideVisibility, delay)
    );
    
    return () => {
      emblaApi.off("select", onSlideChange);
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [emblaApi, onSlideChange, forceSlideVisibility, updateButtonStates]);
  
  // Extra effect specifically for mobile view
  React.useEffect(() => {
    if (isMobile) {
      forceSlideVisibility();
    }
  }, [isMobile, forceSlideVisibility]);
  
  return {
    emblaRef,
    emblaApi,
    canScrollPrev,
    canScrollNext,
    activeIndex,
    isLoaded,
    scrollPrev,
    scrollNext
  };
}
