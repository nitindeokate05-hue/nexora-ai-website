import { CostCalculator } from "@/components/sections/CostCalculator"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { LuxuryCTA } from "@/components/sections/LuxuryCTA"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { TechnologyMarquee } from "@/components/sections/TechnologyMarquee"
import { SEO } from "@/components/seo"
import { services } from "@/data/site"

export function Services() {
  return (
    <>
      <SEO
        description="Explore Nexora AI services across AI automation, software development, ERP, Power BI, cloud, infrastructure, and managed IT."
        title="Services | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="A complete operating layer for intelligent automation, enterprise software, analytics, ERP, cloud, and managed IT."
        eyebrow="Enterprise Services"
        title="High-trust delivery for mission-critical AI systems."
      />
      <TechnologyMarquee />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="A full-stack delivery model for global clients who need secure automation, software, data, and IT execution."
          eyebrow="Services"
          title="Premium AI automation and IT service delivery"
        />
        <FeatureGrid items={services} />
        <div className="mx-auto mt-10 max-w-3xl">
          <CostCalculator />
        </div>
      </section>
      <LuxuryCTA />
    </>
  )
}
