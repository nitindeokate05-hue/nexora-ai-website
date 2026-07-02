import { Reveal } from "@/components/sections/Reveal"
import { cn } from "@/utils/cn"

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  level?: "h1" | "h2"
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  level = "h2",
}: SectionHeaderProps) {
  const Heading = level

  return (
    <Reveal className={cn("mx-auto mb-12 max-w-4xl text-center", className)}>
      {eyebrow ? (
        <p className="mb-4 inline-flex rounded-full border border-electric-400/20 bg-electric-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-electric-400 shadow-glow">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-heading text-4xl font-semibold leading-[1.08] tracking-normal text-foreground md:text-6xl md:leading-[1.04]">
        {title}
      </Heading>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg md:leading-9">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
