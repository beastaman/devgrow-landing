import { Nav } from "@/components/landing/nav";
import { HeroSection } from "@/components/landing/hero";
import { TrustBar } from "@/components/landing/trust-bar";
import { ServicesSection } from "@/components/landing/services";
import { WhySection } from "@/components/landing/why-section";
import { ProcessSection } from "@/components/landing/process";
import { WorkSection } from "@/components/landing/work";
import { TestimonialsSection } from "@/components/landing/testimonials";
import { TechSection } from "@/components/landing/tech-section";
import { PricingSection } from "@/components/landing/pricing";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Sticky nav — always on top */}
      <Nav />

      {/* 1. Cinematic Hero (scroll-pinned GSAP animation) */}
      <HeroSection />

      {/* 2. Trust / Social proof bar */}
      {/* <TrustBar /> */}

      {/* 3. Services — 8-card grid */}
      <ServicesSection />

      {/* 4. Why DevGrow — differentiators */}
      <WhySection />

      {/* 5. Process — 4-step timeline */}
      <ProcessSection />

      {/* 6. Featured Work — portfolio grid */}
      <WorkSection />

      {/* 7. Testimonials — dual marquee */}
      <TestimonialsSection />

      {/* 8. Tech Stack — categorized badges */}
      <TechSection />

      {/* 9. Pricing — 3-tier packages */}
      <PricingSection />

      {/* 10. CTA — CtaCard from 21st.dev + secondary cards */}
      <CtaSection />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
