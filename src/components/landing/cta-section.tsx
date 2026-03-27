"use client";

import { CtaCard } from "@/components/ui/call-to-action-cta";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ background: "#05050D" }}
    >
      {/* Animated noise radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(167,139,250,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* CtaCard from 21st.dev - primary CTA */}
        <CtaCard
          title="Ready to build something amazing?"
          description="Transform your idea into a production-ready product in 3–4 weeks. 20+ apps shipped. $80M+ revenue generated for clients. Zero fluff — just results."
          buttonText="Start Your Project"
          inputPlaceholder="your@email.com"
          imageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          onButtonClick={() => {}}
          className="min-h-[340px] md:min-h-[400px] mb-8"
          style={{ borderColor: "rgba(167,139,250,0.15)" }}
        />

        {/* Secondary dual CTA row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Book a call card */}
          <a
            href="https://cal.com/mohdaman/web-discuss"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-7 rounded-2xl overflow-hidden flex flex-col justify-between min-h-[180px] transition-all duration-400"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(99,102,241,0.04) 100%)",
              border: "1px solid rgba(139,92,246,0.2)",
              transition: "all 0.4s cubic-bezier(0.25,1,0.5,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(139,92,246,0.4)";
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 20px 60px rgba(139,92,246,0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(139,92,246,0.2)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <div>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}
              >
                📞
              </div>
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: "#fff" }}>
                Book a Free Discovery Call
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                30-minute call to discuss your project, timeline, and budget. No commitment, no sales pressure.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <span
                className="text-sm font-semibold"
                style={{ color: "#8B5CF6" }}
              >
                Schedule on Calendly
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "#8B5CF6" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* View portfolio card */}
          <a
            href="#work"
            className="group relative p-7 rounded-2xl overflow-hidden flex flex-col justify-between min-h-[180px] transition-all duration-400"
            style={{
              background: "linear-gradient(135deg, rgba(167,139,250,0.06) 0%, rgba(139,92,246,0.03) 100%)",
              border: "1px solid rgba(167,139,250,0.15)",
              transition: "all 0.4s cubic-bezier(0.25,1,0.5,1)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(167,139,250,0.35)";
              el.style.transform = "translateY(-4px)";
              el.style.boxShadow = "0 20px 60px rgba(167,139,250,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(167,139,250,0.15)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <div>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)" }}
              >
                🚀
              </div>
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: "#fff" }}>
                See Our Work in Action
              </h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Browse 20+ production apps we&apos;ve shipped — SaaS platforms, AI tools, mobile apps, and more.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <span className="text-sm font-semibold" style={{ color: "#A78BFA" }}>
                View Full Portfolio
              </span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                style={{ color: "#A78BFA" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

        {/* Urgent trust signals row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: "⚡", text: "3–4 week delivery" },
            { icon: "🔒", text: "NDA on request" },
            { icon: "💳", text: "Milestone payments" },
            { icon: "🌍", text: "10+ countries served" },
            { icon: "📞", text: "+91 961-847-7436" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
