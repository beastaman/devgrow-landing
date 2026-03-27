"use client";

import { Globe, Zap, Smartphone, Bot, Settings2, TrendingUp, Star, BarChart2 } from "lucide-react";
import { MorphingCardStack, type CardData } from "@/components/ui/morphing-card-stack";

const SERVICES: CardData[] = [
  {
    id: "1",
    title: "Website Development",
    description: "Custom websites and web apps built with Next.js & React. Fast, responsive, SEO-optimized, and pixel-perfect.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    id: "2",
    title: "SaaS Development",
    description: "End-to-end SaaS platforms with auth, payments, dashboards, and scalable cloud infrastructure. Live in weeks.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    id: "3",
    title: "Mobile App Development",
    description: "Native-quality iOS and Android apps using React Native and Flutter. One codebase, two platforms.",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    id: "4",
    title: "AI Integration",
    description: "Integrate LLMs, AI agents, and intelligent automation. ChatGPT, Claude, custom model fine-tuning.",
    icon: <Bot className="h-5 w-5" />,
  },
  {
    id: "5",
    title: "Process Automation",
    description: "Automate repetitive tasks with n8n workflows, custom scripts, and smart API integrations. Save 20+ hrs/week.",
    icon: <Settings2 className="h-5 w-5" />,
  },
  {
    id: "6",
    title: "Digital Marketing",
    description: "Meta ads, TikTok campaigns, and social media management that drives real traffic and measurable conversions.",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    id: "7",
    title: "Personal Branding",
    description: "Build your digital presence with custom websites, content automation, and social strategies for professionals.",
    icon: <Star className="h-5 w-5" />,
  },
  {
    id: "8",
    title: "Analytics & Dashboards",
    description: "Real-time dashboards, business intelligence, and custom analytics platforms for data-driven decisions.",
    icon: <BarChart2 className="h-5 w-5" />,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-4"
      style={{ background: "#030308" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(167,139,250,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-xs font-semibold uppercase tracking-[0.15em]"
            style={{
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#A78BFA",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            What We Build
          </div>
          <h2
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-5"
            style={{ color: "#fff" }}
          >
            Services that drive{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              real results
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
            From concept to deployment — we deliver comprehensive digital solutions that transform businesses and accelerate growth.
          </p>
        </div>

        {/* Morphing Card Stack */}
        <MorphingCardStack cards={SERVICES} defaultLayout="stack" />

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#A78BFA",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.15)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(167,139,250,0.08)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Get a Free Project Estimate
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
