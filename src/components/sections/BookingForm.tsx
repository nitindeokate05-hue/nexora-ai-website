import { useState, type FormEvent } from "react"
import { CalendarCheck } from "lucide-react"

import { Button, Card, CardDescription, CardHeader, CardTitle, Input, Textarea } from "@/components"
import { services } from "@/data/site"
import { saveRecord } from "@/utils"

export function BookingForm() {
  const [saved, setSaved] = useState(false)

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    saveRecord("nexora_consultation_bookings", Object.fromEntries(formData))
    event.currentTarget.reset()
    setSaved(true)
  }

  return (
    <Card variant="gradient">
      <CardHeader>
        <div className="mb-2 grid size-12 place-items-center rounded-xl bg-electric-500/12 text-electric-400">
          <CalendarCheck className="size-5" />
        </div>
        <CardTitle>Book Free Consultation</CardTitle>
        <CardDescription>
          Submit preferred details and the booking request will be saved locally.
        </CardDescription>
      </CardHeader>
      <form className="grid gap-4" onSubmit={submitBooking}>
        <div className="grid gap-4 md:grid-cols-2">
          <Input aria-label="Name" name="name" placeholder="Name" required />
          <Input aria-label="Email" name="email" placeholder="Email" required type="email" />
          <Input aria-label="Phone" name="phone" placeholder="Phone" type="tel" />
          <Input aria-label="Company" name="company" placeholder="Company" />
          <Input aria-label="Country" name="country" placeholder="Country" />
          <Input aria-label="Preferred date" name="preferredDate" required type="date" />
          <Input aria-label="Preferred time" name="preferredTime" required type="time" />
          <select
            aria-label="Service required"
            className="h-11 rounded-lg border border-input bg-navy-900 px-3 text-sm"
            name="serviceRequired"
            required
          >
            {services.map((service) => (
              <option key={service.title}>{service.title}</option>
            ))}
          </select>
        </div>
        <Textarea aria-label="Message" name="message" placeholder="Message" />
        <Button type="submit" variant="gradient">
          Save Booking Request
        </Button>
        {saved ? (
          <p className="text-sm text-electric-400" role="status">
            Booking request saved locally.
          </p>
        ) : null}
      </form>
    </Card>
  )
}
