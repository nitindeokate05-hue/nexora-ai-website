import { BookingForm } from "@/components/sections/BookingForm"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function Booking() {
  return (
    <>
      <SEO
        description="Book a free Nexora AI consultation for AI automation, software, ERP, analytics, cloud, and IT services."
        title="Book Free Consultation | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="A focused entry point for confidential automation, analytics, software, ERP, cloud, and support discussions."
        eyebrow="Private Strategy Session"
        title="Book a premium Nexora AI consultation."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Pick a preferred date and time for an introductory consultation."
          eyebrow="Consultation"
          title="Book Free Consultation"
        />
        <div className="mx-auto max-w-4xl">
          <BookingForm />
        </div>
      </section>
    </>
  )
}
