"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  product: string;
  avatar: string;
  stars: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Digital Realtor completely transformed how I market myself as a real estate agent. AI-powered content creation saves me 15+ hours weekly, and my social media engagement has tripled.",
    name: "Abdul Rehman",
    role: "Real Estate Agent",
    product: "Digital Realtor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
  {
    quote: "Working with DevGrow on our payment infrastructure was seamless. They delivered a robust, secure platform that handles thousands of transactions daily.",
    name: "Marcus Thompson",
    role: "FinTech CEO",
    product: "Sleft Payments",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
  {
    quote: "Sleft Signals transformed our business intelligence completely. AI-powered insights identified revenue opportunities we were missing. Decision-making speed up by 60%.",
    name: "Grant Denmark",
    role: "VP of Analytics",
    product: "Sleft Signals",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
  {
    quote: "I built my entire company website in under 10 minutes with AI Site Builder. As a non-technical founder, this gave me the professional online presence I needed without hiring an agency.",
    name: "Jessica Martinez",
    role: "Startup Founder",
    product: "AI Site Builder",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
  {
    quote: "ThumbnailGo increased our YouTube click-through rates by 340%. The AI-generated thumbnails are consistently better than what our design team was producing manually.",
    name: "Sarah Chen",
    role: "YouTube Creator",
    product: "ThumbnailGo",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
  {
    quote: "JioResume helped me land my dream job at a Fortune 500 company. I got 3x more interview callbacks. The ATS-optimized format and AI suggestions made my resume truly stand out.",
    name: "David Park",
    role: "Software Engineer",
    product: "JioResume",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
  {
    quote: "DevGrow's VocalAI implementation automated 70% of our customer support queries while maintaining high satisfaction scores. ROI was positive within 2 months.",
    name: "Michael Anderson",
    role: "Operations Director",
    product: "VocalAI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
  {
    quote: "TrendScout helped us catch viral trends 12 hours before our competitors. Within months our engagement rates skyrocketed. Essential for any content creator.",
    name: "Ryan Mitchell",
    role: "Content Creator",
    product: "TrendScout",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
  {
    quote: "The team delivered our SaaS platform in just 3 weeks — well-architected, scalable, and exactly what we envisioned. Our customers love the product.",
    name: "Aisha Patel",
    role: "Product Manager",
    product: "Custom SaaS",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    stars: 5,
  },
];

const col1 = TESTIMONIALS.slice(0, 3);
const col2 = TESTIMONIALS.slice(3, 6);
const col3 = TESTIMONIALS.slice(6, 9);

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsColumn({
  testimonials,
  duration = 15,
  className = "",
}: {
  testimonials: Testimonial[];
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4 list-none m-0 p-0"
      >
        {[0, 1].map((dupIndex) => (
          <React.Fragment key={dupIndex}>
            {testimonials.map((t, i) => (
              <motion.li
                key={`${dupIndex}-${i}`}
                aria-hidden={dupIndex === 1 ? "true" : "false"}
                tabIndex={dupIndex === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.02,
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 20 },
                }}
                className="p-6 rounded-2xl max-w-xs w-full cursor-default select-none"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <blockquote className="m-0 p-0">
                  <StarRating count={t.stars} />
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={t.avatar}
                      alt={`Photo of ${t.name}`}
                      className="h-10 w-10 rounded-full object-cover"
                      style={{ border: "2px solid rgba(167,139,250,0.25)" }}
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic text-sm" style={{ color: "#fff" }}>
                        {t.name}
                      </cite>
                      <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {t.role} · {t.product}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#030308" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(167,139,250,0.03) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 px-4"
      >
        {/* Header */}
        <div className="flex flex-col items-center max-w-xl mx-auto mb-16 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-xs font-semibold uppercase tracking-[0.15em]"
            style={{
              background: "rgba(167,139,250,0.08)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#A78BFA",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            Client Results
          </div>
          <h2
            id="testimonials-heading"
            className="font-display font-black text-4xl md:text-5xl tracking-tight mb-4"
            style={{ color: "#fff" }}
          >
            What our clients say
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Real results from real clients who&apos;ve transformed their businesses with us.
          </p>
        </div>

        {/* 3-column scrolling testimonials */}
        <div
          className="flex justify-center gap-4 mt-10 max-h-[720px] overflow-hidden px-4"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          }}
          role="region"
          aria-label="Client testimonials"
        >
          <TestimonialsColumn testimonials={col1} duration={18} />
          <TestimonialsColumn testimonials={col2} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={col3} duration={16} className="hidden lg:block" />
        </div>
      </motion.div>
    </section>
  );
}
