import { Card } from "@/components"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function GdprNotice() {
  return (
    <>
      <SEO
        description="Nexora AI GDPR notice placeholder for data rights, processing basis, retention, and security posture."
        title="GDPR Notice | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Prepared for data rights, processing transparency, secure delivery, and future privacy operations."
        eyebrow="GDPR"
        title="Privacy-ready systems for global clients."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="A GDPR-ready structure for future policy finalization."
          eyebrow="Compliance"
          title="GDPR Notice"
        />
        <Card className="mx-auto max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground" variant="glass">
          <p>
            Nexora AI is structured to support privacy-aware discovery, secure delivery,
            access controls, and responsible handling of client project information.
          </p>
          <p>
            Data subject rights, processor details, and transfer mechanisms should be
            reviewed and finalized before production launch.
          </p>
        </Card>
      </section>
    </>
  )
}
