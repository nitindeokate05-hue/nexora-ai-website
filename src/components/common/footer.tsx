import type * as React from "react"

import { cn } from "@/utils/cn"

type FooterProps = React.ComponentProps<"footer"> & {
  brand?: React.ReactNode
  navigation?: React.ReactNode
  social?: React.ReactNode
  meta?: React.ReactNode
}

function Footer({
  brand,
  navigation,
  social,
  meta,
  className,
  ...props
}: FooterProps) {
  return (
    <footer
      data-slot="footer"
      className={cn("relative overflow-hidden border-t border-white/10 bg-navy-950/88", className)}
      {...props}
    >
      <div className="aurora-field opacity-35" />
      <div className="container-shell relative grid gap-10 py-14 md:grid-cols-[1fr_auto]">
        <div className="grid gap-4">
          {brand}
          {meta ? <div className="text-sm text-muted-foreground">{meta}</div> : null}
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          {navigation}
          {social}
        </div>
      </div>
    </footer>
  )
}

export { Footer }
