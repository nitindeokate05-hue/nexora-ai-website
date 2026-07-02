import { lazy, Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

import { BrandLogo, Button, Footer, Navigation } from "@/components"
import { AmbientBackground } from "@/components/sections/AmbientBackground"
import { PageTransition } from "@/components/sections/PageTransition"
import { PreferenceSelectors } from "@/components/widgets/PreferenceSelectors"
import { CONTACT, footerNavigation, primaryNavigation, ROUTES, utilityNavigation } from "@/constants"

const SiteWidgets = lazy(() =>
  import("@/components/widgets").then((module) => ({ default: module.SiteWidgets })),
)

function FooterLinks() {
  const openCookiePreferences = () => {
    window.dispatchEvent(new Event("nexora:open-cookie-preferences"))
  }

  return (
    <div className="grid gap-4">
      <nav
        aria-label="Footer"
        className="flex max-w-2xl flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground md:justify-end"
      >
        {footerNavigation.map((item) => (
          <Link
            className="transition-colors hover:text-foreground"
            key={item.href}
            to={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <nav
        aria-label="Utility"
        className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-electric-400 md:justify-end"
      >
        {utilityNavigation.map((item) => (
          <Link className="transition-colors hover:text-foreground" key={item.href} to={item.href}>
            {item.label}
          </Link>
        ))}
        <button
          className="text-left transition-colors hover:text-foreground md:text-right"
          onClick={openCookiePreferences}
          type="button"
        >
          Cookie Preferences
        </button>
      </nav>
    </div>
  )
}

function FooterMeta() {
  return (
    <div className="grid gap-3">
      <p>Premium AI automation, software, ERP, analytics, cloud, and IT service architecture for global clients.</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
        <a className="transition-colors hover:text-electric-300" href={CONTACT.phoneHref}>
          {CONTACT.phoneDisplay}
        </a>
        <a className="transition-colors hover:text-electric-300" href={CONTACT.emailHref}>
          {CONTACT.email}
        </a>
        <a
          className="transition-colors hover:text-electric-300"
          href={CONTACT.whatsappHref}
          rel="noreferrer"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export function SiteLayout() {
  return (
    <div className="premium-shell flex min-h-svh flex-col">
      <AmbientBackground />
      <Navigation
        actions={
          <>
            <div className="hidden lg:block">
              <PreferenceSelectors />
            </div>
            <Button asChild className="hidden sm:inline-flex" size="sm" variant="outline">
              <Link to={ROUTES.clientLogin}>Login</Link>
            </Button>
            <Button asChild className="hidden 2xl:inline-flex" size="sm" variant="gradient">
              <Link to={ROUTES.booking}>Book Free Consultation</Link>
            </Button>
          </>
        }
        brand={<BrandLogo />}
        items={primaryNavigation}
      />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer
        brand={<BrandLogo imageClassName="h-20 max-w-[7.5rem]" />}
        meta={<FooterMeta />}
        navigation={<FooterLinks />}
      />
      <Suspense fallback={null}>
        <SiteWidgets />
      </Suspense>
    </div>
  )
}
