import * as React from "react"

import { cn } from "@/utils/cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(
        "h-12 w-full rounded-xl border border-input bg-white/6 px-4 text-sm text-foreground shadow-inner shadow-black/10 transition-all placeholder:text-muted-foreground hover:border-white/20 focus:border-electric-400 focus:ring-2 focus:ring-ring/35 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/30",
        className,
      )}
      {...props}
    />
  )
}

export { Input }
