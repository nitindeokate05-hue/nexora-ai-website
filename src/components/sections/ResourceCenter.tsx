import { Download } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/sections/Reveal"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { resources } from "@/data/site"

export function ResourceCenter() {
  return (
    <section className="container-shell section-spacing" id="resources">
      <SectionHeader
        description="Reusable planning assets for automation, ERP, analytics, and infrastructure decisions."
        eyebrow="Resource Center"
        title="Downloadable guides for smarter project planning"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Reveal key={resource.title}>
            <Card className="h-full" variant="gradient">
              <CardHeader>
                <resource.icon className="mb-3 size-7 text-electric-400" />
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <Button aria-label={`Download ${resource.title}`} size="sm" variant="outline">
                <Download className="size-4" />
                Download
              </Button>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
