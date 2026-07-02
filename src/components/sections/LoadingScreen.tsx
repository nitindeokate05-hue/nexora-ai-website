import { motion } from "framer-motion"

export function LoadingScreen() {
  return (
    <div className="container-shell grid min-h-[55svh] place-items-center py-20">
      <div className="text-center">
        <motion.div
          animate={{ rotate: [0, 4, -4, 0], scale: [1, 1.04, 1] }}
          className="mx-auto mb-5 grid size-16 place-items-center rounded-3xl border border-electric-400/35 bg-navy-950/70 shadow-glow"
          transition={{ duration: 1.6, ease: "linear", repeat: Infinity }}
        >
          <img
            alt=""
            className="h-12 w-auto rounded-xl object-contain"
            sizes="72px"
            src="/nexora-ai-official-logo-320.png"
            srcSet="/nexora-ai-official-logo-320.png 320w, /nexora-ai-official-logo-640.png 640w"
          />
        </motion.div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Loading Nexora AI
        </p>
      </div>
    </div>
  )
}
