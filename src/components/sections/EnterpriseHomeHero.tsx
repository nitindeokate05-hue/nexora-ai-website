import { lazy, Suspense } from "react"
import { ArrowRight, CalendarDays, Sparkles, Star } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { NeuralBackground } from "@/components/sections/NeuralBackground"
import { Reveal } from "@/components/sections/Reveal"
import { ROUTES } from "@/constants/routes"

const avatars = ["JD", "AK", "SM", "RL"] as const
const EnterpriseDashboardPreview = lazy(() =>
  import("@/components/sections/EnterpriseDashboardPreview").then((module) => ({
    default: module.EnterpriseDashboardPreview,
  })),
)

export function EnterpriseHomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <NeuralBackground />
      <div className="light-rays opacity-60" />
      <div className="container-shell relative grid min-h-[calc(100svh-5.75rem)] items-center gap-10 py-14 lg:grid-cols-[0.82fr_1.18fr] lg:py-14 xl:gap-14 2xl:py-16">
        <Reveal>
          <div className="max-w-2xl">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-electric-400/25 bg-electric-500/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-electric-400 shadow-glow sm:text-sm">
              <Sparkles className="size-4 text-electric-400" />
              AI powered solutions for modern businesses
            </p>
            <h1 className="font-heading text-5xl font-semibold leading-[1.02] tracking-normal text-foreground sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              Enterprise AI systems built for{" "}
              <span className="gradient-text">automation, security, and growth.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
              Nexora AI delivers intelligent automation, cloud, analytics, ERP, and
              infrastructure solutions for global teams that need measurable execution.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="xl" variant="gradient">
                <Link to={ROUTES.solutions}>
                  Explore Solutions
                  <ArrowRight className="size-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="glass">
                <Link to={ROUTES.booking}>
                  Schedule Demo
                  <CalendarDays className="size-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <span
                    className="grid size-11 place-items-center rounded-full border-2 border-navy-950 bg-[image:var(--gradient-luxury)] font-heading text-xs font-bold text-white shadow-glow"
                    key={avatar}
                    style={{ zIndex: avatars.length - index }}
                  >
                    {avatar}
                  </span>
                ))}
              </div>
              <div>
                <div className="mb-1 flex gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star className="size-4 fill-current" key={index} />
                  ))}
                </div>
                <p className="text-sm font-medium text-foreground">
                  Positive feedback from growing businesses
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:-mt-8 xl:-mt-10">
          <Suspense fallback={<DashboardPreviewSkeleton />}>
            <EnterpriseDashboardPreview />
          </Suspense>
        </Reveal>
      </div>
    </section>
  )
}

function DashboardPreviewSkeleton() {
  return (
    <div className="relative mx-auto min-h-[34rem] w-full max-w-[740px] rounded-[1.75rem] border border-electric-400/25 bg-navy-950/70 p-3 shadow-elevated backdrop-blur-2xl 2xl:max-w-[800px]">
      <div className="grid h-full min-h-[32rem] place-items-center rounded-[1.35rem] border border-white/10 bg-white/[0.035]">
        <div className="grid size-16 place-items-center rounded-3xl border border-electric-400/25 bg-electric-500/10">
          <img
            alt=""
            className="h-11 w-auto rounded-xl object-contain"
            decoding="async"
            src="/nexora-ai-official-logo-320.png"
          />
        </div>
      </div>
    </div>
  )
}
