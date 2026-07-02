import { useEffect, useRef, useState, type ReactNode } from "react"

type LazySectionProps = {
  children: ReactNode
  className?: string
  minHeight?: string
  rootMargin?: string
}

export function LazySection({
  children,
  className = "",
  minHeight = "24rem",
  rootMargin = "0px",
}: LazySectionProps) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div className={className} ref={ref} style={!visible ? { minHeight } : undefined}>
      {visible ? children : null}
    </div>
  )
}
