import { Card } from "@/components/ui/card"
import { statusItems } from "@/data/site"

export function StatusGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {statusItems.map((item) => (
        <Card className="flex items-center justify-between gap-4" key={item.label} variant="glass">
          <div>
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className="mt-1 font-heading text-2xl font-semibold text-foreground">
              {item.value}
            </p>
          </div>
          <item.icon className="size-7 text-electric-400" />
        </Card>
      ))}
    </div>
  )
}
