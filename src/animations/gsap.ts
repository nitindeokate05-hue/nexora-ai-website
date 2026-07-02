import gsap from "gsap"

export const gsapDefaults = {
  duration: 0.8,
  ease: "power3.out",
} as const

export function configureGsap() {
  gsap.defaults(gsapDefaults)
  return gsap
}

export { gsap }
