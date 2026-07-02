import { cva } from "class-variance-authority"

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-semibold tracking-normal whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-glow hover:bg-electric-400 hover:-translate-y-0.5",
        gradient:
          "gradient-motion bg-[image:var(--gradient-luxury)] text-white shadow-glow hover:-translate-y-0.5 hover:shadow-elevated",
        glass:
          "border-white/12 bg-white/8 text-foreground backdrop-blur-xl hover:-translate-y-0.5 hover:border-electric-400/35 hover:bg-white/14 hover:shadow-glow",
        outline:
          "border-electric-500/45 bg-transparent text-electric-400 hover:-translate-y-0.5 hover:border-electric-400 hover:bg-electric-500/12 hover:shadow-glow",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-navy-700",
        ghost:
          "text-muted-foreground hover:bg-white/8 hover:text-foreground",
        destructive:
          "bg-destructive/12 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/30",
        link: "h-auto px-0 text-electric-400 underline-offset-4 hover:text-electric-500 hover:underline",
      },
      size: {
        default: "h-11 gap-2 px-5",
        xs: "h-7 gap-1.5 rounded-md px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-2 rounded-md px-4 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2.5 px-6 text-base",
        xl: "h-14 gap-3 rounded-xl px-8 text-base",
        icon: "size-11",
        "icon-xs":
          "size-7 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 rounded-md",
        "icon-lg": "size-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)
