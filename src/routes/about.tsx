import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { Hero } from "@/components/site/hero";
import { SectionEyebrow, SectionTitle, GoldStatement } from "@/components/site/section";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      title: "About Ansiya — Founder, Havenza Properties Dubai",
      description:
        "Ansiya Rouf Madathilparambil founded Havenza Properties on 8+ years of cross-industry experience in real estate, tourism and manufacturing, and a background as an HR strategist.",
      path: "/about",
      image: heroImg,
    }),
  component: About,
});

const values = [
  {
    title: "Refinement",
    body: "A quiet, curated aesthetic — in how we present opportunities and in how we work with clients.",
  },
  {
    title: "Rigour",
    body: "Operational discipline from an HR-strategy background. Every recommendation is defensible.",
  },
  {
    title: "Real Value",
    body: "We optimise for long-term value creation over short-term transactional wins.",
  },
  {
    title: "Client-First",
    body: "You are the client, not the counterparty. Our incentive is your outcome.",
  },
];

const timeline = [
  { year: "8+ yrs", label: "Cross-industry professional experience" },
  { year: "3", label: "Sectors: real estate, tourism, manufacturing" },
  { year: "2025", label: "Founded Havenza Properties LLC" },
];

function About() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Refined Dubai architecture — About Havenza Properties founder"
        eyebrow="Founder"
        title="Ansiya Rouf Madathilparambil"
        subtitle="Founder & Chief Executive · Havenza Properties LLC"
        overlayIntensity="heavy"
      />

      <section className="py-24 md:py-32" aria-labelledby="founder-heading">
        <div className="container-h grid items-start gap-16 md:grid-cols-[1fr_1.3fr]">
          <div className="md:sticky md:top-32">
            <SectionEyebrow>The Founder</SectionEyebrow>
            <SectionTitle id="founder-heading" className="mt-5">
              A vision rooted in <em className="italic font-normal text-gold">rigour</em>.
            </SectionTitle>
            <div
              className="mt-10 flex aspect-[4/5] max-w-sm items-center justify-center border border-white/10 bg-charcoal/50"
              role="img"
              aria-label="Founder portrait placeholder"
            >
              <div className="flex flex-col items-center gap-4 text-gold/70">
                <div className="flex h-24 w-24 items-center justify-center border border-gold/35 bg-gold/5">
                  <ImageIcon size={40} strokeWidth={1.15} aria-hidden="true" />
                </div>
                <span className="px-4 text-center text-[10px] uppercase tracking-[0.28em] text-soft-gray">
                  Portrait
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-6 leading-relaxed text-warm-white/85">
            <p className="text-lg text-warm-white">
              Ansiya brings 8+ years of cross-industry experience across real estate, tourism, and
              manufacturing to Havenza — grounded in a background as an HR strategist.
            </p>
            <p>
              Her professional path has been shaped by an unusual combination: the human-first
              discipline of talent and organisation strategy, layered onto the operational realities
              of running businesses across sectors. It is a foundation that translates directly into
              how Havenza advises on property — with clarity, structure and quiet accountability.
            </p>
            <p>
              Ansiya holds a Bachelor of Arts in English Language and Literature from the University
              of Kerala. Havenza Properties was founded in December 2025 — a boutique advisory built
              alongside a broader professional portfolio in tourism and operations leadership.
            </p>
            <blockquote className="mt-10 border-l-2 border-gold py-2 pl-6 font-serif text-xl italic leading-relaxed text-warm-white/95">
              "Property advisory must transcend transactional service. Havenza is a vision rooted in
              refinement, rigour, and real value creation within Dubai's ever-evolving real estate
              landscape."
              <footer className="mt-4 font-sans text-xs not-italic uppercase tracking-[0.28em] text-gold">
                — Ansiya Rouf Madathilparambil, Founder
              </footer>
            </blockquote>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {timeline.map((t) => (
                <div key={t.label} className="border-t border-gold/40 pt-4">
                  <div className="font-serif text-3xl text-warm-white">{t.year}</div>
                  <div className="mt-2 text-xs leading-relaxed text-soft-gray">{t.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoldStatement>"Refinement. Rigour. Real Value Creation."</GoldStatement>

      <section
        className="border-y border-white/5 bg-charcoal/40 py-24 md:py-32"
        aria-labelledby="values-heading"
      >
        <div className="container-h">
          <SectionEyebrow>Values</SectionEyebrow>
          <SectionTitle id="values-heading" className="mt-5 max-w-2xl">
            Four principles guide every engagement.
          </SectionTitle>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="border border-white/10 bg-background/40 p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="text-[10px] uppercase tracking-[0.32em] text-gold">0{i + 1}</div>
                <h3 className="mt-5 font-serif text-2xl text-warm-white">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-soft-gray">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
