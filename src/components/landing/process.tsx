"use client";

import { ProcessWorkflow } from "@/components/ui/n8n-workflow-block-shadcnui";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ background: "#030308" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="mb-5">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em]"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.2)",
                color: "#A78BFA",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              How We Work
            </div>
          </div>
          <h2
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-5"
            style={{ color: "#fff" }}
          >
            Our development{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              process
            </span>
          </h2>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Four focused phases from first conversation to a live product in your hands — drag the nodes to explore.
          </p>
        </div>

        {/* Workflow block */}
        <ProcessWorkflow />

        {/* Delivery promise */}
        <div className="mt-8">
          <div
            className="p-5 md:p-6 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(167,139,250,0.07) 0%, rgba(139,92,246,0.07) 100%)",
              border: "1px solid rgba(167,139,250,0.15)",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3
                  className="font-display font-bold text-base md:text-lg mb-1"
                  style={{ color: "#fff" }}
                >
                  ⚡ Typical Timeline: 3–4 Weeks to Launch
                </h3>
                <p className="text-xs md:text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Week 1: Discovery + Strategy → Week 2–3: Build & Test → Week 4: Launch & Grow
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                  color: "#fff",
                }}
              >
                Get Your Timeline →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
