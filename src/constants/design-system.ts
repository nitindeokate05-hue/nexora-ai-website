export const colorPalette = {
  navy: {
    950: "#050816",
    900: "#08111f",
    800: "#0d1b2e",
    700: "#132842",
  },
  electric: {
    500: "#00a7ff",
    400: "#34c3ff",
  },
  purple: {
    500: "#7c3cff",
    400: "#a56bff",
  },
  feedback: {
    destructive: "#ff4d6d",
  },
} as const

export const spacing = {
  gutter: "clamp(1rem, 3vw, 2rem)",
  container: "min(100% - (var(--space-gutter) * 2), 1180px)",
  section: "clamp(4rem, 9vw, 8rem)",
} as const

export const shadows = {
  card: "0 18px 50px rgb(0 0 0 / 34%)",
  elevated: "0 26px 80px rgb(0 0 0 / 45%)",
  dialog: "0 32px 96px rgb(0 0 0 / 55%)",
  glow: "0 0 36px rgb(0 167 255 / 22%)",
  purpleGlow: "0 0 42px rgb(124 60 255 / 24%)",
} as const

export const typography = {
  body: '"Inter Variable", Inter, ui-sans-serif, system-ui, sans-serif',
  display:
    '"Plus Jakarta Sans Variable", "Plus Jakarta Sans", Inter, ui-sans-serif, system-ui, sans-serif',
} as const
