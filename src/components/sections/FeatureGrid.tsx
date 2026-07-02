import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/sections/Reveal"
import type { IconItem } from "@/data/site"

type FeatureGridProps = {
  items: IconItem[]
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Reveal key={item.title}>
          <Card className="group h-full min-h-64 hover:border-electric-500/45" variant="glass">
            <CardHeader>
              <div className="mb-5 grid size-14 place-items-center rounded-2xl border border-electric-400/20 bg-electric-500/12 text-electric-400 shadow-glow transition-transform group-hover:scale-110 group-hover:rotate-3">
                <item.icon className="size-6" />
              </div>
              <CardTitle className="text-2xl">{item.title}</CardTitle>
              <CardDescription className="text-base leading-7">{item.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        </Reveal>
      ))}
    </div>
  )
}
