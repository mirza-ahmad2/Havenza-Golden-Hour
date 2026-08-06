import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type Property = {
  title: string;
  area: string;
  type: string;
  highlight: string;
  image: string;
};

export function PropertyCard({ p, index = 0 }: { p: Property; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden border border-white/5 bg-charcoal/60 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={p.image}
          alt={`${p.title} in ${p.area} — ${p.type} opportunity with Havenza`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out will-change-transform group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
        <div className="absolute left-5 top-5 border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-gold">
          {p.type}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-7">
        <div className="text-[11px] uppercase tracking-[0.26em] text-soft-gray">{p.area}</div>
        <h3 className="mt-2 font-serif text-2xl leading-tight text-warm-white md:text-[26px]">
          {p.title}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-warm-white/70">{p.highlight}</p>
        <Link
          to="/contact"
          className="group/link mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gold"
        >
          Enquire
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
}
