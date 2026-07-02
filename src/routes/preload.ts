import { ROUTES } from "@/constants/routes"

const preloaders: Partial<Record<string, () => Promise<unknown>>> = {
  [ROUTES.services]: () => import("@/pages/Services/Services"),
  [ROUTES.solutions]: () => import("@/pages/Solutions/Solutions"),
  [ROUTES.industries]: () => import("@/pages/Industries/Industries"),
  [ROUTES.technologies]: () => import("@/pages/Technologies/Technologies"),
  [ROUTES.projects]: () => import("@/pages/Projects/Projects"),
  [ROUTES.careers]: () => import("@/pages/Careers/Careers"),
  [ROUTES.about]: () => import("@/pages/About/About"),
  [ROUTES.blog]: () => import("@/pages/Blog/Blog"),
  [ROUTES.contact]: () => import("@/pages/Contact/Contact"),
  [ROUTES.booking]: () => import("@/pages/Booking/Booking"),
  [ROUTES.clientLogin]: () => import("@/pages/ClientLogin/ClientLogin"),
  [ROUTES.support]: () => import("@/pages/Support/Support"),
  [ROUTES.status]: () => import("@/pages/Status/Status"),
  [ROUTES.privacyPolicy]: () => import("@/pages/PrivacyPolicy/PrivacyPolicy"),
  [ROUTES.termsConditions]: () => import("@/pages/TermsConditions/TermsConditions"),
  [ROUTES.cookiePolicy]: () => import("@/pages/CookiePolicy/CookiePolicy"),
  [ROUTES.disclaimer]: () => import("@/pages/Disclaimer/Disclaimer"),
  [ROUTES.gdprNotice]: () => import("@/pages/GdprNotice/GdprNotice"),
}

const preloadedRoutes = new Set<string>()

export function preloadRoute(path: string) {
  if (preloadedRoutes.has(path)) {
    return
  }

  preloadedRoutes.add(path)
  void preloaders[path]?.()
}
