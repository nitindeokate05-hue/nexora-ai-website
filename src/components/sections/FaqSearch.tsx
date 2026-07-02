import { useMemo, useState } from "react"
import { Search } from "lucide-react"

import { Card } from "@/components/ui/card"
import { SectionHeader } from "@/components/sections/SectionHeader"
import { faqCategories, faqs } from "@/data/site"
import { cn } from "@/utils/cn"

export function FaqSearch() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<string>("All")

  const filteredFaqs = useMemo(
    () =>
      faqs.filter((faq) => {
        const matchesCategory = category === "All" || faq.category === category
        const searchText = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase()
        return matchesCategory && searchText.includes(query.toLowerCase())
      }),
    [category, query],
  )

  return (
    <section className="container-shell section-spacing" id="faq">
      <SectionHeader
        description="Search common questions across automation, software, ERP, BI, cloud, pricing, and support."
        eyebrow="Knowledge Base"
        title="Find answers fast"
      />
      <div className="mx-auto mb-6 flex max-w-3xl flex-col gap-3 sm:flex-row">
        <label className="relative flex-1">
          <span className="sr-only">Search FAQ</span>
          <Search className="pointer-events-none absolute top-3 left-3 size-5 text-muted-foreground" />
          <input
            className="h-12 w-full rounded-xl border border-input bg-white/5 pr-4 pl-11 text-sm outline-none focus:border-electric-400 focus:ring-2 focus:ring-ring/35"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search knowledge base"
            value={query}
          />
        </label>
        <select
          aria-label="FAQ category"
          className="h-12 rounded-xl border border-input bg-navy-900 px-3 text-sm"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        >
          <option>All</option>
          {faqCategories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filteredFaqs.map((faq) => (
          <Card className="h-full" key={faq.question} variant="glass">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-electric-400">
              {faq.category}
            </p>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {faq.question}
            </h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
          </Card>
        ))}
      </div>
      <p className={cn("mt-6 text-center text-sm text-muted-foreground", filteredFaqs.length && "sr-only")}>
        No FAQ results found.
      </p>
    </section>
  )
}
