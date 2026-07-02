import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, Search, X } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { ROUTES } from "@/constants/routes"
import {
  allMegaServices,
  megaCategories,
  megaMenuHighlights,
  megaServicesByCategory,
  megaTabs,
  type MegaService,
} from "@/data/mega-menu"
import { cn } from "@/utils/cn"

type MegaMenuProps = {
  onClose: () => void
  open: boolean
  source: "Services" | "Solutions" | null
}

const tabCategoryMap: Record<string, string[]> = {
  "All Services": [...megaCategories],
  "AI Automation": ["AI Automation", "AI Agent Development", "Business Automation"],
  "Software Development": ["Software Development", "Website & App Development"],
  "ERP & CRM": ["ERP Solutions", "CRM Solutions"],
  "Data & Analytics": ["Power BI & Analytics"],
  "IT Infrastructure": ["IT Infrastructure", "Network Solutions"],
  "Cloud & DevOps": ["Cloud Services"],
  "Cyber Security": ["Cyber Security"],
  Support: ["Helpdesk Support"],
}

function categoryServices(category: string) {
  return megaServicesByCategory.find((group) => group.category === category)?.services ?? []
}

function uniqueServices(services: MegaService[]) {
  const seen = new Set<string>()
  return services.filter((service) => {
    if (seen.has(service.title)) {
      return false
    }
    seen.add(service.title)
    return true
  })
}

