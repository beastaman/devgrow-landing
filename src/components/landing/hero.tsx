"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

function HeroLeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, note: `Name: ${name}\n\n${note}` }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{ background: "#030308" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — copy */}
        <div>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.25)",
              color: "#A78BFA",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Free Project Estimate
          </div>

          <h2
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.08] mb-5"
            style={{ color: "#fff" }}
          >
            Ready to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              build together?
            </span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.5)" }}>
            Drop your details and we'll get back within{" "}
            <span style={{ color: "#A78BFA", fontWeight: 600 }}>24 hours</span> with a
            clear timeline and cost estimate. No fluff.
          </p>

          {/* Trust signals */}
          <div className="flex flex-col gap-3">
            {[
              { icon: "⚡", text: "3–4 week delivery guarantee" },
              { icon: "🚀", text: "20+ production apps shipped" },
              { icon: "🔒", text: "NDA available on request" },
              { icon: "💳", text: "Milestone-based payments" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Contact details */}
          <div
            className="mt-8 pt-6 flex flex-col gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <a
              href="tel:+919618477436"
              className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              📞 +91 961-847-7436
            </a>
            <a
              href="mailto:hello@devgrow.in"
              className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              ✉️ hello@devgrow.in
            </a>
            <a
              href="https://cal.com/mohdaman/web-discuss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              📅 Book a free 30-min discovery call
            </a>
          </div>
        </div>

        {/* Right — form card */}
        <div
          className="w-full rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(10,8,25,0.85)",
            border: "1px solid rgba(167,139,250,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 text-center py-12"
              >
                <CheckCircle2 className="w-14 h-14" style={{ color: "#A78BFA" }} />
                <div>
                  <p className="text-white font-bold text-xl mb-2">We&apos;ve got your message!</p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    We&apos;ll reach out to{" "}
                    <strong className="text-white">{email}</strong> within 24 hours.
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }}>
                <p className="font-display font-bold text-lg mb-1" style={{ color: "#fff" }}>
                  Tell us about your project
                </p>
                <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
                  We&apos;ll reply with a timeline + cost estimate in 24h.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-11 px-3.5 rounded-lg text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-11 px-3.5 rounded-lg text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                  <textarea
                    placeholder="What are you building? (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm text-white placeholder:text-neutral-500 focus:outline-none resize-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />

                  {error && <p className="text-sm text-red-400">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)", color: "#fff" }}
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                    ) : (
                      <>Get Free Estimate <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                    No commitment. No sales pressure. Just clarity.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export function HeroSection() {
  return (
    <>
      <CinematicHero
        brandName="DevGrow"
        tagline1="Ship AI-powered"
        tagline2="products in weeks."
        cardHeading="Full-stack. AI-ready. Production-grade."
        cardDescription={
          <>
            <span className="text-white font-semibold">DevGrow</span> ships production-ready web apps, SaaS platforms, and AI-powered mobile apps. From idea to live product in{" "}
            <span className="text-purple-400 font-semibold">3–4 weeks</span>, not months.
          </>
        }
        metricValue={20}
        metricLabel="Apps Shipped"
        ctaHeading="Ready to build?"
        ctaDescription="Join 20+ founders and companies who trusted DevGrow to ship their digital products fast."
      />
      <HeroLeadForm />
    </>
  );
}
