import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/utils"

type AnimatedStatProps = {
  value: number
  suffix?: string
  label: string
  icon?: LucideIcon
  className?: string
}

export function AnimatedStat({ value, suffix = "", label, icon: Icon, className }: AnimatedStatProps) {
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => `${Math.round(latest)}${suffix}`)
  const [display, setDisplay] = useState(`0${suffix}`)

  useEffect(() => {
    const unsubscribe = rounded.on("change", setDisplay)
    return unsubscribe
  }, [rounded])

  return (
    <motion.div
      className={cn("rounded-2xl border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-xl", className)}
      onViewportEnter={() => motionValue.set(value)}
      viewport={{ once: true }}
    >
      {Icon ? <Icon className="mb-3 size-7 text-electric-400" /> : null}
      <motion.p className="font-heading text-3xl font-semibold text-foreground">{display}</motion.p>
      <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
    </motion.div>
  )
}
