import { useLocation } from "react-router-dom"
import type { ReactNode } from "react"

type PageTransitionProps = {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation()

  return (
    <div className="page-transition" key={location.pathname}>
      {children}
    </div>
  )
}
