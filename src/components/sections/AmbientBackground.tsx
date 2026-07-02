import { useEffect } from "react"

export function AmbientBackground() {
  useEffect(() => {
    let frameId = 0
    const updateMouse = (event: PointerEvent) => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`)
        document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`)
        frameId = 0
      })
    }

    window.addEventListener("pointermove", updateMouse, { passive: true })
    return () => {
      window.removeEventListener("pointermove", updateMouse)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <>
      <div aria-hidden="true" className="noise-overlay" />
    </>
  )
}
