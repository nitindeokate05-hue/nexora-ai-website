export function NeuralBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="aurora-field" />
      <div className="light-rays" />
      <div className="data-streams" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(0_167_255_/_22%),transparent_28rem),radial-gradient(circle_at_80%_18%,rgb(124_60_255_/_24%),transparent_30rem)]" />
      <svg className="absolute inset-0 h-full w-full opacity-35" role="presentation">
        <defs>
          <linearGradient id="neural-line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#00a7ff" />
            <stop offset="100%" stopColor="#7c3cff" />
          </linearGradient>
        </defs>
        <path
          d="M40 180 C180 90 300 300 460 180 S760 120 920 260 1180 360 1340 180"
          fill="none"
          stroke="url(#neural-line)"
          strokeDasharray="8 18"
          strokeWidth="1.5"
        />
        <path
          d="M80 520 C260 380 390 620 560 430 S900 300 1120 520"
          fill="none"
          stroke="url(#neural-line)"
          strokeDasharray="10 20"
          strokeWidth="1"
        />
        {[120, 320, 520, 760, 980, 1180].map((x, index) => (
          <circle
            cx={x}
            cy={index % 2 === 0 ? 180 : 430}
            fill={index % 2 === 0 ? "#00a7ff" : "#7c3cff"}
            key={x}
            r="4"
          />
        ))}
      </svg>
    </div>
  )
}
