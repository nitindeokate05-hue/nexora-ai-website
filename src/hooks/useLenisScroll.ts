import { useEffect } from "react"

type LenisScrollOptions = {
  lerp?: number
  smoothWheel?: boolean
}

export function useLenisScroll(options?: LenisScrollOptions) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches
    if (prefersReducedMotion || isCoarsePointer) {
      return
    }

    let frameId = 0
    let cleanup = () => {}
    let cancelled = false
    let started = false

    const start = async () => {
      if (started) {
        return
      }
      started = true
      const { default: Lenis } = await import("lenis")
      if (cancelled) {
        return
      }

      const lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        ...options,
      })

      const raf = (time: number) => {
        lenis.raf(time)
        frameId = requestAnimationFrame(raf)
      }

      frameId = requestAnimationFrame(raf)
      cleanup = () => {
        cancelAnimationFrame(frameId)
        lenis.destroy()
      }
    }

    const startOnIntent = () => void start()

    window.addEventListener("wheel", startOnIntent, { once: true, passive: true })
    window.addEventListener("touchmove", startOnIntent, { once: true, passive: true })
    window.addEventListener("keydown", startOnIntent, { once: true })

    return () => {
      cancelled = true
      window.removeEventListener("wheel", startOnIntent)
      window.removeEventListener("touchmove", startOnIntent)
      window.removeEventListener("keydown", startOnIntent)
      cleanup()
    }
  }, [options])
}
