
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

    // Multiple reflow attempts with increasing delays for thorough rendering
    React.useEffect(() => {
      if (api) {
        console.log("Carousel API initialized, forcing reflow");
        
        const ensureVisibility = () => {
          // Force all slides to be visible
          const slides = document.querySelectorAll('[aria-roledescription="slide"]');
          slides.forEach((slide) => {
            if (slide instanceof HTMLElement) {
              slide.style.visibility = 'visible';
              slide.style.display = 'block';
              slide.style.opacity = '1';
              slide.style.height = 'auto';
              slide.style.minHeight = '700px';
              slide.style.overflow = 'visible';
              slide.style.position = 'relative';
            }
          });
          
          if (api && api.reInit) {
            api.reInit();
          }
        };
        
        // Series of reflows with increasing delays
        setTimeout(ensureVisibility, 100);
        setTimeout(ensureVisibility, 300);
        setTimeout(ensureVisibility, 600);
        setTimeout(ensureVisibility, 1000);
      }
    }, [api]);

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

      // Enhanced slide change handler for better visibility
      api.on("select", () => {
        console.log("Carousel slide changed");
        
        // Multiple attempts to ensure visibility with increasing delays
        const makeVisible = () => {
          // Force all items to be visible immediately
          const slides = document.querySelectorAll('[aria-roledescription="slide"]');
          slides.forEach((slide) => {
            if (slide instanceof HTMLElement) {
              slide.style.visibility = 'visible';
              slide.style.display = 'block';
              slide.style.opacity = '1';
              slide.style.height = 'auto';
              slide.style.minHeight = '700px';
              slide.style.overflow = 'visible';
              slide.style.position = 'relative';
            }
          });
          
          if (api && api.reInit) {
            api.reInit();
          }
        };
        
        // Multiple visibility enforcement with increasing delays
        setTimeout(makeVisible, 50);
        setTimeout(makeVisible, 150);
        setTimeout(makeVisible, 300);
        setTimeout(makeVisible, 500);
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
          className={cn("relative min-h-[700px]", className)}
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
