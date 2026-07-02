import { useEffect, useRef, useState } from "react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/utils/cn"

type AnimatedStatProps = {
  value: number
  suffix?: string
  label: string
  icon?: LucideIcon
  className?: string
}

export function AnimatedStat({ value, suffix = "", label, icon: Icon, className }: AnimatedStatProps) {
  const [display, setDisplay] = useState(`0${suffix}`)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    const setFinalValue = () => setDisplay(`${value}${suffix}`)

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFinalValue()
      return
    }

    let frameId = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) {
        return
      }

      const start = performance.now()
      const duration = 850
      const tick = (time: number) => {
        const progress = Math.min((time - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(`${Math.round(value * eased)}${suffix}`)
        if (progress < 1) {
          frameId = requestAnimationFrame(tick)
        }
      }

      frameId = requestAnimationFrame(tick)
      observer.disconnect()
    })

    observer.observe(element)

    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
    }
  }, [suffix, value])

  return (
    <div
      className={cn("rounded-2xl border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-xl", className)}
      ref={ref}
    >
      {Icon ? <Icon className="mb-3 size-7 text-electric-400" /> : null}
      <p className="font-heading text-3xl font-semibold text-foreground">{display}</p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
    </div>
  )
}
