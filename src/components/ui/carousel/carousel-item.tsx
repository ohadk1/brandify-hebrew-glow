
import * as React from "react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./carousel-context"

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => {
  const { orientation } = useCarousel()
  
  // Create a combined style with the important visibility properties
  const combinedStyle = {
    visibility: 'visible',
    opacity: 1,
    display: 'block',
    position: 'relative',
    minHeight: '700px',
    height: 'auto',
    overflow: 'visible',
    ...style
  };

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        "visible opacity-100 block min-h-[700px] h-auto overflow-visible relative",
        className
      )}
      style={combinedStyle}
      {...props}
    />
  )
})
CarouselItem.displayName = "CarouselItem"

export { CarouselItem }
