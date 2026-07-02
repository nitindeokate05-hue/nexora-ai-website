import { useEffect } from "react"

export function AmbientBackground() {
  useEffect(() => {
    const updateMouse = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`)
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`)
    }

    window.addEventListener("pointermove", updateMouse)
    return () => window.removeEventListener("pointermove", updateMouse)
  }, [])

  return (
    <>
      <div aria-hidden="true" className="noise-overlay" />
    </>
  )
}
