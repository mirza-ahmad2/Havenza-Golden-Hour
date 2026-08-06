import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold"
    >
      <span className="h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.h2
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`font-serif text-[clamp(1.85rem,4.4vw,3.6rem)] leading-[1.05] tracking-[-0.02em] text-warm-white ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export function GoldStatement({ children }: { children: ReactNode }) {
  return (
    <section className="py-28 md:py-36" aria-hidden={false}>
      <div className="container-h">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl text-center font-serif text-[clamp(1.6rem,4vw,3.2rem)] italic leading-[1.15] tracking-[-0.01em] text-gold"
        >
          {children}
        </motion.p>
      </div>
    </section>
  );
}
