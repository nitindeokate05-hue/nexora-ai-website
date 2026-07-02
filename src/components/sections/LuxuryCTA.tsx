import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/sections/Reveal"
import { ROUTES } from "@/constants/routes"

type LuxuryCTAProps = {
  title?: string
  description?: string
}

export function LuxuryCTA({
  title = "Ready to architect your next intelligent system?",
  description = "Book a strategy call and turn automation, data, cloud, and enterprise software into a measurable operating advantage.",
}: LuxuryCTAProps) {
  return (
    <section className="container-shell section-spacing">
      <Reveal>
        <Card className="relative overflow-hidden p-8 md:p-12" variant="obsidian">
          <div className="aurora-field opacity-60" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric-400">
                Enterprise AI Strategy
              </p>
              <h2 className="font-heading text-3xl font-semibold md:text-5xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                {description}
              </p>
            </div>
            <Button asChild size="xl" variant="gradient">
              <Link to={ROUTES.booking}>
                Start the Conversation
                <ArrowRight className="size-5" />
              </Link>
            </Button>
          </div>
        </Card>
      </Reveal>
    </section>
  )
}
