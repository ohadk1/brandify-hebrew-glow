
import * as React from "react"
import { cn } from "@/lib/utils"
import { CarouselContext, type CarouselProps } from "./carousel-context"
import { useResponsiveCarousel } from "@/hooks/use-responsive-carousel"

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
    const {
      emblaRef: carouselRef,
      emblaApi: api,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext
    } = useResponsiveCarousel(opts);

    // Update external API reference if provided
    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    // Handle keyboard navigation
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
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
