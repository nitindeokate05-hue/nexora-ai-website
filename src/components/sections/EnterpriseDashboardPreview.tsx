import { motion } from "framer-motion"
import {
  Activity,
  BarChart3,
  Bot,
  Building2,
  CircleDollarSign,
  Headphones,
  ServerCog,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import type { ReactNode } from "react"

const kpis = [
  { label: "Revenue", value: "$2.45M", delta: "+12.5%", icon: CircleDollarSign, positive: true },
  { label: "Active Clients", value: "1,245", delta: "+15.3%", icon: Building2, positive: true },
  { label: "AI Automations", value: "320", delta: "+28.7%", icon: Bot, positive: true },
  { label: "Support Tickets", value: "86", delta: "-18.6%", icon: Headphones, positive: false },
  { label: "Infra Health", value: "99.9%", delta: "+0.6%", icon: ShieldCheck, positive: true },
  { label: "Growth", value: "18.6%", delta: "+11.2%", icon: TrendingUp, positive: true },
] as const

const activity = [
  ["New client onboarded", "10:30 AM"],
  ["AI automation deployed", "09:15 AM"],
  ["Security scan completed", "08:45 AM"],
] as const

const infrastructure = ["Cloud Servers", "Databases", "Storage", "Network"] as const

export function EnterpriseDashboardPreview() {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      className="relative mx-auto w-full max-w-[740px] 2xl:max-w-[800px]"
      transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
    >
      <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_25%_15%,rgb(0_167_255_/_22%),transparent_24rem),radial-gradient(circle_at_80%_30%,rgb(124_60_255_/_24%),transparent_22rem)] blur-2xl" />
      <section className="relative overflow-hidden rounded-[1.75rem] border border-electric-400/35 bg-[#061027]/88 p-3 shadow-[0_28px_100px_rgb(0_0_0_/_56%),0_0_60px_rgb(0_167_255_/_18%),0_0_80px_rgb(124_60_255_/_14%)] backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgb(255_255_255_/_9%),transparent_34%,rgb(124_60_255_/_10%))]" />
        <div className="relative flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4 px-1">
            <div>
              <p className="font-heading text-base font-semibold text-foreground sm:text-lg">
                Nexora AI <span className="text-electric-400">Dashboard</span>
              </p>
              <p className="mt-1 text-xs text-muted-foreground">May 1 - May 31, 2026</p>
            </div>
            <div className="hidden gap-2 sm:flex">
              <span className="rounded-xl border border-white/10 bg-white/6 px-3 py-2 text-xs text-muted-foreground">
                Export
              </span>
              <span className="rounded-xl border border-white/10 bg-white/6 px-3 py-2 text-xs text-muted-foreground">
                Live
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-6">
            {kpis.map((item, index) => (
              <motion.article
                className="rounded-2xl border border-white/10 bg-white/[0.055] p-2.5 shadow-card"
                initial={{ opacity: 0, y: 16 }}
                key={item.label}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                <div className="flex items-center gap-2 text-[0.68rem] text-muted-foreground">
                  <item.icon className="size-3.5 text-electric-400" />
                  {item.label}
                </div>
                <p className="mt-1.5 font-heading text-base font-semibold text-foreground">{item.value}</p>
                <p className={item.positive ? "mt-1 text-xs text-emerald-300" : "mt-1 text-xs text-rose-300"}>
                  {item.delta}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="grid gap-3 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <DashboardPanel title="Revenue Overview">
              <p className="mb-3 font-heading text-xl font-semibold">$2.45M</p>
              <LineChart />
            </DashboardPanel>
            <DashboardPanel title="Clients by Industry">
              <div className="grid items-center gap-4 sm:grid-cols-[8rem_1fr] lg:grid-cols-1 xl:grid-cols-[8rem_1fr]">
                <DonutChart />
                <div className="grid gap-2 text-xs">
                  {[
                    ["IT & Software", "35%", "#34c3ff"],
                    ["Finance", "25%", "#2563eb"],
                    ["Healthcare", "15%", "#a56bff"],
                    ["Manufacturing", "15%", "#818cf8"],
                    ["Others", "10%", "#94a3b8"],
                  ].map(([label, value, color]) => (
                    <div className="flex items-center justify-between gap-3" key={label}>
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <span className="size-2 rounded-full" style={{ backgroundColor: color }} />
                        {label}
                      </span>
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </DashboardPanel>
            <DashboardPanel title="AI Automation Trend">
              <TrendGraph />
            </DashboardPanel>
          </div>

          <div className="grid gap-3 lg:grid-cols-[1fr_1.25fr]">
            <DashboardPanel title="Infrastructure Status">
              <div className="grid gap-3">
                {infrastructure.map((item) => (
                  <div className="flex items-center justify-between gap-3 text-xs" key={item}>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <ServerCog className="size-3.5 text-electric-400" />
                      {item}
                    </span>
                    <span className="flex items-center gap-2 text-emerald-300">
                      <span className="size-1.5 rounded-full bg-emerald-300" />
                      Healthy
                    </span>
                  </div>
                ))}
              </div>
            </DashboardPanel>
            <DashboardPanel title="Recent Activity">
              <div className="grid gap-3">
                {activity.map(([label, time]) => (
                  <div className="flex items-center justify-between gap-3 text-xs" key={label}>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Activity className="size-3.5 text-purple-400" />
                      {label}
                    </span>
                    <span className="text-muted-foreground">{time}</span>
                  </div>
                ))}
              </div>
            </DashboardPanel>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

function DashboardPanel({ children, title }: { children: ReactNode; title: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold text-foreground sm:text-sm">
        <BarChart3 className="size-4 text-electric-400" />
        {title}
      </h3>
      {children}
    </article>
  )
}

function LineChart() {
  return (
    <svg aria-label="Revenue line chart" className="h-24 w-full overflow-visible sm:h-28" viewBox="0 0 320 130">
      <defs>
        <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#00a7ff" stopOpacity="0.34" />
          <stop offset="1" stopColor="#7c3cff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="lineStroke" x1="0" x2="1">
          <stop stopColor="#34c3ff" />
          <stop offset="1" stopColor="#7c3cff" />
        </linearGradient>
      </defs>
      {[28, 58, 88].map((y) => (
        <line key={y} stroke="rgba(255,255,255,.08)" x1="0" x2="320" y1={y} y2={y} />
      ))}
      <path d="M0 92 L25 88 L48 54 L70 62 L92 55 L115 72 L140 40 L164 58 L188 50 L212 74 L236 52 L260 57 L285 75 L320 48 L320 130 L0 130 Z" fill="url(#lineFill)" />
      <motion.path
        d="M0 92 L25 88 L48 54 L70 62 L92 55 L115 72 L140 40 L164 58 L188 50 L212 74 L236 52 L260 57 L285 75 L320 48"
        fill="none"
        initial={{ pathLength: 0 }}
        stroke="url(#lineStroke)"
        strokeLinecap="round"
        strokeWidth="3"
        viewport={{ once: true }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  )
}

function DonutChart() {
  return (
    <div className="relative mx-auto grid size-28 place-items-center rounded-full bg-[conic-gradient(from_180deg,#34c3ff_0_35%,#2563eb_35%_60%,#7c3cff_60%_75%,#818cf8_75%_90%,#94a3b8_90%_100%)] shadow-glow">
      <div className="grid size-18 place-items-center rounded-full bg-navy-950/92 text-center">
        <span className="font-heading text-lg font-semibold">1,245</span>
        <span className="-mt-5 text-[0.65rem] text-muted-foreground">Total</span>
      </div>
    </div>
  )
}

function TrendGraph() {
  return (
    <svg aria-label="AI automation trend graph" className="h-28 w-full overflow-visible sm:h-32" viewBox="0 0 300 150">
      <defs>
        <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
          <stop stopColor="#7c3cff" stopOpacity=".46" />
          <stop offset="1" stopColor="#00a7ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[35, 75, 115].map((y) => (
        <line key={y} stroke="rgba(255,255,255,.08)" x1="0" x2="300" y1={y} y2={y} />
      ))}
      <path d="M0 118 C28 108 34 72 62 66 C93 58 103 90 130 92 C163 94 176 56 204 64 C230 72 238 50 258 45 C278 40 288 60 300 54 L300 150 L0 150 Z" fill="url(#trendFill)" />
      <motion.path
        d="M0 118 C28 108 34 72 62 66 C93 58 103 90 130 92 C163 94 176 56 204 64 C230 72 238 50 258 45 C278 40 288 60 300 54"
        fill="none"
        initial={{ pathLength: 0 }}
        stroke="#8b5cf6"
        strokeLinecap="round"
        strokeWidth="3"
        viewport={{ once: true }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <circle cx="204" cy="64" fill="#eaf4ff" r="4" />
      <text fill="#c2cee3" fontSize="10" x="212" y="54">320</text>
    </svg>
  )
}
