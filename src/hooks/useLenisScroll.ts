import { useEffect } from "react"
import Lenis from "lenis"

type LenisScrollOptions = ConstructorParameters<typeof Lenis>[0]

export function useLenisScroll(options?: LenisScrollOptions) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      ...options,
    })

    let frameId = 0

    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }

    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [options])
}
