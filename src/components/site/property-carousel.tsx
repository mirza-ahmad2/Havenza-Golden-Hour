import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Property } from "./property-card";

export function PropertyCarousel({ items }: { items: Property[] }) {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [items.length]);

  const current = items[index];

  const nav = (dir: 1 | -1) => {
    if (timer.current) clearInterval(timer.current);
    setIndex((i) => (i + dir + items.length) % items.length);
  };

  return (
    <div
      className="relative grid items-stretch gap-10 md:grid-cols-[1.15fr_1fr]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured property opportunities"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal md:aspect-auto md:h-[620px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.image}
            src={current.image}
            alt={`${current.title} in ${current.area}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
            loading="lazy"
            decoding="async"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
      </div>
      <div className="flex flex-col justify-between md:pl-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7 }}
            aria-live="polite"
          >
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">
              {current.type} · {current.area}
            </div>
            <h3 className="mt-5 font-serif text-[clamp(1.8rem,3.4vw,3rem)] leading-tight text-warm-white">
              {current.title}
            </h3>
            <p className="mt-6 max-w-lg leading-relaxed text-warm-white/75">{current.highlight}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gold transition-opacity duration-300 hover:opacity-80"
            >
              Enquire on this opportunity
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => nav(-1)}
              aria-label="Previous property"
              className="border border-white/15 p-3 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => nav(1)}
              aria-label="Next property"
              className="border border-white/15 p-3 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
          <div className="text-[11px] tracking-[0.28em] text-soft-gray" aria-hidden="true">
            <span className="text-gold">{String(index + 1).padStart(2, "0")}</span>
            <span className="mx-2">/</span>
            {String(items.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}
