import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  cta?: { label: string; to: "/contact" | "/properties" | "/services" | "/about" | "/" };
  overlayIntensity?: "light" | "medium" | "heavy";
  full?: boolean;
};

const overlay = {
  light: "from-background/40 via-background/30 to-background/70",
  medium: "from-background/60 via-background/45 to-background/85",
  heavy: "from-background/80 via-background/70 to-background",
};

export function Hero({
  image,
  imageAlt = "Havenza Properties Dubai",
  eyebrow,
  title,
  subtitle,
  cta,
  overlayIntensity = "medium",
  full = false,
}: Props) {
  return (
    <section
      className={`relative w-full overflow-hidden ${full ? "h-[100svh]" : "h-[min(86svh,920px)] min-h-[520px] sm:min-h-[620px]"}`}
      aria-label={typeof title === "string" ? title : "Page hero"}
    >
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover will-change-transform"
          fetchPriority="high"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${overlay[overlayIntensity]}`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,13,12,0.7)_100%)]" />
      </div>

      <div className="container-h relative z-10 flex h-full flex-col items-center justify-center px-1 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 text-[11px] uppercase tracking-[0.32em] text-gold"
          >
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-gold" aria-hidden="true" /> {eyebrow}{" "}
              <span className="h-px w-8 bg-gold" aria-hidden="true" />
            </span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-serif text-[clamp(2.1rem,6vw,5.2rem)] leading-[1.02] tracking-[-0.02em] text-warm-white"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-base leading-relaxed text-warm-white/80 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Link
              to={cta.to}
              className="group inline-flex items-center gap-3 border border-gold/70 px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background hover:shadow-[0_0_28px_rgba(201,169,97,0.22)]"
            >
              {cta.label}
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-warm-white/50"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/70 to-transparent" />
      </motion.div>
    </section>
  );
}
