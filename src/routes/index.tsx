import { createElement, lazy, Suspense, type ReactNode } from "react"
import { createBrowserRouter } from "react-router-dom"

import { LoadingScreen } from "@/components/sections/LoadingScreen"
import { ROUTES } from "@/constants"
import { RootLayout } from "@/layouts"

const aboutPage = lazy(() => import("@/pages/About/About").then((module) => ({ default: module.About })))
const blogPage = lazy(() => import("@/pages/Blog/Blog").then((module) => ({ default: module.Blog })))
const bookingPage = lazy(() => import("@/pages/Booking/Booking").then((module) => ({ default: module.Booking })))
const careersPage = lazy(() => import("@/pages/Careers/Careers").then((module) => ({ default: module.Careers })))
const clientLoginPage = lazy(() => import("@/pages/ClientLogin/ClientLogin").then((module) => ({ default: module.ClientLogin })))
const contactPage = lazy(() => import("@/pages/Contact/Contact").then((module) => ({ default: module.Contact })))
const cookiePolicyPage = lazy(() => import("@/pages/CookiePolicy/CookiePolicy").then((module) => ({ default: module.CookiePolicy })))
const gdprNoticePage = lazy(() => import("@/pages/GdprNotice/GdprNotice").then((module) => ({ default: module.GdprNotice })))
const homePage = lazy(() => import("@/pages/Home/Home").then((module) => ({ default: module.Home })))
const industriesPage = lazy(() => import("@/pages/Industries/Industries").then((module) => ({ default: module.Industries })))
const notFoundPage = lazy(() => import("@/pages/NotFound/NotFound").then((module) => ({ default: module.NotFound })))
const privacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicy/PrivacyPolicy").then((module) => ({ default: module.PrivacyPolicy })))
const projectsPage = lazy(() => import("@/pages/Projects/Projects").then((module) => ({ default: module.Projects })))
const servicesPage = lazy(() => import("@/pages/Services/Services").then((module) => ({ default: module.Services })))
const solutionsPage = lazy(() => import("@/pages/Solutions/Solutions").then((module) => ({ default: module.Solutions })))
const statusPage = lazy(() => import("@/pages/Status/Status").then((module) => ({ default: module.Status })))
const supportPage = lazy(() => import("@/pages/Support/Support").then((module) => ({ default: module.Support })))
const technologiesPage = lazy(() => import("@/pages/Technologies/Technologies").then((module) => ({ default: module.Technologies })))
const termsConditionsPage = lazy(() => import("@/pages/TermsConditions/TermsConditions").then((module) => ({ default: module.TermsConditions })))

function withSuspense(element: ReactNode) {
  return (
    <Suspense
      fallback={<LoadingScreen />}
    >
      {element}
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: withSuspense(createElement(homePage)),
      },
      {
        path: ROUTES.services,
        element: withSuspense(createElement(servicesPage)),
      },
      {
        path: ROUTES.solutions,
        element: withSuspense(createElement(solutionsPage)),
      },
      {
        path: ROUTES.industries,
        element: withSuspense(createElement(industriesPage)),
      },
      {
        path: ROUTES.technologies,
        element: withSuspense(createElement(technologiesPage)),
      },
      {
        path: ROUTES.projects,
        element: withSuspense(createElement(projectsPage)),
      },
      {
        path: ROUTES.careers,
        element: withSuspense(createElement(careersPage)),
      },
      {
        path: ROUTES.about,
        element: withSuspense(createElement(aboutPage)),
      },
      {
        path: ROUTES.blog,
        element: withSuspense(createElement(blogPage)),
      },
      {
        path: ROUTES.contact,
        element: withSuspense(createElement(contactPage)),
      },
      {
        path: ROUTES.booking,
        element: withSuspense(createElement(bookingPage)),
      },
      {
        path: ROUTES.clientLogin,
        element: withSuspense(createElement(clientLoginPage)),
      },
      {
        path: ROUTES.support,
        element: withSuspense(createElement(supportPage)),
      },
      {
        path: ROUTES.status,
        element: withSuspense(createElement(statusPage)),
      },
      {
        path: ROUTES.privacyPolicy,
        element: withSuspense(createElement(privacyPolicyPage)),
      },
      {
        path: ROUTES.termsConditions,
        element: withSuspense(createElement(termsConditionsPage)),
      },
      {
        path: ROUTES.cookiePolicy,
        element: withSuspense(createElement(cookiePolicyPage)),
      },
      {
        path: ROUTES.gdprNotice,
        element: withSuspense(createElement(gdprNoticePage)),
      },
      {
        path: "*",
        element: withSuspense(createElement(notFoundPage)),
      },
    ],
  },
])
