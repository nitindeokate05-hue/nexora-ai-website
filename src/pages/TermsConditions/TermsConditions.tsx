import { Card } from "@/components/ui/card"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function TermsConditions() {
  return (
    <>
      <SEO
        description="Terms and Conditions for using the Nexora AI website, tools, content, estimates, and service enquiry flows."
        title="Terms & Conditions | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Terms for using Nexora AI website content, calculators, proposal tools, forms, and service enquiry flows."
        eyebrow="Terms"
        title="Terms & Conditions"
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Nexora AI and Nexora Global are owned and operated by Nexora Global."
          eyebrow="Legal"
          title="Website usage and service enquiries"
        />
        <Card className="mx-auto max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground" variant="glass">
          <p>
            By using this website, users agree to access Nexora AI content, tools,
            forms, resources, and communications for lawful business purposes only.
            All website content is provided for general information, planning, and
            service discovery.
          </p>
          <p>
            Website estimates, proposal summaries, downloadable resources, chatbot
            replies, and calculators are non-binding planning aids. They do not create
            a final quote, warranty, commitment, statement of work, or legal obligation.
          </p>
          <p>
            Final project scope, pricing, timelines, responsibilities, acceptance
            criteria, support terms, confidentiality terms, and commercial obligations
            must be confirmed in a written agreement, proposal, purchase order, or
            statement of work accepted by Nexora Global.
          </p>
          <p>
            All names, designs, text, visual elements, UI patterns, source code, brand
            assets, and website materials are protected by copyright and other
            applicable intellectual property rights. Unauthorized copying, reproduction,
            scraping, resale, reverse engineering, or redistribution is prohibited.
          </p>
          <p>
            Nexora Global may update website content, services, pricing guidance,
            policies, or availability at any time. Continued use of the website after
            updates indicates acceptance of the revised terms.
          </p>
        </Card>
      </section>
    </>
  )
}
