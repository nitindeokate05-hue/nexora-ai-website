import { Card } from "@/components/ui/card"
import { PremiumHero } from "@/components/sections/PremiumHero"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { SEO } from "@/components/seo"

export function CookiePolicy() {
  return (
    <>
      <SEO
        description="Cookie Policy for Nexora AI, including essential cookies, preferences, local storage, analytics readiness, and consent controls."
        title="Cookie Policy | Nexora AI"
      />
      <PremiumHero
        align="center"
        description="How Nexora AI uses cookies and local browser storage to improve the website experience."
        eyebrow="Cookies"
        title="Cookie Policy"
      />
      <section className="container-shell section-spacing">
        <SectionHeader
          description="Nexora AI and Nexora Global are owned and operated by Nexora Global."
          eyebrow="Preferences"
          title="Cookie and local storage use"
        />
        <Card className="mx-auto max-w-4xl space-y-4 text-sm leading-7 text-muted-foreground" variant="glass">
          <p>
            Nexora AI uses essential cookies and browser storage to remember cookie
            consent choices, language and currency selections, interface preferences,
            and local demo form submissions.
          </p>
          <p>
            Optional analytics or marketing cookies may be introduced to understand
            website traffic, improve content, measure service interest, and enhance
            AI-powered service journeys. Where required, these categories should be
            controlled by user consent preferences.
          </p>
          <p>
            Users may accept, reject, or manage cookie preferences through the cookie
            consent popup. Cookie preferences can be reopened from the footer through
            the Cookie Preferences option.
          </p>
          <p>
            Users can also clear cookies and localStorage through their browser
            settings. Some website features may not remember preferences after storage
            is cleared.
          </p>
        </Card>
      </section>
    </>
  )
}
