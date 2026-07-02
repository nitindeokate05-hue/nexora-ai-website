import { Link } from "react-router-dom"

import { Button, Card } from "@/components"
import { ROUTES } from "@/constants"
import { SEO } from "@/components/seo"

export function NotFound() {
  return (
    <>
      <SEO
        description="The requested Nexora AI page could not be found."
        title="404 | Nexora AI"
      />
      <section className="container-shell section-spacing">
        <Card className="mx-auto max-w-2xl text-center" variant="gradient">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-electric-400">
            404
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground">
            The route may have moved, or the address may be incomplete.
          </p>
          <Button asChild className="mt-6" variant="gradient">
            <Link to={ROUTES.home}>Return Home</Link>
          </Button>
        </Card>
      </section>
    </>
  )
}
