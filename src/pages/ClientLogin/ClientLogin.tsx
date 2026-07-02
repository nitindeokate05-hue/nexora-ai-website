import { LockKeyhole } from "lucide-react"

import { Card } from "@/components/ui/card"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function ClientLogin() {
  return (
    <>
      <SEO
        description="Secure Nexora AI client portal placeholder for future project access, documents, support, and delivery updates."
        title="Client Login | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="A future secure workspace for project milestones, documents, approvals, support, and executive reporting."
        eyebrow="Secure Client Portal"
        title="Client access is being engineered with enterprise security."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="The secure portal experience is prepared for a future authenticated workspace."
          eyebrow="Client Portal"
          title="Secure Client Portal Coming Soon"
        />
        <Card className="mx-auto max-w-xl text-center" variant="gradient">
          <LockKeyhole className="mx-auto mb-4 size-12 text-electric-400" />
          <p className="text-sm leading-6 text-muted-foreground">
            Future portal access will support secure documents, project milestones,
            ticketing, approvals, and managed service reporting.
          </p>
        </Card>
      </section>
    </>
  )
}
