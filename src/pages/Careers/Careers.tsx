import { Card } from "@/components"
import { LuxuryCTA } from "@/components/sections/LuxuryCTA"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function Careers() {
  return (
    <>
      <SEO
        description="Careers at Nexora AI for builders interested in AI automation, enterprise software, analytics, and global IT services."
        title="Careers | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="Join the kind of team that treats AI, design, architecture, and delivery discipline as one craft."
        eyebrow="Careers"
        title="Build elite systems for ambitious global clients."
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="A future-ready team for engineers, designers, analysts, consultants, and automation architects."
          eyebrow="Careers"
          title="Build premium systems for global clients"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {["Engineering", "Design & Product", "Automation Consulting"].map((role) => (
            <Card key={role} variant="glass">
              <h3 className="font-heading text-xl font-semibold">{role}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Hiring pipeline placeholder for future openings and application workflows.
              </p>
            </Card>
          ))}
        </div>
      </section>
      <LuxuryCTA
        description="Future hiring workflows will support engineering, design, consulting, and automation roles."
        title="The careers platform is being prepared for exceptional builders."
      />
    </>
  )
}
