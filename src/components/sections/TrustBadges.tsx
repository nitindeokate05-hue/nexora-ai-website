import { Reveal } from "@/components/sections/Reveal"
import { trustBadges } from "@/data/site"

export function TrustBadges() {
  return (
    <section className="container-shell py-12" aria-labelledby="trust-heading">
      <h2 className="sr-only" id="trust-heading">
        Global trust badges
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {trustBadges.map((badge) => (
          <Reveal key={badge.title}>
            <div className="glass-surface flex items-center gap-3 rounded-xl px-4 py-3">
              <badge.icon className="size-5 text-electric-400" />
              <span className="text-sm font-medium text-foreground">{badge.title}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
