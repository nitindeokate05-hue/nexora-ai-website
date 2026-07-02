import { createElement, lazy, Suspense, type ReactNode } from "react"
import { Route, Routes } from "react-router-dom"

import { LoadingScreen } from "@/components/sections/LoadingScreen"
import { ROUTES } from "@/constants/routes"
import { RootLayout } from "@/layouts"
import { Home } from "@/pages/Home/Home"

const aboutPage = lazy(() => import("@/pages/About/About").then((module) => ({ default: module.About })))
const blogPage = lazy(() => import("@/pages/Blog/Blog").then((module) => ({ default: module.Blog })))
const bookingPage = lazy(() => import("@/pages/Booking/Booking").then((module) => ({ default: module.Booking })))
const careersPage = lazy(() => import("@/pages/Careers/Careers").then((module) => ({ default: module.Careers })))
const clientLoginPage = lazy(() => import("@/pages/ClientLogin/ClientLogin").then((module) => ({ default: module.ClientLogin })))
const contactPage = lazy(() => import("@/pages/Contact/Contact").then((module) => ({ default: module.Contact })))
const cookiePolicyPage = lazy(() => import("@/pages/CookiePolicy/CookiePolicy").then((module) => ({ default: module.CookiePolicy })))
const gdprNoticePage = lazy(() => import("@/pages/GdprNotice/GdprNotice").then((module) => ({ default: module.GdprNotice })))
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
  return <Suspense fallback={<LoadingScreen />}>{element}</Suspense>
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />} path={ROUTES.home}>
        <Route index element={<Home />} />
        <Route element={withSuspense(createElement(servicesPage))} path={ROUTES.services} />
        <Route element={withSuspense(createElement(solutionsPage))} path={ROUTES.solutions} />
        <Route element={withSuspense(createElement(industriesPage))} path={ROUTES.industries} />
        <Route element={withSuspense(createElement(technologiesPage))} path={ROUTES.technologies} />
        <Route element={withSuspense(createElement(projectsPage))} path={ROUTES.projects} />
        <Route element={withSuspense(createElement(careersPage))} path={ROUTES.careers} />
        <Route element={withSuspense(createElement(aboutPage))} path={ROUTES.about} />
        <Route element={withSuspense(createElement(blogPage))} path={ROUTES.blog} />
        <Route element={withSuspense(createElement(contactPage))} path={ROUTES.contact} />
        <Route element={withSuspense(createElement(bookingPage))} path={ROUTES.booking} />
        <Route element={withSuspense(createElement(clientLoginPage))} path={ROUTES.clientLogin} />
        <Route element={withSuspense(createElement(supportPage))} path={ROUTES.support} />
        <Route element={withSuspense(createElement(statusPage))} path={ROUTES.status} />
        <Route element={withSuspense(createElement(privacyPolicyPage))} path={ROUTES.privacyPolicy} />
        <Route element={withSuspense(createElement(termsConditionsPage))} path={ROUTES.termsConditions} />
        <Route element={withSuspense(createElement(cookiePolicyPage))} path={ROUTES.cookiePolicy} />
        <Route element={withSuspense(createElement(gdprNoticePage))} path={ROUTES.gdprNotice} />
        <Route element={withSuspense(createElement(notFoundPage))} path="*" />
      </Route>
    </Routes>
  )
}
