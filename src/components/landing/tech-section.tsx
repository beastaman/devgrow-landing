"use client";

const TECH_CATEGORIES = [
  {
    label: "Frontend",
    color: "#3B82F6",
    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Three.js", "Shadcn UI"],
  },
  {
    label: "Mobile",
    color: "#8B5CF6",
    techs: ["React Native", "Flutter", "Expo", "iOS", "Android"],
  },
  {
    label: "Backend",
    color: "#A78BFA",
    techs: ["Node.js", "Python", "FastAPI", "Express", "tRPC", "GraphQL", "REST APIs", "WebSockets"],
  },
  {
    label: "Database",
    color: "#F97316",
    techs: ["Supabase", "PostgreSQL", "MongoDB", "Redis", "Convex", "Prisma", "Drizzle ORM"],
  },
  {
    label: "AI & Automation",
    color: "#EC4899",
    techs: ["OpenAI", "Claude API", "LangChain", "n8n", "AI Agents", "RAG", "Fine-tuning", "Pinecone"],
  },
  {
    label: "Cloud & DevOps",
    color: "#06B6D4",
    techs: ["Vercel", "AWS", "Railway", "Docker", "CI/CD", "Cloudflare", "GitHub Actions"],
  },
  {
    label: "Payments & Auth",
    color: "#EAB308",
    techs: ["Stripe", "Clerk", "NextAuth", "Resend", "Uploadthing", "Paddle"],
  },
];

export function TechSection() {
  return (
    <section
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ background: "#05050D" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Big watermark */}
      <div
        className="absolute bottom-0 right-0 font-display font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(80px, 20vw, 280px)",
          color: "rgba(255,255,255,0.015)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        STACK
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold uppercase tracking-[0.15em]"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.2)",
                color: "#06B6D4",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Tech Stack
            </div>
            <h2
              className="font-display font-black text-4xl md:text-5xl tracking-tight mb-4"
              style={{ color: "#fff" }}
            >
              Technologies we
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                master.
              </span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              From frontend to AI — we pick the right tools for the job. Every technology in our stack is battle-tested across 20+ production applications.
            </p>
          </div>

          {/* Proficiency rings */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Frontend", pct: 98, color: "#3B82F6" },
              { label: "AI / ML", pct: 92, color: "#EC4899" },
              { label: "Mobile", pct: 88, color: "#8B5CF6" },
            ].map((item) => {
              const r = 32;
              const circ = 2 * Math.PI * r;
              const offset = circ - (item.pct / 100) * circ;
              return (
                <div key={item.label} className="flex flex-col items-center gap-3">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40" cy="40" r={r}
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="6"
                      />
                      <circle
                        cx="40" cy="40" r={r}
                        fill="none"
                        stroke={item.color}
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray={circ}
                        strokeDashoffset={offset}
                        style={{ filter: `drop-shadow(0 0 6px ${item.color}66)` }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-display font-black text-sm"
                        style={{ color: item.color }}
                      >
                        {item.pct}%
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-center" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tech grid by category */}
        <div className="space-y-6">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.label} className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Category label */}
              <div
                className="shrink-0 w-28 text-xs font-bold uppercase tracking-[0.12em] text-right hidden sm:block"
                style={{ color: cat.color }}
              >
                {cat.label}
              </div>

              {/* Mobile label */}
              <div
                className="sm:hidden text-xs font-bold uppercase tracking-[0.12em]"
                style={{ color: cat.color }}
              >
                {cat.label}
              </div>

              {/* Divider */}
              <div
                className="shrink-0 hidden sm:block w-px h-5"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge px-3 py-1.5 rounded-lg text-xs font-semibold cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.6)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = `${cat.color}12`;
                      el.style.borderColor = `${cat.color}33`;
                      el.style.color = cat.color;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLSpanElement;
                      el.style.background = "rgba(255,255,255,0.04)";
                      el.style.borderColor = "rgba(255,255,255,0.08)";
                      el.style.color = "rgba(255,255,255,0.6)";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="mt-12 flex flex-wrap items-center gap-3 text-sm"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          <span>Also proficient in:</span>
          {["Clerk Auth", "Resend", "Uploadthing", "Zustand", "Jotai", "Zod", "SWR", "D3.js", "Recharts", "Radix UI"].map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
