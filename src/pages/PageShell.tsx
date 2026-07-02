type PageShellProps = {
  title: string
}

export function PageShell({ title }: PageShellProps) {
  return (
    <section className="container-shell section-spacing min-h-[60svh]">
      <div className="max-w-3xl">
        <h1 className="font-heading text-4xl font-semibold tracking-normal text-foreground md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  )
}
