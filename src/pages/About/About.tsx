import { Card } from "@/components/ui/card"
import { LuxuryCTA } from "@/components/sections/LuxuryCTA"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function About() {
  return (
    <>
      <SEO
        description="Learn about Nexora AI's architecture-first approach to AI automation, software, analytics, cloud, and managed IT delivery."
        title="About | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Nexora AI is built around a simple principle: intelligent systems should feel premium, secure, measurable, and beautifully easy to operate."
        eyebrow="About Nexora AI"
        title="A luxury technology studio for enterprise AI execution."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Nexora AI is designed for companies that want fast execution without sacrificing security, maintainability, or operational clarity."
          eyebrow="About"
          title="Architecture-first delivery for modern enterprises"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {["Discovery", "Architecture", "Delivery"].map((step) => (
            <Card key={step} variant="gradient">
              <h3 className="font-heading text-xl font-semibold">{step}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                A structured engagement stage for building reliable automation and IT systems.
              </p>
            </Card>
          ))}
        </div>
      </section>
      <TrustBadges />
      <LuxuryCTA />
    </>
  )
}
