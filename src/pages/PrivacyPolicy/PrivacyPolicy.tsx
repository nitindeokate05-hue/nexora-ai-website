import { Card } from "@/components/ui/card"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function PrivacyPolicy() {
  return (
    <>
      <SEO
        description="Privacy Policy for Nexora AI, owned and operated by Nexora Global, covering enquiry data, local storage, cookies, and communication."
        title="Privacy Policy | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="How Nexora AI handles enquiry, booking, consultation, support, and website interaction information."
        eyebrow="Privacy"
        title="Privacy Policy"
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Nexora AI and Nexora Global are owned and operated by Nexora Global."
          eyebrow="Compliance"
          title="Responsible data handling"
        />
        <Card className="mx-auto max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground" variant="glass">
          <p>
            Nexora AI collects information that users voluntarily submit through enquiry
            forms, consultation bookings, proposal tools, support requests, chatbot
            flows, email, phone, and WhatsApp communication.
          </p>
          <p>
            This information may include name, email address, phone or WhatsApp number,
            company name, country, service interest, budget range, timeline, and project
            requirement details. We use this information to respond to enquiries,
            understand business requirements, improve services, and support client
            communication.
          </p>
          <p>
            Some interactive features currently save submitted demo data and preferences
            in browser localStorage. Cookie consent choices, language preferences, lead
            forms, chatbot requirements, and local demo records may be stored on the
            user's device unless cleared by the user.
          </p>
          <p>
            Nexora Global does not sell submitted enquiry information. Data may be
            processed by trusted service providers only where required for hosting,
            communication, analytics, security, or service delivery.
          </p>
          <p>
            Users may contact Nexora Global at info@nexoraiglobal.com to request
            clarification, correction, or deletion of submitted personal information,
            subject to legal, security, and business record requirements.
          </p>
        </Card>
      </section>
    </>
  )
}
