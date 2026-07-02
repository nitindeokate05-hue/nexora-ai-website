import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { LuxuryCTA } from "@/components/sections/LuxuryCTA"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"
import { projects } from "@/data/site"

export function Projects() {
  return (
    <>
      <SEO
        description="Representative Nexora AI project patterns for AI workflows, KPI command centers, and secure service desk systems."
        title="Projects | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="No client names, no noise. Just high-end case-study patterns that show how Nexora AI thinks about outcomes."
        eyebrow="Case Study Blueprints"
        title="Premium delivery patterns for complex organizations."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Representative delivery patterns that show how Nexora AI structures automation, analytics, and support systems."
          eyebrow="Projects"
          title="Enterprise-grade project blueprints"
        />
        <FeatureGrid items={projects} />
      </section>
      <LuxuryCTA />
    </>
  )
}
