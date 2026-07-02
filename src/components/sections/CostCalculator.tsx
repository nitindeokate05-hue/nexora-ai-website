import { useMemo, useState } from "react"
import { Calculator, Send } from "lucide-react"

import { Button, Card, CardDescription, CardHeader, CardTitle, Input } from "@/components"
import { costServiceMultipliers } from "@/data/site"
import { saveRecord } from "@/utils"

const sizes = {
  Startup: 5000,
  Growth: 12000,
  Enterprise: 28000,
} as const

const timelines = {
  "2-4 weeks": 1.2,
  "1-3 months": 1,
  "3-6 months": 0.9,
  "6+ months": 0.82,
} as const

const budgets = ["Under $10k", "$10k-$25k", "$25k-$75k", "$75k+"] as const

type ServiceName = keyof typeof costServiceMultipliers

export function CostCalculator() {
  const [service, setService] = useState<ServiceName>("AI Automation")
  const [projectSize, setProjectSize] = useState<keyof typeof sizes>("Growth")
  const [timeline, setTimeline] = useState<keyof typeof timelines>("1-3 months")
  const [budget, setBudget] = useState<(typeof budgets)[number]>("$10k-$25k")
  const [email, setEmail] = useState("")
  const [saved, setSaved] = useState(false)

  const estimate = useMemo(() => {
    const base = sizes[projectSize] * costServiceMultipliers[service] * timelines[timeline]
    return {
      low: Math.round(base * 0.85),
      high: Math.round(base * 1.35),
    }
  }, [projectSize, service, timeline])

  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  })

  function requestQuote() {
    saveRecord("nexora_cost_enquiries", {
      service,
      projectSize,
      timeline,
      budget,
      email,
      estimate,
    })
    setSaved(true)
  }

  return (
    <Card className="h-full" variant="gradient">
      <CardHeader>
        <div className="mb-2 grid size-12 place-items-center rounded-xl bg-electric-500/12 text-electric-400">
          <Calculator className="size-5" />
        </div>
        <CardTitle>AI Cost Calculator</CardTitle>
        <CardDescription>
          Estimate a planning range before requesting a final quote.
        </CardDescription>
      </CardHeader>
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm">
          Service
          <select
            className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
            onChange={(event) => setService(event.target.value as ServiceName)}
            value={service}
          >
            {Object.keys(costServiceMultipliers).map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm">
            Project size
            <select
              className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
              onChange={(event) =>
                setProjectSize(event.target.value as keyof typeof sizes)
              }
              value={projectSize}
            >
              {Object.keys(sizes).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            Timeline
            <select
              className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
              onChange={(event) =>
                setTimeline(event.target.value as keyof typeof timelines)
              }
              value={timeline}
            >
              {Object.keys(timelines).map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="grid gap-2 text-sm">
          Budget range
          <select
            className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
            onChange={(event) => setBudget(event.target.value as (typeof budgets)[number])}
            value={budget}
          >
            {budgets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Email for quote follow-up
          <Input
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@company.com"
            type="email"
            value={email}
          />
        </label>
        <div className="rounded-xl border border-electric-500/30 bg-electric-500/10 p-4">
          <p className="text-sm text-muted-foreground">Estimated range</p>
          <p className="mt-1 font-heading text-3xl font-semibold text-foreground">
            {formatter.format(estimate.low)} - {formatter.format(estimate.high)}
          </p>
        </div>
        <Button onClick={requestQuote} type="button" variant="gradient">
          <Send className="size-4" />
          Request Final Quote
        </Button>
        {saved ? (
          <p className="text-sm text-electric-400" role="status">
            Quote enquiry saved locally.
          </p>
        ) : null}
      </div>
    </Card>
  )
}
