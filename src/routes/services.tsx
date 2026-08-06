import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2, LineChart, Users, Check } from "lucide-react";
import { Hero } from "@/components/site/hero";
import { SectionEyebrow, SectionTitle, GoldStatement } from "@/components/site/section";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-services.jpg";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSeo({
      title: "Services — Havenza Property Advisory Dubai",
      description:
        "Property advisory, strategic investment guidance, and client relationship management for premium buyers and investors in Dubai.",
      path: "/services",
      image: heroImg,
    }),
  component: Services,
});

const pillars = [
  {
    icon: Building2,
    eyebrow: "01 · Advisory",
    title: "Property Advisory",
    body: "End-to-end guidance across acquisition, sale and portfolio review. We work as a personal advisor — not a broker chasing commission.",
    bullets: [
      "Off-market and pre-launch access",
      "Independent developer & handover diligence",
      "Structured negotiation and deal-close",
    ],
  },
  {
    icon: LineChart,
    eyebrow: "02 · Investment",
    title: "Strategic Investment Guidance",
    body: "Investment-grade analysis for buyers building a Dubai property allocation — with a clear view of yield, liquidity and exit.",
    bullets: [
      "Location and asset-class shortlisting",
      "Yield, capital-appreciation and hold-period modelling",
      "Portfolio diversification advisory",
    ],
  },
  {
    icon: Users,
    eyebrow: "03 · Relationship",
    title: "Client Experience & Relationship Management",
    body: "A single point of contact through, and beyond, the transaction — from handover coordination to leasing, resale and future acquisitions.",
    bullets: [
      "Handover, snagging and furnishing coordination",
      "Leasing and property management referral",
      "Long-term portfolio stewardship",
    ],
  },
];

function Services() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Premium Dubai interiors representing Havenza advisory services"
        eyebrow="Services"
        title="A boutique advisory practice."
        subtitle="Three service pillars, one point of accountability. Fewer clients, deeper work."
        overlayIntensity="heavy"
      />

      <section className="py-24 md:py-32" aria-labelledby="services-heading">
        <h2 id="services-heading" className="sr-only">
          Havenza service pillars
        </h2>
        <div className="container-h space-y-24">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className={`grid items-start gap-12 md:grid-cols-[1fr_1.4fr] ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="text-[11px] uppercase tracking-[0.32em] text-gold">{p.eyebrow}</div>
                <div className="mt-8 flex h-14 w-14 items-center justify-center border border-gold/40 text-gold transition-colors duration-300 hover:border-gold">
                  <p.icon size={22} strokeWidth={1.4} aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.08] tracking-[-0.02em] text-warm-white">
                  {p.title}
                </h3>
                <p className="mt-6 max-w-2xl leading-relaxed text-warm-white/80">{p.body}</p>
                <ul className="mt-8 max-w-xl space-y-3">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-warm-white/85">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-gold"
                        strokeWidth={1.6}
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <GoldStatement>"Fewer clients. Deeper relationships. Better outcomes."</GoldStatement>
    </>
  );
}
