import { Award, BriefcaseBusiness, Globe2, Rocket, ShieldCheck, Users } from "lucide-react"

import { AnimatedStat } from "@/components/sections/AnimatedStat"

const stats = [
  { label: "Projects Completed", value: 500, suffix: "+", icon: Rocket },
  { label: "Enterprise Clients", value: 250, suffix: "+", icon: BriefcaseBusiness },
  { label: "Countries Served", value: 25, suffix: "+", icon: Globe2 },
  { label: "Expert Professionals", value: 150, suffix: "+", icon: Users },
  { label: "System Uptime", value: 99, suffix: ".9%", icon: ShieldCheck },
  { label: "Years of Excellence", value: 10, suffix: "+", icon: Award },
] as const

export function EnterpriseStats() {
  return (
    <section className="container-shell -mt-8 relative z-10">
      <div className="grid gap-3 rounded-[1.75rem] border border-electric-400/20 bg-navy-950/70 p-3 shadow-elevated backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stats.map((stat) => (
          <AnimatedStat
            className="h-full bg-white/[0.045] p-5 shadow-none transition-all hover:-translate-y-1 hover:border-electric-400/30 hover:bg-white/[0.075] hover:shadow-glow"
            icon={stat.icon}
            key={stat.label}
            label={stat.label}
            suffix={stat.suffix}
            value={stat.value}
          />
        ))}
      </div>
    </section>
  )
}
