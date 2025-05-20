
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"
import { CarouselContext, type CarouselProps } from "./carousel-context"

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts = { loop: true },
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    // Enhanced visibility enforcement with more aggressive approach
    React.useEffect(() => {
      if (api) {
        console.log("Carousel API initialized, forcing reflow");
        
        const ensureAllSlidesVisible = () => {
          // Force all slides to be visible with explicit styling
          const slides = document.querySelectorAll('[aria-roledescription="slide"]');
          slides.forEach((slide, idx) => {
            if (slide instanceof HTMLElement) {
              slide.style.visibility = 'visible';
              slide.style.display = 'block';
              slide.style.opacity = '1';
              slide.style.height = 'auto';
              slide.style.minHeight = '700px';
              slide.style.overflow = 'visible';
              slide.style.position = 'relative';
              slide.style.zIndex = '10';
              console.log(`Applied visibility styles to slide ${idx}`);
            }
          });
          
          // Force carousel container to maintain height
          const container = carouselRef.current;
          if (container instanceof HTMLElement) {
            container.style.minHeight = '700px';
            container.style.overflow = 'visible';
          }
          
          if (api && api.reInit) {
            api.reInit();
          }
        };
        
        // Multiple reflows with increasing delays for thorough rendering
        // This approach ensures slides are visible even after DOM updates
        setTimeout(ensureAllSlidesVisible, 100);
        setTimeout(ensureAllSlidesVisible, 300);
        setTimeout(ensureAllSlidesVisible, 600);
        setTimeout(ensureAllSlidesVisible, 1000);
      }
    }, [api, carouselRef]);

    const onSelect = React.useCallback((emblaApi: NonNullable<ReturnType<typeof useEmblaCarousel>[1]>) => {
      if (!emblaApi) {
        return
      }

      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)

      // Significantly enhanced slide change handler for better visibility
      api.on("select", () => {
        console.log("Carousel slide changed");
        
        // Aggressive approach to visibility enforcement
        const makeAllSlidesVisible = () => {
          // Force all items to be visible with critical styling
          const slides = document.querySelectorAll('[aria-roledescription="slide"]');
          const currentSlideIndex = api.selectedScrollSnap();
          
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
              
              console.log(`Enhanced visibility for slide ${idx}, current: ${idx === currentSlideIndex}`);
            }
          });
          
          if (api && api.reInit) {
            api.reInit();
          }
        };
        
        // Staggered visibility enforcement to handle various render timing scenarios
        setTimeout(makeAllSlidesVisible, 50);
        setTimeout(makeAllSlidesVisible, 150);
        setTimeout(makeAllSlidesVisible, 300);
        setTimeout(makeAllSlidesVisible, 500);
        setTimeout(makeAllSlidesVisible, 1000);
      });

      return () => {
        api?.off("select", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative min-h-[700px] overflow-visible", className)}
          role="region"
          aria-roledescription="carousel"
          style={{ minHeight: '700px', overflow: 'visible' }}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"

export { Carousel }
