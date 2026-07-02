import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

import { Button } from "@/components"
import { NeuralBackground } from "@/components/sections/NeuralBackground"
import { Reveal } from "@/components/sections/Reveal"
import { ROUTES } from "@/constants"
import { cn } from "@/utils"

type PremiumHeroProps = {
  eyebrow: string
  title: string
  description: string
  align?: "center" | "split"
  children?: ReactNode
  className?: string
}

export function PremiumHero({
  eyebrow,
  title,
  description,
  align = "split",
  children,
  className,
}: PremiumHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-white/8", className)}>
      <NeuralBackground />
      <div
        className={cn(
          "container-shell relative grid min-h-[68svh] items-center gap-12 py-24 md:py-32",
          align === "split" && "lg:grid-cols-[1.02fr_0.98fr]",
          align === "center" && "text-center",
        )}
      >
        <Reveal className={cn(align === "center" && "mx-auto max-w-5xl")}>
          <p className="mb-5 inline-flex rounded-full border border-electric-400/30 bg-electric-500/10 px-4 py-2 text-sm font-semibold text-electric-400 shadow-glow">
            {eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-normal text-foreground sm:text-5xl md:text-7xl md:leading-[1.02] xl:text-8xl">
            {title}
          </h1>
          <p
            className={cn(
              "mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl md:leading-9",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
          <div className={cn("mt-9 flex flex-col gap-3 sm:flex-row", align === "center" && "justify-center")}>
            <Button asChild size="xl" variant="gradient">
              <Link to={ROUTES.booking}>
                Book Strategy Call
                <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="glass">
              <Link to={ROUTES.services}>Explore Capabilities</Link>
            </Button>
          </div>
        </Reveal>
        {children ? <Reveal>{children}</Reveal> : null}
      </div>
    </section>
  )
}
