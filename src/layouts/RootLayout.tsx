import { useLenisScroll } from "@/hooks"
import { SiteLayout } from "@/layouts/SiteLayout"

export function RootLayout() {
  useLenisScroll()

  return <SiteLayout />
}
