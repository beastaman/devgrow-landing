"use client";

const WORK = [
  {
    name: "Digital Realtor",
    category: "AI · SaaS · Real Estate",
    description: "AI-powered personal branding platform for real estate agents. Instagram/TikTok automation, lead gen, content scheduling.",
    image: "https://devgrow.org/img/digitalrealtor.png",
    url: "https://digitalrealtor.co",
    tags: ["Next.js", "AI", "Instagram API"],
    accent: "#3B82F6",
    featured: true,
  },
  {
    name: "JioResume",
    category: "AI · Career",
    description: "AI resume builder that crafts ATS-optimized resumes. 3x more interview callbacks for users.",
    image: "https://devgrow.org/img/airesume.png",
    url: "https://jioresume.com",
    tags: ["React", "OpenAI", "PDF"],
    accent: "#A78BFA",
  },
  {
    name: "Sleft Payments",
    category: "FinTech · SaaS",
    description: "Next-gen payment infrastructure with fraud detection, instant settlements, and unified payment orchestration.",
    image: "https://devgrow.org/img/sleftpayments.png",
    url: "https://sleftpayments.vercel.app/",
    tags: ["Next.js", "Stripe", "Finance"],
    accent: "#8B5CF6",
  },
  {
    name: "AI Site Builder",
    category: "AI · No-Code",
    description: "Transform ideas into functional websites in seconds using advanced AI. Built for entrepreneurs and non-technical founders.",
    image: "https://devgrow.org/img/aisitebuilder.png",
    url: "https://aisitebuilder.dev/",
    tags: ["AI", "No-Code", "Builder"],
    accent: "#F97316",
  },
  {
    name: "ThumbnailGo",
    category: "AI · Content",
    description: "AI-powered thumbnail generation. 340% increase in YouTube CTR for users.",
    image: "https://devgrow.org/img/thumbnailgen.png",
    url: "https://thumbnailgo.com/",
    tags: ["AI", "Design", "SaaS"],
    accent: "#EC4899",
  },
  {
    name: "Sleft Signals",
    category: "AI · Analytics",
    description: "Turn raw business data into actionable intelligence with AI-powered predictive analytics.",
    image: "https://devgrow.org/img/sleftsignal.png",
    url: "https://sleft-signal.vercel.app/",
    tags: ["Analytics", "BI", "AI"],
    accent: "#06B6D4",
  },
];

export function WorkSection() {
  return (
    <section
    id="work"
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{ background: "#05050D" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(167,139,250,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-xs font-semibold uppercase tracking-[0.15em]"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.2)",
                color: "#A78BFA",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Featured Work
            </div>
            <h2
              className="font-display font-black text-4xl md:text-5xl tracking-tight"
              style={{ color: "#fff" }}
            >
              Products we&apos;ve shipped
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                that generate revenue
              </span>
            </h2>
          </div>
          <a
            href="https://devgrow.org/work"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.6)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            View All Work →
          </a>
        </div>

        {/* Masonry-style work grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {WORK.map((item, i) => {
            const isFeatured = i === 0;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`work-card group relative rounded-2xl overflow-hidden block ${isFeatured ? "md:col-span-7" : i === 1 ? "md:col-span-5" : "md:col-span-4"}`}
                style={{
                  aspectRatio: isFeatured ? "16/9" : "4/3",
                }}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />

                {/* Base gradient always visible */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(3,3,8,0.95) 0%, rgba(3,3,8,0.3) 60%, transparent 100%)",
                  }}
                />

                {/* Hover overlay */}
                <div
                  className="work-overlay absolute inset-0 transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}22 0%, rgba(3,3,8,0.7) 100%)`,
                  }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: item.accent }}>
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: "#fff" }}>
                    {item.name}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-3 max-w-xs transition-all duration-400 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md"
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          color: "rgba(255,255,255,0.6)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External link icon */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
