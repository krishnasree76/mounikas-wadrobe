import { motion } from "framer-motion";

// Elegant lotus SVG matching the brand logo
export function LotusIcon({ className = "", strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Center petal */}
      <path d="M50 18 C46 32 46 50 50 64 C54 50 54 32 50 18 Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      {/* Inner left petal */}
      <path d="M50 64 C40 58 32 46 30 30 C36 38 44 50 50 64 Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      {/* Inner right petal */}
      <path d="M50 64 C60 58 68 46 70 30 C64 38 56 50 50 64 Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      {/* Outer left petal */}
      <path d="M50 66 C36 64 22 56 16 40 C20 54 30 64 50 66 Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      {/* Outer right petal */}
      <path d="M50 66 C64 64 78 56 84 40 C80 54 70 64 50 66 Z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
      {/* Base curve */}
      <path d="M18 60 C28 70 40 72 50 70 C60 72 72 70 82 60" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

export function LotusWatermark({
  className = "",
  opacity = 0.05,
  spin = false,
}: {
  className?: string;
  opacity?: number;
  spin?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${spin ? "animate-lotus-spin" : ""} ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <LotusIcon className="w-full h-full text-primary" strokeWidth={0.6} />
    </div>
  );
}

// Floating lotus petals decorative layer
export function FloatingPetals({ count = 8 }: { count?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 13 + 7) % 100;
        const size = 14 + ((i * 7) % 24);
        const delay = (i * 2.3) % 18;
        const duration = 14 + ((i * 3) % 10);
        return (
          <motion.div
            key={i}
            className="absolute text-primary/30"
            style={{
              left: `${left}%`,
              bottom: -40,
              width: size,
              height: size,
              animation: `float-petal ${duration}s linear ${delay}s infinite`,
            }}
          >
            <LotusIcon className="w-full h-full" strokeWidth={1} />
          </motion.div>
        );
      })}
    </div>
  );
}

// Decorative lotus motif used as section separator
export function LotusSeparator({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 ${className}`} aria-hidden="true">
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-primary/40" />
      <LotusIcon className="w-8 h-8 text-primary/60" strokeWidth={1.2} />
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-primary/40" />
    </div>
  );
}
