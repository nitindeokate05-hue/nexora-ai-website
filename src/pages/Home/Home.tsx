import { CostCalculator } from "@/components/sections/CostCalculator"
import { EnterpriseHomeHero } from "@/components/sections/EnterpriseHomeHero"
import { EnterpriseStats } from "@/components/sections/EnterpriseStats"
import { FaqSearch } from "@/components/sections/FaqSearch"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { LuxuryCTA } from "@/components/sections/LuxuryCTA"
import { ProposalGenerator } from "@/components/sections/ProposalGenerator"
import { ResourceCenter } from "@/components/sections/ResourceCenter"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { TechnologyMarquee } from "@/components/sections/TechnologyMarquee"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { ClientTestimonials } from "@/components/sections/ClientTestimonials"
import { services, solutions } from "@/data/site"
import { SEO } from "@/components/seo"

export function Home() {
  return (
    <>
      <SEO
        description="Nexora AI builds premium AI automation, software, ERP, Power BI, cloud, and IT services for worldwide clients."
        title="Nexora AI | AI Automation & IT Services"
      />
      <EnterpriseHomeHero />
      <EnterpriseStats />
      <ClientTestimonials />
      <TechnologyMarquee />
      <TrustBadges />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Premium systems for automation, analytics, portals, ERP, infrastructure, and managed IT operations."
          eyebrow="Services"
          title="Enterprise capability without enterprise drag"
        />
        <FeatureGrid items={services} />
      </section>
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Plan faster with self-service tools that capture project intent and prepare the next conversation."
          eyebrow="AI Tools"
          title="Estimate, scope, and start smarter"
        />
        <div className="grid gap-5 xl:grid-cols-2">
          <CostCalculator />
          <ProposalGenerator />
        </div>
      </section>
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Reusable solution patterns for businesses that want measurable operational velocity."
          eyebrow="Solutions"
          title="Automation blueprints for modern teams"
        />
        <FeatureGrid items={solutions} />
      </section>
      <ResourceCenter />
      <FaqSearch />
      <LuxuryCTA />
    </>
  )
}
