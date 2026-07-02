import { useEffect, useRef, type ComponentPropsWithoutRef } from "react"

import { cn } from "@/utils/cn"

export function Reveal({ children, className, ...props }: ComponentPropsWithoutRef<"div">) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.dataset.revealed = "true"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.dataset.revealed = "true"
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -80px" },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={cn("reveal-on-scroll", className)} ref={ref} {...props}>
      {children}
    </div>
  )
}
