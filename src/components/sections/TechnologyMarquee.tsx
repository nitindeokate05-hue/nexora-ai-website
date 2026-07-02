import { technologies } from "@/data/site"

export function TechnologyMarquee() {
  const items = [...technologies, ...technologies]

  return (
    <div className="container-shell overflow-hidden py-10">
      <div className="luxury-divider mb-8" />
      <div className="marquee-motion flex w-max gap-3">
        {items.map((item, index) => (
          <span
            className="rounded-full border border-white/10 bg-white/6 px-5 py-2 text-sm font-semibold text-muted-foreground backdrop-blur-xl"
            key={`${item}-${index}`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="luxury-divider mt-8" />
    </div>
  )
}
