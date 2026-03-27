"use client";

import { ShinyButton } from "@/components/ui/shiny-button";

const LINKS = {
  Services: [
    { label: "Website Development", href: "#services" },
    { label: "SaaS Development", href: "#services" },
    { label: "Mobile Apps", href: "#services" },
    { label: "AI Integration", href: "#services" },
    { label: "Process Automation", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "https://devgrow.org/about" },
    { label: "Our Work", href: "https://devgrow.org/work" },
    { label: "Portfolio", href: "https://mohdaman-portfolio.vercel.app" },
    { label: "Contact", href: "https://devgrow.org/contact" },
  ],
  Resources: [
    { label: "Project Calculator", href: "https://devgrow.org/project-calculator" },
    { label: "Book a Call", href: "https://cal.com/mohdaman/web-discuss" },
    { label: "Terms of Service", href: "https://devgrow.org/terms" },
    { label: "Privacy Policy", href: "https://devgrow.org/privacy" },
  ],
};

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/beastaman",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/beastaman",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/MohammedAmanN11",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10 px-4 overflow-hidden"
      style={{ background: "#020206", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Big background text */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-black pointer-events-none select-none leading-none"
        style={{
          fontSize: "clamp(60px, 18vw, 240px)",
          color: "rgba(255,255,255,0.015)",
        }}
        aria-hidden="true"
      >
        DEVGROW
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {/* Left: Brand + newsletter */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/devgrowlogo.png"
                alt="DevGrow"
                className="w-11 h-11 object-contain drop-shadow-[0_0_16px_rgba(167,139,250,0.5)]"
              />
              <span className="font-display font-black text-2xl" style={{ color: "#fff" }}>
                DevGrow
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              Full-stack development agency building AI-powered web apps, SaaS platforms, and mobile products that generate real revenue for our clients.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2 mb-8">
              {[
                { icon: "📍", text: "Banjara Hills, Hyderabad, India" },
                { icon: "📧", text: "support@devgrow.org", href: "mailto:support@devgrow.org" },
                { icon: "📞", text: "+91 961-847-7436", href: "tel:+919618477436" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-base">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#A78BFA")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {item.text}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(167,139,250,0.08)";
                    el.style.borderColor = "rgba(167,139,250,0.2)";
                    el.style.color = "#A78BFA";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.color = "rgba(255,255,255,0.45)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-3 gap-8">
            {Object.entries(LINKS).map(([group, links]) => (
              <div key={group}>
                <h4
                  className="font-display font-bold text-sm mb-5 uppercase tracking-[0.1em]"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {group}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            © 2025 DevGrow Inc. All rights reserved. · Built by DevGrow, for DevGrow.
          </p>
          <ShinyButton href="https://devgrow.org/project-calculator" className="text-xs py-2.5 px-5">
            Start Your Project →
          </ShinyButton>
        </div>
      </div>
    </footer>
  );
}
