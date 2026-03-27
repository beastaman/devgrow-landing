import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/devgrowlogo.png",
    apple: "/devgrowlogo.png",
  },
  title: "DevGrow — Build Digital Products That Scale",
  description:
    "Full-stack development agency shipping AI-powered web apps, SaaS platforms, and mobile apps in 3-4 weeks. 20+ production apps. $50k+ revenue generated for clients.",
  keywords: [
    "web development agency",
    "SaaS development",
    "AI integration",
    "Next.js",
    "React Native",
    "mobile app development",
    "full stack development",
  ],
  openGraph: {
    title: "DevGrow — Build Digital Products That Scale",
    description:
      "Full-stack agency shipping AI-powered apps in 3-4 weeks. 20+ production apps shipped.",
    url: "https://devgrow.org",
    siteName: "DevGrow",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ background: "#030308" }}>
      <body style={{ background: "#030308" }}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
