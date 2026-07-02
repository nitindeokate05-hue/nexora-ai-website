import { Card } from "@/components/ui/card"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function TermsConditions() {
  return (
    <>
      <SEO
        description="Nexora AI terms page placeholder for service enquiries, estimates, proposals, and website usage."
        title="Terms | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="A clear structure for website usage, planning estimates, proposal summaries, and future service agreements."
        eyebrow="Terms"
        title="Transparent engagement expectations."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Prepared for production legal review before launch."
          eyebrow="Compliance"
          title="Terms & Conditions"
        />
        <Card className="mx-auto max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground" variant="glass">
          <p>
            Website estimates, proposal summaries, resources, chatbot output, and
            calculators are planning tools and do not represent a binding commercial
            offer.
          </p>
          <p>
            Final project scope, pricing, timelines, responsibilities, and legal terms
            should be documented in a signed agreement or statement of work.
          </p>
        </Card>
      </section>
    </>
  )
}
