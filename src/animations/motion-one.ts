import { animate, inView, stagger, type AnimationOptions } from "motion"

export const motionOneTransition: AnimationOptions = {
  duration: 0.48,
  ease: [0.22, 1, 0.36, 1],
}

export const motionOneStagger = stagger(0.08, { startDelay: 0.04 })

export { animate, inView }
