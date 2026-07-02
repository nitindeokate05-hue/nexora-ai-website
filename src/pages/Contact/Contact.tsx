import { BookingForm } from "@/components/sections/BookingForm"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function Contact() {
  return (
    <>
      <SEO
        description="Contact Nexora AI to discuss AI automation, software development, ERP, Power BI, cloud, and IT service requirements."
        title="Contact | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Bring your automation, software, ERP, analytics, cloud, or support requirement. Nexora AI will help shape the next move."
        eyebrow="Contact"
        title="Start a confidential enterprise AI conversation."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Share your goals and preferred schedule. Your request is saved locally in this browser for the demo workflow."
          eyebrow="Contact"
          title="Start your Nexora AI conversation"
        />
        <div className="mx-auto max-w-4xl">
          <BookingForm />
        </div>
      </section>
    </>
  )
}
