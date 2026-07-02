import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { StatusGrid } from "@/components/sections/StatusGrid"
import { SEO } from "@/components/seo"

export function Status() {
  return (
    <>
      <SEO
        description="Nexora AI status page placeholder for website, API, support, and client portal availability."
        title="Status | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="A clear operational surface for website, API, support, and future portal availability."
        eyebrow="Operational Status"
        title="Transparent systems. Trusted delivery."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Live integrations can be connected later. Current state is shown as a premium placeholder."
          eyebrow="Status"
          title="Service Status"
        />
        <StatusGrid />
      </section>
    </>
  )
}
