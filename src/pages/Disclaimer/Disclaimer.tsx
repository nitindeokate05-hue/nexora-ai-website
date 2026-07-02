import { Card } from "@/components/ui/card"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function Disclaimer() {
  return (
    <>
      <SEO
        description="Disclaimer for Nexora AI website content, calculators, chatbot responses, resources, and service planning information."
        title="Disclaimer | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Important limitations for website content, AI-assisted tools, estimates, resources, and service planning information."
        eyebrow="Disclaimer"
        title="Website and service information disclaimer."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Nexora AI and Nexora Global are owned and operated by Nexora Global."
          eyebrow="Legal Notice"
          title="Professional use and limitations"
        />
        <Card className="mx-auto max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground" variant="glass">
          <p>
            The information on this website is provided by Nexora Global for general
            business, technology, automation, analytics, cloud, and IT service planning
            purposes. It should not be treated as legal, financial, security, tax, or
            professional consulting advice for a specific situation.
          </p>
          <p>
            AI cost calculators, proposal generators, chatbot responses, downloadable
            resources, service descriptions, case-study style content, and website
            estimates are illustrative only. Actual pricing, scope, timelines, results,
            technical feasibility, and delivery requirements depend on discovery,
            architecture review, data availability, integrations, security posture, and
            written commercial agreement.
          </p>
          <p>
            Nexora Global makes reasonable efforts to keep website content accurate and
            professional, but does not guarantee that all content is complete, current,
            error-free, uninterrupted, or suitable for every business use case.
          </p>
          <p>
            Third-party names, platforms, technologies, frameworks, and service marks
            referenced on the website belong to their respective owners. References are
            for compatibility, capability, or informational purposes only and do not
            imply endorsement, partnership, or sponsorship unless expressly stated in
            writing.
          </p>
          <p>
            Copyright © 2026 Nexora Global. All rights reserved. Unauthorized copying,
            redistribution, reproduction, scraping, resale, or misuse of website
            content, design, source code, brand assets, or visual materials is strictly
            prohibited.
          </p>
        </Card>
      </section>
    </>
  )
}
