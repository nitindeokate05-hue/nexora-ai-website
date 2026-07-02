import { motion } from "framer-motion"
import { Activity, BrainCircuit, DatabaseZap, LockKeyhole, Network, Sparkles } from "lucide-react"

const nodes = [
  { icon: BrainCircuit, label: "Reasoning Layer", x: "12%", y: "22%" },
  { icon: DatabaseZap, label: "Data Fabric", x: "69%", y: "18%" },
  { icon: Network, label: "Automation Mesh", x: "78%", y: "66%" },
  { icon: LockKeyhole, label: "Security Core", x: "20%", y: "72%" },
]

export function AICommandVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="aurora-field rounded-full" />
      <motion.div
        animate={{ rotate: 360 }}
        className="absolute inset-8 rounded-full border border-dashed border-electric-400/25"
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        className="absolute inset-20 rounded-full border border-purple-400/25"
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      />
      <div className="scanline glass-surface absolute inset-[24%] grid place-items-center rounded-[2rem] text-center shadow-elevated">
        <Sparkles className="mb-3 size-8 text-electric-400" />
        <p className="font-heading text-4xl font-semibold gradient-text">NEXORA</p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          AI Command Core
        </p>
      </div>
      {nodes.map((node, index) => (
        <motion.div
          animate={{ y: [0, -12, 0] }}
          className="glass-surface absolute flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-medium text-foreground"
          key={node.label}
          style={{ left: node.x, top: node.y }}
          transition={{ delay: index * 0.25, duration: 4.5, repeat: Infinity }}
        >
          <node.icon className="size-4 text-electric-400" />
          {node.label}
        </motion.div>
      ))}
      <div className="absolute right-6 bottom-8 rounded-2xl border border-electric-400/25 bg-navy-950/70 p-4 shadow-glow backdrop-blur-xl">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Activity className="size-4 text-electric-400" />
          Live Automation Pulse
        </div>
        <div className="mt-3 grid gap-2">
          {[82, 64, 92].map((width) => (
            <span className="h-2 rounded-full bg-white/10" key={width}>
              <motion.span
                animate={{ width: [`${width - 18}%`, `${width}%`, `${width - 8}%`] }}
                className="block h-full rounded-full bg-[image:var(--gradient-luxury)]"
                transition={{ duration: 2.8, repeat: Infinity }}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
