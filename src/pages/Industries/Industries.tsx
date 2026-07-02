import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { LuxuryCTA } from "@/components/sections/LuxuryCTA"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"
import { industries } from "@/data/site"

export function Industries() {
  return (
    <>
      <SEO
        description="Nexora AI supports professional services, manufacturing, retail, distribution, healthcare, and global operations teams."
        title="Industries | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Industry-specific automation and IT modernization for teams that need measurable speed, control, and visibility."
        eyebrow="Industry Systems"
        title="Enterprise technology shaped around real operations."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Business automation, IT modernization, dashboards, and secure systems designed around industry workflows."
          eyebrow="Industries"
          title="Built for real operational environments"
        />
        <FeatureGrid items={industries} />
      </section>
      <LuxuryCTA />
    </>
  )
}
