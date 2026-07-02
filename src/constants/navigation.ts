import { ROUTES } from "./routes"

export const primaryNavigation = [
  { label: "Home", href: ROUTES.home },
  { label: "Services", href: ROUTES.services },
  { label: "Solutions", href: ROUTES.solutions },
  { label: "Industries", href: ROUTES.industries },
  { label: "Technologies", href: ROUTES.technologies },
  { label: "Projects", href: ROUTES.projects },
  { label: "Careers", href: ROUTES.careers },
  { label: "About", href: ROUTES.about },
  { label: "Blog", href: ROUTES.blog },
  { label: "Contact", href: ROUTES.contact },
] as const

export const legalNavigation = [
  { label: "Privacy Policy", href: ROUTES.privacyPolicy },
  { label: "Terms & Conditions", href: ROUTES.termsConditions },
  { label: "Cookie Policy", href: ROUTES.cookiePolicy },
  { label: "Disclaimer", href: ROUTES.disclaimer },
] as const

export const utilityNavigation = [
  { label: "Client Login", href: ROUTES.clientLogin },
  { label: "Support", href: ROUTES.support },
  { label: "Status", href: ROUTES.status },
] as const

export const footerNavigation = [
  ...primaryNavigation,
] as const
