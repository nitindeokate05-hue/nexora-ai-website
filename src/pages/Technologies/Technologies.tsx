import { Card } from "@/components/ui/card"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { TechnologyMarquee } from "@/components/sections/TechnologyMarquee"
import { SEO } from "@/components/seo"
import { technologies } from "@/data/site"

export function Technologies() {
  return (
    <>
      <SEO
        description="Technology stack for Nexora AI projects including React, TypeScript, Node.js, Python, OpenAI, Power BI, Azure, AWS, and more."
        title="Technologies | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="A modern, secure, modular stack for AI products, dashboards, ERP workflows, infrastructure, and client portals."
        eyebrow="Technology Stack"
        title="A future-ready platform layer for enterprise AI."
      />
      <TechnologyMarquee />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="A modern stack for secure, scalable, maintainable AI automation and IT service platforms."
          eyebrow="Technologies"
          title="Production-ready tools for serious systems"
        />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technology) => (
            <Card className="text-center font-semibold" key={technology} variant="glass">
              {technology}
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
