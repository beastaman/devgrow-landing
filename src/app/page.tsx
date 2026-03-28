import { HeroSection } from "@/components/landing/hero";
import { ServicesSection } from "@/components/landing/services";
import { WorkSection } from "@/components/landing/work";
import { CtaSection } from "@/components/landing/cta-section";

// — ADS LANDING PAGE —
// Sections below are commented out (not deleted) — uncomment to restore full marketing site.

// import { Nav } from "@/components/landing/nav";
// import { TrustBar } from "@/components/landing/trust-bar";
// import { WhySection } from "@/components/landing/why-section";
// import { ProcessSection } from "@/components/landing/process";
// import { TestimonialsSection } from "@/components/landing/testimonials";
// import { TechSection } from "@/components/landing/tech-section";
// import { PricingSection } from "@/components/landing/pricing";
// import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Nav removed for ads — no distractions */}
      {/* <Nav /> */}

      {/* 1. Cinematic Hero + inline lead capture form */}
      <HeroSection />

      {/* 2. Services — what we build */}
      <ServicesSection />

      {/* 3. Featured Work — portfolio / social proof */}
      <WorkSection />

      {/* 4. Final CTA — contact form + contact details */}
      <CtaSection />

      {/* Footer removed for ads — keeps focus on CTA */}
      {/* <Footer /> */}

      {/* — COMMENTED OUT FOR ADS PAGE —
      <TrustBar />
      <WhySection />
      <ProcessSection />
      <TestimonialsSection />
      <TechSection />
      <PricingSection />
      */}
    </main>
  );
}
