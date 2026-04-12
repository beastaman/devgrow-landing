// components/ui/call-to-action-cta.tsx
"use client";

"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { PhoneInput } from "@/components/ui/phone-input";

interface CtaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  title: string;
  description: string;
  inputPlaceholder?: string;
  buttonText: string;
  onButtonClick?: (email: string, note: string) => void;
}

const CtaCard = React.forwardRef<HTMLDivElement, CtaCardProps>(
  (
    {
      className,
      imageSrc,
      title,
      description,
      inputPlaceholder = "Email address",
      buttonText,
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const router = useRouter();
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [dialCode, setDialCode] = React.useState("+91");
    const [note, setNote] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, phone: phone ? `${dialCode} ${phone}` : "", note }),
        });
        if (!res.ok) throw new Error("Failed");
        if (onButtonClick) onButtonClick(email, note);
        router.push(`/thank-you?email=${encodeURIComponent(email)}`);
      } catch {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 },
      },
    };
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, damping: 12 },
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow",
          className
        )}
        {...props}
      >
        <img
          src={imageSrc}
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/65" />

        <motion.div
          className="relative z-10 grid h-full grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12 lg:p-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left: heading + description */}
          <div className="flex flex-col items-start text-left text-white">
            <motion.h2
              className="text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl"
              variants={itemVariants}
            >
              {title}
            </motion.h2>
            <motion.p
              className="mt-4 max-w-xl text-lg text-neutral-200"
              variants={itemVariants}
            >
              {description}
            </motion.p>
          </div>

          {/* Right: form or success */}
          <motion.div
            className="flex w-full max-w-md flex-col items-center justify-center"
            variants={itemVariants}
          >
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3"
            >
              <Input
                type="email"
                placeholder={inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-neutral-700 bg-neutral-800/50 text-white placeholder:text-neutral-400"
                aria-label={inputPlaceholder}
                required
              />
              <PhoneInput
                value={phone}
                dialCode={dialCode}
                onValueChange={setPhone}
                onDialChange={setDialCode}
              />
              <textarea
                placeholder="Tell us about your project (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="w-full rounded-md border border-neutral-700 bg-neutral-800/50 px-3 py-2.5 text-sm text-white placeholder:text-neutral-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#A78BFA]/40 transition-colors"
                aria-label="Project details"
              />
              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}
              <ShinyButton type="submit" disabled={loading} className="w-full justify-center">
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                ) : (
                  `${buttonText} →`
                )}
              </ShinyButton>
            </form>
          </motion.div>
        </motion.div>
      </div>
    );
  }
);

CtaCard.displayName = "CtaCard";
export { CtaCard };
