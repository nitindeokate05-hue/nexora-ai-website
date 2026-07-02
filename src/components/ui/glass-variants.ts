import { cva } from "class-variance-authority"

export const glassVariants = cva(
  "rounded-2xl border border-white/10 bg-white/8 text-foreground shadow-card backdrop-blur-2xl",
  {
    variants: {
      intensity: {
        subtle: "bg-white/5",
        default: "bg-white/8",
        strong: "bg-white/12",
      },
      glow: {
        none: "",
        blue: "shadow-glow",
        purple: "shadow-[var(--shadow-purple-glow)]",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      intensity: "default",
      glow: "none",
      padding: "md",
    },
  },
)
