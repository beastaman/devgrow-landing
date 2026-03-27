"use client";

const WHY = [
  {
    number: "01",
    title: "Ship in 3–4 Weeks",
    description: "While traditional agencies take months, we deliver production-ready products in weeks using streamlined agile sprints and battle-tested tech stacks.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI-First by Default",
    description: "Every product we build is designed for intelligence — LLM integrations, AI agents, smart automation baked into the architecture from day one.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Revenue-Focused Code",
    description: "We don't just write beautiful code — we build for conversion, retention, and scale. Every feature decision is tied to your business KPIs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function WhySection() {
  return (
    <section
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ background: "#05050D" }}
    >
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Big background text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[clamp(80px,15vw,200px)] tracking-tighter pointer-events-none select-none"
        style={{ color: "rgba(255,255,255,0.015)" }}
        aria-hidden="true"
      >
        WHY US
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Header */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold uppercase tracking-[0.15em]"
              style={{
                background: "rgba(139,92,246,0.08)",
                border: "1px solid rgba(139,92,246,0.2)",
                color: "#8B5CF6",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Why DevGrow
            </div>
            <h2
              className="font-display font-black text-4xl md:text-5xl tracking-tight mb-6"
              style={{ color: "#fff" }}
            >
              Not just another
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                dev agency.
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              We're founders ourselves — we&apos;ve shipped 20+ products and know what it takes to go from zero to production. We care about your business outcomes, not just deliverables.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "100%", l: "Client Satisfaction" },
                { v: "99.2%", l: "Project Success Rate" },
                { v: "24/7", l: "Support Available" },
                { v: "$50k+", l: "Revenue Generated" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="font-display font-black text-2xl mb-1"
                    style={{ color: "#A78BFA" }}
                  >
                    {s.v}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Differentiators */}
          <div className="flex flex-col gap-5">
            {WHY.map((item, i) => (
              <div
                key={item.number}
                className="group relative p-6 rounded-2xl transition-all duration-400"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "all 0.4s cubic-bezier(0.25,1,0.5,1)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(167,139,250,0.04)";
                  el.style.borderColor = "rgba(167,139,250,0.15)";
                  el.style.transform = "translateX(6px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.02)";
                  el.style.borderColor = "rgba(255,255,255,0.06)";
                  el.style.transform = "translateX(0)";
                }}
              >
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center gap-3 shrink-0">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: "rgba(167,139,250,0.08)",
                        border: "1px solid rgba(167,139,250,0.2)",
                        color: "#A78BFA",
                      }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="font-display font-black text-xs"
                      style={{ color: "rgba(255,255,255,0.15)" }}
                    >
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2" style={{ color: "#fff" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
