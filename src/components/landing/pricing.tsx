"use client";

import { ShinyButton } from "@/components/ui/shiny-button";

const PACKAGES = [
  {
    name: "Starter",
    price: "$1,500",
    period: "one-time",
    tag: "Perfect to start",
    color: "#3B82F6",
    description: "A polished landing page or marketing website to establish your digital presence fast.",
    features: [
      "Custom Next.js landing page",
      "Mobile-responsive design",
      "SEO optimization",
      "Contact form integration",
      "1 revision round",
      "Delivered in 7 days",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "one-time",
    tag: "Most Popular",
    color: "#A78BFA",
    description: "A full web app or SaaS MVP with auth, database, and payments — ready to acquire customers.",
    features: [
      "Full-stack web application",
      "Authentication system",
      "Database + API layer",
      "Stripe payment integration",
      "Admin dashboard",
      "Delivered in 3–4 weeks",
      "30 days post-launch support",
    ],
    cta: "Start Building",
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "project-based",
    tag: "AI-Powered",
    color: "#8B5CF6",
    description: "Enterprise-grade AI-powered products, mobile apps, and complex SaaS platforms built to scale.",
    features: [
      "AI/LLM integrations",
      "Mobile app (iOS + Android)",
      "Complex SaaS architecture",
      "Automation workflows",
      "Dedicated dev team",
      "Ongoing retainer option",
    ],
    cta: "Let's Talk",
  },
];

export function PricingSection() {
  return (
    <section
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ background: "#030308" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(167,139,250,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-xs font-semibold uppercase tracking-[0.15em]"
            style={{
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#A78BFA",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Investment
          </div>
          <h2
            className="font-display font-black text-4xl md:text-5xl tracking-tight mb-4"
            style={{ color: "#fff" }}
          >
            Transparent pricing,
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              zero surprises.
            </span>
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            Fixed-price projects with clear milestones. Pay in stages, not all upfront.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className="relative rounded-2xl p-7 flex flex-col"
              style={{
                background: pkg.featured
                  ? "linear-gradient(145deg, #0D1F0D 0%, #081508 100%)"
                  : "linear-gradient(135deg, #0A0A14 0%, #06060F 100%)",
                border: `1px solid ${pkg.featured ? "rgba(167,139,250,0.25)" : "rgba(255,255,255,0.06)"}`,
                boxShadow: pkg.featured ? "0 0 60px rgba(167,139,250,0.08)" : "none",
              }}
            >
              {/* Featured badge */}
              {pkg.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em]"
                  style={{
                    background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                    color: "#fff",
                  }}
                >
                  ★ Most Popular
                </div>
              )}

              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                  style={{
                    background: `${pkg.color}14`,
                    color: pkg.color,
                    border: `1px solid ${pkg.color}22`,
                  }}
                >
                  {pkg.tag}
                </span>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: pkg.color, boxShadow: `0 0 8px ${pkg.color}66` }}
                />
              </div>

              {/* Name + Price */}
              <h3
                className="font-display font-bold text-xl mb-1"
                style={{ color: "#fff" }}
              >
                {pkg.name}
              </h3>
              <div className="flex items-end gap-1.5 mb-2">
                <span
                  className="font-display font-black text-4xl"
                  style={{ color: pkg.color }}
                >
                  {pkg.price}
                </span>
                <span className="text-sm pb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {pkg.period}
                </span>
              </div>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                {pkg.description}
              </p>

              {/* Divider */}
              <div
                className="w-full h-px mb-6"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <svg
                      className="w-4 h-4 shrink-0"
                      style={{ color: pkg.color }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.7)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              {pkg.featured ? (
                <ShinyButton href="#contact" className="w-full justify-center py-3 text-sm">
                  {pkg.cta} →
                </ShinyButton>
              ) : (
                <a
                  href={pkg.name === "Scale" ? "https://cal.com/mohdaman/web-discuss" : "#contact"}
                  className="w-full py-3 rounded-xl font-semibold text-sm text-center transition-all duration-300"
                  style={{
                    background: `${pkg.color}12`,
                    border: `1px solid ${pkg.color}25`,
                    color: pkg.color,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${pkg.color}20`;
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = `${pkg.color}12`;
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  {pkg.cta} →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Milestone note */}
        <div
          className="mt-8 text-center p-5 rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            💳 All projects are paid in <span style={{ color: "#fff", fontWeight: 600 }}>milestone-based installments</span> — 40% upfront, 40% at midpoint, 20% on delivery.{" "}
            <a href="#contact" style={{ color: "#A78BFA", textDecoration: "underline" }}>
              Get a custom quote →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
