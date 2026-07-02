import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { LuxuryCTA } from "@/components/sections/LuxuryCTA"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"
import { solutions } from "@/data/site"

export function Solutions() {
  return (
    <>
      <SEO
        description="Nexora AI solution patterns for lead-to-cash automation, AI support, executive intelligence, and secure client portals."
        title="Solutions | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Nexora AI turns fragmented workflows into intelligent operating systems with automation, portals, dashboards, and AI support layers."
        eyebrow="Automation Solutions"
        title="Convert process complexity into elegant AI workflows."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Reusable architecture patterns that can be adapted to each client workflow, stack, compliance model, and operating cadence."
          eyebrow="Solutions"
          title="Systems that remove operational friction"
        />
        <FeatureGrid items={solutions} />
      </section>
      <LuxuryCTA />
    </>
  )
}