export function MegaMenu({ onClose, open, source }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState<(typeof megaTabs)[number]>("All Services")
  const [activeCategory, setActiveCategory] = useState<(typeof megaCategories)[number]>("Recent Services")
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, open])

  useEffect(() => {
    if (source === "Solutions") {
      setActiveTab("AI Automation")
      setActiveCategory("Business Automation")
      return
    }
    setActiveTab("All Services")
    setActiveCategory("Recent Services")
  }, [source])

  const availableCategories = useMemo(() => tabCategoryMap[activeTab] ?? [...megaCategories], [activeTab])
  const normalizedQuery = query.trim().toLowerCase()
  const desktopServices = useMemo(() => {
    if (normalizedQuery) {
      return uniqueServices(
        allMegaServices.filter((service) =>
          `${service.title} ${service.description} ${service.category}`
            .toLowerCase()
            .includes(normalizedQuery),
        ),
      )
    }

    if (activeTab === "All Services") {
      return categoryServices(activeCategory)
    }

    return uniqueServices(availableCategories.flatMap(categoryServices))
  }, [activeCategory, activeTab, availableCategories, normalizedQuery])

  const mobileGroups = useMemo(() => {
    if (normalizedQuery) {
      return [
        {
          category: "Matching Services",
          services: desktopServices,
        },
      ]
    }

    return availableCategories.map((category) => ({
      category,
      services: categoryServices(category),
    }))
  }, [availableCategories, desktopServices, normalizedQuery])

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            aria-label="Close services menu"
            className="fixed inset-0 top-20 z-40 cursor-default bg-navy-950/45 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            onClick={onClose}
            type="button"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.section
            aria-label="Services and solutions mega menu"
            aria-modal="true"
            className="fixed inset-x-2 top-[5.25rem] z-50 mx-auto max-h-[calc(100svh-6rem)] max-w-[min(96rem,calc(100vw-1rem))] overflow-hidden rounded-[2rem] border border-electric-400/25 bg-navy-950/84 shadow-[0_30px_120px_rgb(0_0_0_/_62%),0_0_80px_rgb(0_167_255_/_14%),0_0_120px_rgb(124_60_255_/_12%)] backdrop-blur-2xl sm:inset-x-4"
            role="dialog"
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgb(0_167_255_/_18%),transparent_30rem),radial-gradient(circle_at_88%_18%,rgb(124_60_255_/_20%),transparent_28rem)]" />
            <div className="data-streams pointer-events-none opacity-35" />
            <div className="relative grid max-h-[calc(100svh-6rem)] gap-5 overflow-y-auto overflow-x-hidden p-4 sm:p-5 lg:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-electric-400">
                    {source === "Solutions" ? "Solution Architecture" : "Enterprise Capabilities"}
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                    Find the right Nexora AI service.
                  </h2>
                </div>
                <button
                  aria-label="Close mega menu"
                  className="focus-ring absolute top-4 right-4 grid size-10 place-items-center rounded-full border border-white/10 bg-white/6 text-muted-foreground transition-colors hover:text-foreground lg:static"
                  onClick={onClose}
                  type="button"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
                <label className="relative block">
                  <span className="sr-only">Search services</span>
                  <Search className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-electric-400" />
                  <input
                    aria-label="Search services"
                    className="h-12 w-full rounded-2xl border border-white/12 bg-white/7 pr-4 pl-11 text-sm text-foreground shadow-inner outline-none transition focus:border-electric-400/60 focus:ring-2 focus:ring-electric-400/20"
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search AI, ERP, websites, marketing, video, cloud..."
                    value={query}
                  />
                </label>
                <div className="flex flex-wrap gap-2">
                  {megaMenuHighlights.map((item) => (
                    <span
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs text-muted-foreground"
                      key={item.label}
                    >
                      <item.icon className="size-3.5 text-electric-400" />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1">
                {megaTabs.map((tab) => (
                  <button
                    aria-pressed={activeTab === tab}
                    className={cn(
                      "focus-ring shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
                      activeTab === tab
                        ? "border-electric-400/40 bg-electric-500/14 text-foreground shadow-glow"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:text-foreground",
                    )}
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab)
                      setActiveCategory((tabCategoryMap[tab]?.[0] ?? "Recent Services") as (typeof megaCategories)[number])
                    }}
                    type="button"
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="hidden gap-5 lg:grid lg:grid-cols-[17rem_1fr]">
                <aside className="glass-surface sticky top-0 max-h-[27rem] overflow-y-auto rounded-3xl p-3">
                  {megaCategories.map((category) => {
                    const enabled = activeTab === "All Services" || availableCategories.includes(category)
                    return (
                      <button
                        className={cn(
                          "focus-ring flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm transition",
                          activeCategory === category
                            ? "bg-electric-500/14 text-foreground shadow-glow"
                            : "text-muted-foreground hover:bg-white/7 hover:text-foreground",
                          !enabled && "opacity-45",
                        )}
                        disabled={!enabled}
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        type="button"
                      >
                        {category}
                        <ArrowRight className="size-3.5" />
                      </button>
                    )
                  })}
                </aside>

                <div className="grid max-h-[27rem] gap-3 overflow-y-auto pr-1 xl:grid-cols-2">
                  {desktopServices.map((service) => (
                    <ServiceCard key={`${service.category}-${service.title}`} onClose={onClose} service={service} />
                  ))}
                  {desktopServices.length === 0 ? <EmptyState /> : null}
                </div>
              </div>

              <div className="grid gap-3 lg:hidden">
                {mobileGroups.map((group, index) => (
                  <details
                    className="glass-surface group rounded-3xl p-3"
                    key={group.category}
                    open={index === 0}
                  >
                    <summary className="focus-ring flex cursor-pointer list-none items-center justify-between rounded-2xl px-2 py-2 font-heading text-base font-semibold text-foreground">
                      {group.category}
                      <ArrowRight className="size-4 transition-transform group-open:rotate-90" />
                    </summary>
                    <div className="mt-3 grid gap-3">
                      {group.services.map((service) => (
                        <ServiceCard key={`${group.category}-${service.title}`} compact onClose={onClose} service={service} />
                      ))}
                    </div>
                  </details>
                ))}
              </div>

              <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:flex-wrap">
                <Button asChild variant="gradient">
                  <Link onClick={onClose} to={ROUTES.services}>
                    Explore All Services
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link onClick={onClose} to={ROUTES.booking}>
                    Book Free Consultation
                  </Link>
                </Button>
                <Button asChild variant="glass">
                  <Link onClick={onClose} to={ROUTES.contact}>
                    Talk to Automation Expert
                  </Link>
                </Button>
              </div>
            </div>
          </motion.section>
        </>
      ) : null}
    </AnimatePresence>
  )
}

function ServiceCard({
  compact = false,
  onClose,
  service,
}: {
  compact?: boolean
  onClose: () => void
  service: MegaService
}) {
  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.055] p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-electric-400/35 hover:bg-white/[0.08] hover:shadow-glow">
      <div className="flex gap-4">
        <div className="grid size-11 shrink-0 place-items-center rounded-2xl border border-electric-400/20 bg-electric-500/12 text-electric-400 shadow-[0_0_28px_rgb(0_167_255_/_14%)]">
          <service.icon className="size-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-heading text-base font-semibold text-foreground">{service.title}</h3>
          <p className={cn("mt-1 text-sm leading-6 text-muted-foreground", compact && "leading-7")}>
            {service.description}
          </p>
          <Button asChild className="mt-3 h-9 px-3 text-xs" size="sm" variant="ghost">
            <Link onClick={onClose} to={ROUTES.services}>
              Explore
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-muted-foreground xl:col-span-2">
      No matching services found. Try a broader search or talk to an automation expert.
    </div>
  )
}
