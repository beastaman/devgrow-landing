"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

export function AdsHero() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
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
      className="relative min-h-screen flex items-center px-4 py-16 overflow-hidden"
      style={{ background: "#030308" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 10% 50%, rgba(139,92,246,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 90% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Left — Headline + trust */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", color: "#A78BFA" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Full-Stack Development Agency
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-6" style={{ color: "#fff" }}>
            Ship AI-powered{" "}
            <span style={{
              background: "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              products in weeks.
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
            We build production-ready web apps, SaaS platforms, and AI-powered tools.
            From idea to live product in <span style={{ color: "#A78BFA", fontWeight: 600 }}>3–4 weeks</span>, not months.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: "⚡", text: "3–4 week delivery" },
              { icon: "🚀", text: "20+ apps shipped" },
              { icon: "🔒", text: "NDA on request" },
              { icon: "💳", text: "Milestone payments" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
              ].map((src, i) => (
                <img key={i} src={src} alt="Client" className="w-8 h-8 rounded-full object-cover ring-2" style={{ ringColor: "#030308" }} />
              ))}
            </div>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Trusted by <span style={{ color: "#A78BFA", fontWeight: 600 }}>20+ founders</span> across 10+ countries
            </p>
          </div>
        </div>

        {/* Right — Contact form */}
        <div
          className="w-full rounded-2xl p-6 sm:p-8"
          style={{
            background: "rgba(10,8,25,0.8)",
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
                className="flex flex-col items-center gap-4 text-center py-10"
              >
                <CheckCircle2 className="w-14 h-14" style={{ color: "#A78BFA" }} />
                <div>
                  <p className="text-white font-bold text-xl mb-2">We&apos;ve got your message!</p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                    We&apos;ll reach out to <strong className="text-white">{email}</strong> within 24 hours.
                  </p>
                </div>
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  Or call us directly: <a href="tel:+919618477436" className="text-purple-400">+91 961-847-7436</a>
                </p>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }}>
                <h2 className="font-display font-bold text-xl mb-1" style={{ color: "#fff" }}>
                  Get a free project estimate
                </h2>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
                  We&apos;ll reply within 24 hours with a timeline and rough cost.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-11 px-3.5 rounded-lg text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-11 px-3.5 rounded-lg text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                  />
                  <textarea
                    placeholder="Tell us about your project — what are you building?"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm text-white placeholder:text-neutral-500 focus:outline-none resize-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
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
                      <>Start Your Project <ArrowRight className="w-4 h-4" /></>
                    )}
                  </button>

                  <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                    No commitment. No sales pressure. Just clarity.
                  </p>
                </form>

                {/* Contact details */}
                <div className="mt-5 pt-5 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <a href="tel:+919618477436" className="flex items-center gap-2 text-sm transition-colors hover:text-purple-400" style={{ color: "rgba(255,255,255,0.45)" }}>
                    <span>📞</span> +91 961-847-7436
                  </a>
                  <a href="mailto:hello@devgrow.in" className="flex items-center gap-2 text-sm transition-colors hover:text-purple-400" style={{ color: "rgba(255,255,255,0.45)" }}>
                    <span>✉️</span> hello@devgrow.in
                  </a>
                  <a href="https://cal.com/mohdaman/web-discuss" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-colors hover:text-purple-400" style={{ color: "rgba(255,255,255,0.45)" }}>
                    <span>📅</span> Book a call
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
