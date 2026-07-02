import { useState } from "react"
import { Sparkles } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { industries, services } from "@/data/site"
import { saveRecord } from "@/utils/storage"

export function ProposalGenerator() {
  const [requirement, setRequirement] = useState("")
  const [serviceType, setServiceType] = useState(services[0].title)
  const [industry, setIndustry] = useState(industries[0].title)
  const [timeline, setTimeline] = useState("1-3 months")
  const [budget, setBudget] = useState("$10k-$25k")
  const [proposal, setProposal] = useState("")

  function generateProposal() {
    const summary = `Sample proposal summary: Nexora AI can support a ${industry} initiative focused on ${serviceType}. Based on the stated requirement, the recommended engagement would begin with discovery, solution architecture, implementation, testing, and handover within ${timeline}, aligned to a planning budget of ${budget}.`
    setProposal(summary)
    saveRecord("nexora_proposal_requests", {
      requirement,
      serviceType,
      industry,
      timeline,
      budget,
      proposal: summary,
    })
  }

  return (
    <Card className="h-full" variant="glass">
      <CardHeader>
        <div className="mb-2 grid size-12 place-items-center rounded-xl bg-purple-500/15 text-purple-400">
          <Sparkles className="size-5" />
        </div>
        <CardTitle>AI Proposal Generator</CardTitle>
        <CardDescription>
          Generate a sample proposal outline and save the enquiry locally.
        </CardDescription>
      </CardHeader>
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm">
          Business requirement
          <Textarea
            onChange={(event) => setRequirement(event.target.value)}
            placeholder="Describe the automation, software, ERP, analytics, or infrastructure goal."
            value={requirement}
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm">
            Service type
            <select
              className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
              onChange={(event) => setServiceType(event.target.value)}
              value={serviceType}
            >
              {services.map((item) => (
                <option key={item.title}>{item.title}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            Industry
            <select
              className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
              onChange={(event) => setIndustry(event.target.value)}
              value={industry}
            >
              {industries.map((item) => (
                <option key={item.title}>{item.title}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            Timeline
            <InputLikeSelect onChange={setTimeline} value={timeline} values={["2-4 weeks", "1-3 months", "3-6 months", "6+ months"]} />
          </label>
          <label className="grid gap-2 text-sm">
            Budget
            <InputLikeSelect onChange={setBudget} value={budget} values={["Under $10k", "$10k-$25k", "$25k-$75k", "$75k+"]} />
          </label>
        </div>
        <Button onClick={generateProposal} type="button" variant="gradient">
          Generate Proposal Summary
        </Button>
        {proposal ? (
          <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 text-sm leading-6 text-foreground">
            {proposal}
          </div>
        ) : null}
      </div>
    </Card>
  )
}

function InputLikeSelect({
  onChange,
  value,
  values,
}: {
  onChange: (value: string) => void
  value: string
  values: string[]
}) {
  return (
    <select
      className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
      onChange={(event) => onChange(event.target.value)}
      value={value}
    >
      {values.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  )
}
