import { Card } from "@/components/ui/card"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function CookiePolicy() {
  return (
    <>
      <SEO
        description="Nexora AI cookie policy placeholder covering essential preferences, consent, and local browser storage."
        title="Cookie Policy | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Essential local preferences support a faster, smoother website experience while production policies remain ready for legal finalization."
        eyebrow="Cookies"
        title="A cleaner preference experience."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="This policy page is prepared for legal review before launch."
          eyebrow="Compliance"
          title="Cookie Policy"
        />
        <Card className="mx-auto max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground" variant="glass">
          <p>
            Nexora AI uses essential browser storage for user preferences, form demos,
            cookie consent, and interactive website features.
          </p>
          <p>
            Production cookie categories, retention periods, and third-party processors
            should be finalized with legal counsel before deployment.
          </p>
        </Card>
      </section>
    </>
  )
}
