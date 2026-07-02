export function LoadingScreen() {
  return (
    <div className="container-shell grid min-h-48 place-items-center py-10">
      <div className="text-center">
        <div className="mx-auto mb-4 grid size-14 place-items-center rounded-3xl border border-electric-400/35 bg-navy-950/70 shadow-glow">
          <img
            alt=""
            className="h-10 w-auto rounded-xl object-contain"
            decoding="async"
            sizes="72px"
            src="/nexora-ai-official-logo-320.png"
            srcSet="/nexora-ai-official-logo-320.png 320w, /nexora-ai-official-logo-640.png 640w"
          />
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Loading Nexora AI
        </p>
      </div>
    </div>
  )
}
