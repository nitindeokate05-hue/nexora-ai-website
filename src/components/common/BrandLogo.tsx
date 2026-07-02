import { Link } from "react-router-dom"

import { ROUTES } from "@/constants/routes"
import { cn } from "@/utils/cn"

type BrandLogoProps = {
  compact?: boolean
  className?: string
  imageClassName?: string
}

export function BrandLogo({ compact = false, className, imageClassName }: BrandLogoProps) {
  return (
    <Link
      aria-label="Nexora AI home"
      className={cn(
        "focus-ring group relative inline-flex shrink-0 items-center rounded-2xl p-1 transition-transform hover:scale-[1.015]",
        className,
      )}
      to={ROUTES.home}
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-electric-500/12 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
      <img
        alt="Nexora AI"
        className={cn(
          "relative h-14 w-auto max-w-[5.3rem] shrink-0 rounded-xl object-contain drop-shadow-[0_0_18px_rgb(0_167_255_/_28%)] sm:h-16 sm:max-w-[6rem] xl:h-20 xl:max-w-[7.5rem]",
          compact && "h-11 max-w-[4.2rem] sm:h-12 sm:max-w-[4.5rem]",
          imageClassName,
        )}
        decoding="async"
        height="427"
        sizes="(max-width: 640px) 72px, 96px"
        src="/nexora-ai-official-logo-320.png"
        srcSet="/nexora-ai-official-logo-320.png 320w, /nexora-ai-official-logo-640.png 640w"
        width="640"
      />
    </Link>
  )
}
