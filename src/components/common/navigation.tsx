import { lazy, Suspense, useEffect, useState, type ComponentProps, type ReactNode } from "react"
import { Menu, X } from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { CONTACT } from "@/constants/contact"
import { preloadRoute } from "@/routes/preload"
import type { NavItem } from "@/types"
import { cn } from "@/utils/cn"
import { BrandLogo } from "./BrandLogo"

const MegaMenu = lazy(() =>
  import("./MegaMenu").then((module) => ({ default: module.MegaMenu })),
)

function isMegaMenuLabel(label: string): label is "Services" | "Solutions" {
  return label === "Services" || label === "Solutions"
}

type NavigationProps = ComponentProps<"header"> & {
  brand?: ReactNode
  items?: readonly NavItem[]
  actions?: ReactNode
}

function Navigation({
  brand,
  items = [],
  actions,
  className,
  ...props
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [megaMenu, setMegaMenu] = useState<"Services" | "Solutions" | null>(null)
  const location = useLocation()

  useEffect(() => {
    setMegaMenu(null)
    setIsMenuOpen(false)
  }, [location.pathname])

  const openMegaMenu = (label: "Services" | "Solutions") => {
    setMegaMenu((current) => (current === label ? null : label))
    setIsMenuOpen(false)
  }

  return (
    <header
      data-slot="navigation"
      className={cn(
        "sticky top-0 z-40 border-b border-white/10 bg-navy-950/58 shadow-[0_18px_60px_rgb(0_0_0_/_24%)] backdrop-blur-2xl",
        className,
      )}
      {...props}
    >
      <div className="container-shell flex h-[5.75rem] items-center justify-between gap-5 sm:gap-7">
        {brand ? <div className="flex items-center gap-3">{brand}</div> : null}
        {items.length > 0 ? (
          <nav className="hidden shrink-0 items-center gap-0.5 whitespace-nowrap xl:flex" aria-label="Primary">
            {items.map((item) => {
              if (isMegaMenuLabel(item.label)) {
                const megaLabel = item.label
                const isOpen = megaMenu === item.label
                return (
                  <button
                    aria-expanded={isOpen}
                    aria-haspopup="dialog"
                    className={cn(
                      "focus-ring rounded-full px-3 py-2 text-[0.84rem] font-medium text-muted-foreground transition-all hover:bg-white/8 hover:text-foreground hover:shadow-glow 2xl:px-3.5 2xl:text-sm",
                      isOpen && "bg-white/10 text-foreground shadow-glow",
                    )}
                    key={item.href}
                    onClick={() => openMegaMenu(megaLabel)}
                    onFocus={() => preloadRoute(item.href)}
                    onMouseEnter={() => preloadRoute(item.href)}
                    type="button"
                  >
                    {item.label}
                  </button>
                )
              }

              return (
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-3 py-2 text-[0.84rem] font-medium text-muted-foreground transition-all hover:bg-white/8 hover:text-foreground hover:shadow-glow 2xl:px-3.5 2xl:text-sm",
                      isActive && "bg-white/10 text-foreground shadow-glow",
                    )
                  }
                  key={item.href}
                  onFocus={() => preloadRoute(item.href)}
                  onMouseEnter={() => preloadRoute(item.href)}
                  onTouchStart={() => preloadRoute(item.href)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>
        ) : null}
        <div className="flex shrink-0 items-center gap-2">
          {actions}
          {items.length > 0 ? (
            <>
              <Button
                aria-expanded={isMenuOpen}
                aria-label="Open navigation"
                className="xl:hidden"
                onClick={() => setIsMenuOpen((current) => !current)}
                size="icon-sm"
                type="button"
                variant="glass"
              >
                {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </Button>
              {isMenuOpen ? (
                <div className="glass-surface absolute top-[6.25rem] right-4 left-4 z-50 rounded-3xl p-4 shadow-dialog xl:hidden">
                  <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
                    <BrandLogo imageClassName="h-14 max-w-[5.3rem]" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-400">
                      Menu
                    </span>
                  </div>
                  <nav className="grid gap-1" aria-label="Mobile primary">
                    {items.map((item) => {
                      if (isMegaMenuLabel(item.label)) {
                        const megaLabel = item.label
                        return (
                          <button
                            className="focus-ring rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-white/8 hover:text-foreground"
                            key={item.href}
                            onClick={() => openMegaMenu(megaLabel)}
                            onFocus={() => preloadRoute(item.href)}
                            onMouseEnter={() => preloadRoute(item.href)}
                            type="button"
                          >
                            {item.label}
                          </button>
                        )
                      }

                      return (
                        <NavLink
                          className={({ isActive }) =>
                            cn(
                              "rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/8 hover:text-foreground",
                              isActive && "bg-white/10 text-foreground",
                            )
                          }
                          key={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          onFocus={() => preloadRoute(item.href)}
                          onMouseEnter={() => preloadRoute(item.href)}
                          onTouchStart={() => preloadRoute(item.href)}
                          to={item.href}
                        >
                          {item.label}
                        </NavLink>
                      )
                    })}
                  </nav>
                  <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 text-sm">
                    <a
                      className="focus-ring rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-slate-200 transition-colors hover:border-electric-400/35 hover:text-foreground"
                      href={CONTACT.phoneHref}
                    >
                      Call {CONTACT.phoneDisplay}
                    </a>
                    <a
                      className="focus-ring rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-slate-200 transition-colors hover:border-electric-400/35 hover:text-foreground"
                      href={CONTACT.emailHref}
                    >
                      Email {CONTACT.email}
                    </a>
                    <a
                      className="focus-ring rounded-xl border border-electric-400/25 bg-electric-500/10 px-4 py-3 text-electric-200 transition-colors hover:border-electric-300/45 hover:text-foreground"
                      href={CONTACT.whatsappHref}
                      rel="noreferrer"
                      target="_blank"
                    >
                      WhatsApp Nexora AI
                    </a>
                  </div>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      </div>
      {megaMenu ? (
        <Suspense fallback={null}>
          <MegaMenu onClose={() => setMegaMenu(null)} open={megaMenu !== null} source={megaMenu} />
        </Suspense>
      ) : null}
    </header>
  )
}

export { Navigation }
