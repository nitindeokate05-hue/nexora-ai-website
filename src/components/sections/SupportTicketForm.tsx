import { useState, type FormEvent } from "react"
import { LifeBuoy } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { saveRecord } from "@/utils/storage"

export function SupportTicketForm() {
  const [saved, setSaved] = useState(false)

  function submitTicket(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    saveRecord("nexora_support_tickets", Object.fromEntries(formData))
    event.currentTarget.reset()
    setSaved(true)
  }

  return (
    <Card variant="gradient">
      <CardHeader>
        <div className="mb-2 grid size-12 place-items-center rounded-xl bg-electric-500/12 text-electric-400">
          <LifeBuoy className="size-5" />
        </div>
        <CardTitle>Support Ticket</CardTitle>
        <CardDescription>
          Create a local placeholder support request for future portal integration.
        </CardDescription>
      </CardHeader>
      <form className="grid gap-4" onSubmit={submitTicket}>
        <div className="grid gap-4 md:grid-cols-2">
          <Input aria-label="Name" name="name" placeholder="Name" required />
          <Input aria-label="Email" name="email" placeholder="Email" required type="email" />
          <Input aria-label="Company" name="company" placeholder="Company" />
          <select
            aria-label="Issue type"
            className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
            name="issueType"
            required
          >
            <option>Technical Issue</option>
            <option>Billing</option>
            <option>Project Support</option>
            <option>Security</option>
            <option>General</option>
          </select>
          <select
            aria-label="Priority"
            className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
            name="priority"
            required
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
            <option>Critical</option>
          </select>
          <Input aria-label="Attachment placeholder" name="attachment" placeholder="Attachment placeholder" />
        </div>
        <Textarea aria-label="Message" name="message" placeholder="Message" required />
        <Button type="submit" variant="gradient">
          Save Ticket
        </Button>
        {saved ? (
          <p className="text-sm text-electric-400" role="status">
            Support ticket saved locally.
          </p>
        ) : null}
      </form>
    </Card>
  )
}
