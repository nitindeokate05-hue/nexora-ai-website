import { motion, type HTMLMotionProps } from "framer-motion"

import { slideUp } from "@/animations"

export function Reveal({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      variants={slideUp}
      viewport={{ once: true, margin: "-80px" }}
      whileInView="visible"
      {...props}
    >
      {children}
    </motion.div>
  )
}
