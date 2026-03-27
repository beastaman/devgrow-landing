"use client";

const PRODUCTS = [
  "Digital Realtor",
  "Sleft Payments",
  "JioResume",
  "AI Site Builder",
  "ThumbnailGo",
  "Sleft Signals",
  "TrendScout",
  "Tonexyio",
  "VocalAI",
];

export function TrustBar() {
  const doubled = [...PRODUCTS, ...PRODUCTS];

  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "#030308" }}>
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, #030308 0%, transparent 100%)" }} />
      <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, #030308 0%, transparent 100%)" }} />

      <div className="text-center mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,0.3)" }}>
          20+ Production Apps Shipped Worldwide
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-8 shrink-0"
            >
              <div
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#A78BFA", boxShadow: "0 0 8px rgba(167,139,250,0.6)" }}
              />
              <span
                className="font-display font-semibold text-base whitespace-nowrap"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div
        className="mt-12 mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-px"
        style={{ background: "rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden" }}
      >
        {[
          { value: "20+", label: "Apps Shipped" },
          { value: "$80M+", label: "Client Revenue" },
          { value: "3–4 wks", label: "Avg. Delivery" },
          { value: "10+", label: "Countries" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center py-5 px-4 text-center"
            style={{ background: "#05050D" }}
          >
            <span
              className="font-display font-black text-2xl md:text-3xl"
              style={{ color: "#A78BFA" }}
            >
              {stat.value}
            </span>
            <span className="text-xs font-medium mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
