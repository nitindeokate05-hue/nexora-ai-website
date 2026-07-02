import { Card } from "@/components"
import { LuxuryCTA } from "@/components/sections/LuxuryCTA"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { ResourceCenter } from "@/components/sections/ResourceCenter"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function Blog() {
  return (
    <>
      <SEO
        description="Nexora AI insights for AI automation, ERP, Power BI, IT infrastructure, cloud, and secure software delivery."
        title="Blog | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Executive-grade thinking on automation, enterprise architecture, dashboards, ERP readiness, and secure digital operations."
        eyebrow="Insights"
        title="Field notes from the edge of AI operations."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Editorial placeholders for future articles, playbooks, and implementation guides."
          eyebrow="Blog"
          title="Insights for AI-enabled operations"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {["Automation Strategy", "ERP Readiness", "Dashboard Governance"].map((post) => (
            <Card key={post} variant="glass">
              <p className="text-sm text-electric-400">Article placeholder</p>
              <h3 className="mt-3 font-heading text-xl font-semibold">{post}</h3>
            </Card>
          ))}
        </div>
      </section>
      <ResourceCenter />
      <LuxuryCTA />
    </>
  )
}
