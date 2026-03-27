"use client";

import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export function HeroSection() {
  return (
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
  );
}
