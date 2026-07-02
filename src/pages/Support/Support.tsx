import { SupportTicketForm } from "@/components/sections/SupportTicketForm"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function Support() {
  return (
    <>
      <SEO
        description="Create a Nexora AI support ticket placeholder for technical issues, billing, project support, security, and general requests."
        title="Support | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="A premium placeholder support desk for issues, priorities, service requests, and managed technology operations."
        eyebrow="Global Support"
        title="Support designed for enterprise continuity."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Submit a local ticket placeholder for future service desk integration."
          eyebrow="Support"
          title="Support Ticket System"
        />
        <div className="mx-auto max-w-4xl">
          <SupportTicketForm />
        </div>
      </section>
    </>
  )
}
