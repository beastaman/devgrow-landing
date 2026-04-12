"use client";

import React, { useState, useRef, useEffect } from "react";

export const COUNTRY_CODES = [
  { code: "IN", flag: "🇮🇳", dial: "+91",  label: "India" },
  { code: "US", flag: "🇺🇸", dial: "+1",   label: "United States" },
  { code: "CA", flag: "🇨🇦", dial: "+1",   label: "Canada" },
  { code: "GB", flag: "🇬🇧", dial: "+44",  label: "United Kingdom" },
  { code: "AE", flag: "🇦🇪", dial: "+971", label: "UAE" },
  { code: "AU", flag: "🇦🇺", dial: "+61",  label: "Australia" },
  { code: "SG", flag: "🇸🇬", dial: "+65",  label: "Singapore" },
  { code: "DE", flag: "🇩🇪", dial: "+49",  label: "Germany" },
  { code: "FR", flag: "🇫🇷", dial: "+33",  label: "France" },
  { code: "NL", flag: "🇳🇱", dial: "+31",  label: "Netherlands" },
  { code: "SA", flag: "🇸🇦", dial: "+966", label: "Saudi Arabia" },
  { code: "NZ", flag: "🇳🇿", dial: "+64",  label: "New Zealand" },
];

interface PhoneInputProps {
  value: string;
  dialCode: string;
  onValueChange: (val: string) => void;
  onDialChange: (dial: string) => void;
  placeholder?: string;
}

export function PhoneInput({
  value,
  dialCode,
  onValueChange,
  onDialChange,
  placeholder = "Phone number",
}: PhoneInputProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selected = COUNTRY_CODES.find((c) => c.dial === dialCode) ?? COUNTRY_CODES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <div className="flex w-full gap-2 relative" ref={dropdownRef}>
      {/* Dial code selector */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 h-11 px-3 rounded-lg text-sm shrink-0 transition-all focus:outline-none"
        style={{
          ...inputStyle,
          color: "rgba(255,255,255,0.8)",
          borderColor: open ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.1)",
          minWidth: 88,
        }}
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="font-medium tabular-nums">{selected.dial}</span>
        <svg
          className="w-3 h-3 ml-auto opacity-50 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 top-12 z-50 w-56 rounded-xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(15,12,35,0.98)",
            border: "1px solid rgba(167,139,250,0.2)",
            backdropFilter: "blur(16px)",
            maxHeight: 280,
            overflowY: "auto",
          }}
        >
          {COUNTRY_CODES.map((c) => (
            <button
              key={c.code}
              type="button"
              onClick={() => { onDialChange(c.dial); setOpen(false); }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors"
              style={{
                color: c.dial === dialCode ? "#A78BFA" : "rgba(255,255,255,0.7)",
                background: c.dial === dialCode ? "rgba(167,139,250,0.1)" : "transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(167,139,250,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = c.dial === dialCode ? "rgba(167,139,250,0.1)" : "transparent")}
            >
              <span className="text-base">{c.flag}</span>
              <span className="flex-1">{c.label}</span>
              <span className="tabular-nums text-xs opacity-50">{c.dial}</span>
            </button>
          ))}
        </div>
      )}

      {/* Number input */}
      <input
        type="tel"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onValueChange(e.target.value.replace(/[^0-9\s\-]/g, ""))}
        className="flex-1 h-11 px-3.5 rounded-lg text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-all"
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(167,139,250,0.5)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
      />
    </div>
  );
}
