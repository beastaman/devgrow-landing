"use client";

import { useState, useEffect } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[999] flex justify-center px-4 pt-4"
    >
      <nav
        className="w-full max-w-6xl"
        style={{
          background: scrolled ? "rgba(3,3,8,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          border: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          borderRadius: "16px",
          transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
          padding: scrolled ? "12px 24px" : "16px 24px",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="https://devgrow.org" className="flex items-center gap-2.5 group">
            <img
              src="/devgrowlogo.png"
              alt="DevGrow"
              className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]"
            />
            <span
              className="font-display font-bold text-lg tracking-tight"
              style={{ color: "#fff" }}
            >
              DevGrow
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Work", href: "https://devgrow.org/work" },
              { label: "Services", href: "#services" },
              { label: "Process", href: "#process" },
              { label: "About", href: "https://devgrow.org/about" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://cal.com/mohdaman/web-discuss"
              className="text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200"
              style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              Book a Call
            </a>
            <ShinyButton href="#contact" className="text-sm py-2.5 px-5">
              Start Project →
            </ShinyButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: "#fff",
                transform: mobileOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 rounded-full transition-all duration-300"
              style={{ background: "#fff", opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: "#fff",
                transform: mobileOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden mt-4 pt-4 flex flex-col gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              { label: "Work", href: "https://devgrow.org/work" },
              { label: "Services", href: "#services" },
              { label: "Process", href: "#process" },
              { label: "About", href: "https://devgrow.org/about" },
              { label: "Book a Call", href: "https://cal.com/mohdaman/web-discuss" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium py-2"
                style={{ color: "rgba(255,255,255,0.7)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <ShinyButton href="#contact" className="text-sm mt-2">
              Start Your Project →
            </ShinyButton>
          </div>
        )}
      </nav>
    </header>
  );
}
