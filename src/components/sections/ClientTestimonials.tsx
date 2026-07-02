import { Quote, Star } from "lucide-react"

import { Reveal } from "@/components/sections/Reveal"

const testimonials = [
  {
    role: "Operations Head",
    feedback:
      "Nexora AI helped us reduce repetitive operational work and gave our team a clearer view of daily execution.",
  },
  {
    role: "IT Manager",
    feedback:
      "The automation planning was structured, secure, and practical. Our internal teams could adopt the workflow quickly.",
  },
  {
    role: "Business Owner",
    feedback:
      "Their approach made technology feel simple. We moved from manual follow-ups to a cleaner digital process.",
  },
  {
    role: "HR Director",
    feedback:
      "Employee requests, document handling, and reporting became much easier after the new automation flow was introduced.",
  },
  {
    role: "Finance Lead",
    feedback:
      "The dashboards and reporting automations gave leadership faster answers without waiting on manual spreadsheets.",
  },
  {
    role: "Support Manager",
    feedback:
      "Ticket visibility improved immediately. The experience feels modern, organized, and built for growing teams.",
  },
] as const

export function ClientTestimonials() {
  return (
    <section className="container-shell py-16 sm:py-20" aria-labelledby="client-testimonials">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-4 inline-flex rounded-full border border-electric-400/25 bg-electric-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-electric-300">
          What Our Clients Say
        </p>
        <h2
          className="font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl"
          id="client-testimonials"
        >
          Positive Feedback from Growing Businesses
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          Businesses trust Nexora AI for automation, analytics, and digital
          transformation that make everyday operations faster and easier to manage.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.role}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-card backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-electric-400/35 hover:bg-white/[0.07] hover:shadow-glow">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric-300/80 to-transparent opacity-60" />
              <div className="absolute -right-12 -top-12 size-32 rounded-full bg-purple-500/15 blur-3xl transition-opacity group-hover:opacity-90" />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="grid size-11 place-items-center rounded-2xl border border-electric-400/25 bg-electric-500/12 text-electric-200 shadow-glow">
                    <Quote className="size-5" />
                  </div>
                  <div className="flex gap-1 text-amber-300" aria-label="5 out of 5 star rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star className="size-4 fill-current" key={index} />
                    ))}
                  </div>
                </div>
                <p className="text-base leading-8 text-slate-200">
                  “{testimonial.feedback}”
                </p>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {testimonial.role}
                  </h3>
                  <p className="mt-1 text-sm text-electric-200">
                    Automation and digital transformation client
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
