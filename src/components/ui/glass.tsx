import * as React from "react"
import type { VariantProps } from "class-variance-authority"

import { glassVariants } from "@/components/ui/glass-variants"
import { cn } from "@/utils/cn"

function GlassPanel({
  className,
  intensity,
  glow,
  padding,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof glassVariants>) {
  return (
    <div
      data-slot="glass-panel"
      className={cn(glassVariants({ intensity, glow, padding, className }))}
      {...props}
    />
  )
}

export { GlassPanel }
