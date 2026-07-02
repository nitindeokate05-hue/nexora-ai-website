import { Card } from "@/components"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function PrivacyPolicy() {
  return (
    <>
      <SEO
        description="Nexora AI privacy policy placeholder for project enquiries, booking data, support tickets, and client communication."
        title="Privacy Policy | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="A privacy-first posture for enquiries, demos, booking flows, support requests, and future backend integrations."
        eyebrow="Privacy"
        title="Responsible data handling by design."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Prepared for production legal review and privacy policy finalization."
          eyebrow="Compliance"
          title="Privacy Policy"
        />
        <Card className="mx-auto max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground" variant="glass">
          <p>
            Nexora AI collects enquiry, booking, proposal, and support information
            submitted by users for business communication and project planning.
          </p>
          <p>
            This website currently stores demo form submissions in local browser
            storage. Production data collection should be connected to a secure backend
            with retention, deletion, and access controls.
          </p>
        </Card>
      </section>
    </>
  )
}
