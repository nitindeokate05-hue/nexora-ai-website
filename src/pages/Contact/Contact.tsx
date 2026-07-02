import { Mail, MessageCircle, Phone } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingForm } from "@/components/sections/BookingForm"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/constants/contact"

const contactCards = [
  {
    description: "Speak with Nexora AI about automation, software, analytics, cloud, or support requirements.",
    href: CONTACT.phoneHref,
    icon: Phone,
    label: "Phone",
    title: CONTACT.phoneDisplay,
    external: false,
  },
  {
    description: "Send project briefs, consultation requests, and partnership conversations to our official inbox.",
    href: CONTACT.emailHref,
    icon: Mail,
    label: "Email",
    title: CONTACT.email,
    external: false,
  },
  {
    description: "Start a WhatsApp conversation with the Nexora AI team using our official business number.",
    href: CONTACT.whatsappHref,
    icon: MessageCircle,
    label: "WhatsApp",
    title: "Message Nexora AI",
    external: true,
  },
] as const

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
        <div className="mx-auto mb-10 grid max-w-6xl gap-4 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <Card className="group h-full" key={card.label} variant="glass">
                <CardHeader>
                  <div className="mb-2 grid size-12 place-items-center rounded-2xl border border-electric-400/30 bg-electric-500/12 text-electric-300 shadow-glow transition group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-300">
                    {card.label}
                  </p>
                  <CardTitle className="break-words text-xl">{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                  <Button asChild className="mt-2 w-fit" size="sm" variant="outline">
                    <a
                      href={card.href}
                      rel={card.external ? "noreferrer" : undefined}
                      target={card.external ? "_blank" : undefined}
                    >
                      Contact Now
                    </a>
                  </Button>
                </CardHeader>
              </Card>
            )
          })}
        </div>
        <div className="mx-auto max-w-4xl">
          <BookingForm />
        </div>
      </section>
    </>
  )
}
