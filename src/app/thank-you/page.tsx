"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Calendar, MessageSquare, Phone, ArrowRight, Sparkles } from "lucide-react";

const NEXT_STEPS = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Review your submission",
    description: "We've received your details and our team is already reviewing your project requirements.",
    time: "Right now",
    color: "#C4B5FD",
  },
  {
    icon: Phone,
    step: "02",
    title: "Personal response from our team",
    description: "You'll get a direct reply to your email with a project breakdown, rough timeline, and cost estimate.",
    time: "Within 24 hours",
    color: "#A78BFA",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Discovery call",
    description: "We'll hop on a 30-min call to align on scope, answer your questions, and kick things off.",
    time: "This week",
    color: "#8B5CF6",
  },
  {
    icon: Sparkles,
    step: "04",
    title: "Ship your product",
    description: "Your production-ready app, live in the world — in 3–4 weeks from kickoff.",
    time: "3–4 weeks",
    color: "#7C3AED",
  },
];

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; alpha: number; size: number; color: string }[] = [];
    const colors = ["#A78BFA", "#8B5CF6", "#C4B5FD", "#DDD6FE", "#7C3AED"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(Math.random() * 2 + 1),
        alpha: Math.random() * 0.6 + 0.2,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.003;
        if (p.y < -20 || p.alpha <= 0) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          p.alpha = Math.random() * 0.6 + 0.2;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
      aria-hidden="true"
    />
  );
}

function ThankYouContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start px-4 py-16"
      style={{ background: "#030308" }}
    >
      {/* Particles */}
      <Particles />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,92,246,0.18) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 40% 40% at 20% 80%, rgba(99,102,241,0.08) 0%, transparent 60%)" }} />

      <div className="relative max-w-4xl mx-auto w-full">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <a href="/" className="flex items-center gap-2.5">
            <img src="/devgrowlogo.png" alt="DevGrow" className="w-8 h-8 rounded-lg object-contain" />
            <span className="font-display font-bold text-xl" style={{ color: "#fff" }}>DevGrow</span>
          </a>
        </motion.div>

        {/* Hero success block */}
        <div className="text-center mb-16">
          {/* Animated checkmark */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              {/* Outer ring pulse */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(167,139,250,0.15)" }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                className="relative w-24 h-24 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(167,139,250,0.2) 0%, rgba(139,92,246,0.2) 100%)",
                  border: "2px solid rgba(167,139,250,0.4)",
                  boxShadow: "0 0 60px rgba(139,92,246,0.3), inset 0 1px 1px rgba(255,255,255,0.1)",
                }}
              >
                <CheckCircle2 className="w-12 h-12" style={{ color: "#A78BFA" }} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)", color: "#A78BFA" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Submission Received
            </div>

            <h1
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-5"
              style={{ color: "#fff" }}
            >
              You&apos;re one step closer{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C4B5FD 0%, #8B5CF6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                to launch.
              </span>
            </h1>

            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              {email ? (
                <>We&apos;ve received your message and will reply to <strong className="text-white">{email}</strong> within 24 hours.</>
              ) : (
                <>We&apos;ve received your project details. Our team will be in touch within 24 hours.</>
              )}
            </p>
          </motion.div>
        </div>

        {/* What happens next */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-center font-display font-bold text-xl mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            What happens next
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {NEXT_STEPS.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.5 }}
                className="relative p-5 rounded-2xl flex flex-col gap-3"
                style={{
                  background: "rgba(10,8,25,0.7)",
                  border: "1px solid rgba(167,139,250,0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Connector line (desktop) */}
                {i < NEXT_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-2 w-4 h-px" style={{ background: "rgba(167,139,250,0.25)" }} />
                )}

                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className="text-xs font-bold tabular-nums" style={{ color: "rgba(255,255,255,0.2)" }}>
                    {item.step}
                  </span>
                </div>

                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#fff" }}>{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.description}</p>
                </div>

                <div
                  className="mt-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold w-fit"
                  style={{ background: `${item.color}12`, color: item.color }}
                >
                  <span className="w-1 h-1 rounded-full bg-current" />
                  {item.time}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          {/* Book a call */}
          <a
            href="https://cal.com/mohdaman/web-discuss"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
              color: "#fff",
              boxShadow: "0 4px 24px rgba(139,92,246,0.3)",
            }}
          >
            <Calendar className="w-4 h-4" />
            Book a discovery call
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Back to site */}
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            ← Back to site
          </a>
        </motion.div>

        {/* Bottom contact strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { icon: "📞", label: "+91 961-847-7436", href: "tel:+919618477436" },
            { icon: "✉️", label: "support@devgrow.org", href: "mailto:support@devgrow.org" },
            { icon: "⚡", label: "3–4 week delivery", href: null },
            { icon: "🌍", label: "10+ countries served", href: null },
          ].map((item) =>
            item.href ? (
              <a key={item.label} href={item.href} className="flex items-center gap-2 text-sm hover:text-purple-400 transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
                <span>{item.icon}</span> {item.label}
              </a>
            ) : (
              <div key={item.label} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                <span>{item.icon}</span> {item.label}
              </div>
            )
          )}
        </motion.div>
      </div>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYouContent />
    </Suspense>
  );
}
