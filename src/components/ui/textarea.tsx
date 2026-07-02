import * as React from "react"

import { cn } from "@/utils/cn"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full resize-y rounded-xl border border-input bg-white/6 px-4 py-3 text-sm text-foreground shadow-inner shadow-black/10 transition-all placeholder:text-muted-foreground hover:border-white/20 focus:border-electric-400 focus:ring-2 focus:ring-ring/35 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/30",
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
