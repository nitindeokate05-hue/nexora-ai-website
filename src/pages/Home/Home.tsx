import { lazy, Suspense } from "react"

import { EnterpriseHomeHero } from "@/components/sections/EnterpriseHomeHero"
import { EnterpriseStats } from "@/components/sections/EnterpriseStats"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { LazySection } from "@/components/sections/LazySection"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { services, solutions } from "@/data/site"
import { SEO } from "@/components/seo"

const ClientTestimonials = lazy(() =>
  import("@/components/sections/ClientTestimonials").then((module) => ({ default: module.ClientTestimonials })),
)
const CostCalculator = lazy(() =>
  import("@/components/sections/CostCalculator").then((module) => ({ default: module.CostCalculator })),
)
const FaqSearch = lazy(() =>
  import("@/components/sections/FaqSearch").then((module) => ({ default: module.FaqSearch })),
)
const LuxuryCTA = lazy(() =>
  import("@/components/sections/LuxuryCTA").then((module) => ({ default: module.LuxuryCTA })),
)
const ProposalGenerator = lazy(() =>
  import("@/components/sections/ProposalGenerator").then((module) => ({ default: module.ProposalGenerator })),
)
const ResourceCenter = lazy(() =>
  import("@/components/sections/ResourceCenter").then((module) => ({ default: module.ResourceCenter })),
)
const TechnologyMarquee = lazy(() =>
  import("@/components/sections/TechnologyMarquee").then((module) => ({ default: module.TechnologyMarquee })),
)
const TrustBadges = lazy(() =>
  import("@/components/sections/TrustBadges").then((module) => ({ default: module.TrustBadges })),
)

function SectionFallback() {
  return <div className="container-shell h-28 content-auto rounded-3xl border border-white/10 bg-white/[0.025]" />
}

export function Home() {
  return (
    <>
      <SEO
        description="Nexora AI builds premium AI automation, software, ERP, Power BI, cloud, and IT services for worldwide clients."
        title="Nexora AI | AI Automation & IT Services"
      />
      <EnterpriseHomeHero />
      <EnterpriseStats />
      <LazySection minHeight="44rem">
        <Suspense fallback={<SectionFallback />}>
          <ClientTestimonials />
        </Suspense>
      </LazySection>
      <LazySection minHeight="18rem">
        <Suspense fallback={<SectionFallback />}>
          <TechnologyMarquee />
          <TrustBadges />
        </Suspense>
      </LazySection>
      <LazySection minHeight="66rem">
        <section className="container-shell section-spacing content-auto">
          <SectionHeader
            description="Premium systems for automation, analytics, portals, ERP, infrastructure, and managed IT operations."
            eyebrow="Services"
            title="Enterprise capability without enterprise drag"
          />
          <FeatureGrid items={services} />
        </section>
      </LazySection>
      <LazySection minHeight="42rem">
        <section className="container-shell section-spacing content-auto">
          <SectionHeader
            description="Plan faster with self-service tools that capture project intent and prepare the next conversation."
            eyebrow="AI Tools"
            title="Estimate, scope, and start smarter"
          />
          <div className="grid gap-5 xl:grid-cols-2">
            <Suspense fallback={<div className="min-h-96 rounded-3xl border border-white/10 bg-white/[0.025]" />}>
              <CostCalculator />
            </Suspense>
            <Suspense fallback={<div className="min-h-96 rounded-3xl border border-white/10 bg-white/[0.025]" />}>
              <ProposalGenerator />
            </Suspense>
          </div>
        </section>
      </LazySection>
      <LazySection minHeight="66rem">
        <section className="container-shell section-spacing content-auto">
          <SectionHeader
            description="Reusable solution patterns for businesses that want measurable operational velocity."
            eyebrow="Solutions"
            title="Automation blueprints for modern teams"
          />
          <FeatureGrid items={solutions} />
        </section>
      </LazySection>
      <LazySection minHeight="54rem">
        <Suspense fallback={<SectionFallback />}>
          <ResourceCenter />
          <FaqSearch />
          <LuxuryCTA />
        </Suspense>
      </LazySection>
    </>
  )
}
