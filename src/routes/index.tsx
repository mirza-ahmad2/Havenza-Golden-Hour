import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Diamond, HandshakeIcon, ImageIcon, ShieldCheck } from "lucide-react";
import { Hero } from "@/components/site/hero";
import { GoldStatement, SectionEyebrow, SectionTitle } from "@/components/site/section";
import { PropertyCarousel } from "@/components/site/property-carousel";
import { pageSeo } from "@/lib/seo";
import heroHome from "@/assets/hero-home.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "Havenza Properties — Refinement, Rigour, Real Value in Dubai",
      description:
        "Boutique Dubai real estate advisory offering premium property solutions and strategic investment opportunities. Founded by Ansiya Rouf Madathilparambil.",
      path: "/",
      image: heroHome,
    }),
  component: Home,
});

const featured = [
  {
    title: "Marina Skyline Residences",
    area: "Dubai Marina",
    type: "Residential",
    highlight:
      "Waterfront tower with curated one-to-four-bedroom residences, private balconies and marina-facing frontage. Positioned for both end-user luxury and long-hold yield.",
    image: p1,
  },
  {
    title: "Palm Peninsula Villa",
    area: "Palm Jumeirah",
    type: "Signature Villa",
    highlight:
      "A private six-bedroom villa on the fronds of Palm Jumeirah with an infinity pool and unobstructed sea views — a trophy asset for the discerning buyer.",
    image: p2,
  },
  {
    title: "Downtown Sky Penthouse",
    area: "Downtown Dubai",
    type: "Penthouse",
    highlight:
      "A double-height penthouse framed by the Burj Khalifa and Fountains. Delivered fully-fitted with a curated interior specification.",
    image: p3,
  },
  {
    title: "Business Bay Investment Tower",
    area: "Business Bay",
    type: "Investment",
    highlight:
      "Fully-tenanted mixed-use asset with strong footfall, walking distance to Downtown and DIFC — engineered for stabilised yield.",
    image: p4,
  },
];

const pillars = [
  {
    icon: Compass,
    title: "Curated",
    body: "A short, hand-selected list of opportunities — every property is vetted before it reaches you.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous",
    body: "Operational discipline drawn from an HR-strategy background. Diligence, documented; decisions, defensible.",
  },
  {
    icon: Diamond,
    title: "Value-led",
    body: "We prioritise real value creation over transactional volume. Fewer clients, deeper relationships.",
  },
  {
    icon: HandshakeIcon,
    title: "Founder-led",
    body: "You work directly with Ansiya. No handoffs, no diluted service — one point of accountability.",
  },
];

function Home() {
  return (
    <>
      <Hero
        image={heroHome}
        imageAlt="Dubai skyline at golden hour featuring Burj Khalifa — Havenza Properties"
        eyebrow="Havenza Properties · Dubai"
        title={
          <>
            Refinement. Rigour. <em className="italic font-normal text-gold">Real Value.</em>
          </>
        }
        subtitle="Premium property solutions and strategic investment opportunities in one of the world's most dynamic real estate markets."
        cta={{ label: "Schedule a Consultation", to: "/contact" }}
        overlayIntensity="medium"
        full
      />

      <GoldStatement>"Property advisory that transcends the transaction."</GoldStatement>

      <section className="border-t border-white/5 py-24 md:py-32" aria-labelledby="featured-heading">
        <div className="container-h">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionEyebrow>Featured Opportunities</SectionEyebrow>
              <SectionTitle id="featured-heading" className="mt-5 max-w-2xl">
                A curated shortlist of Dubai's most considered properties.
              </SectionTitle>
            </div>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gold transition-opacity duration-300 hover:opacity-80"
            >
              View full portfolio <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <PropertyCarousel items={featured} />
        </div>
      </section>

      <section
        className="border-y border-white/5 bg-charcoal/40 py-24 md:py-32"
        aria-labelledby="why-havenza-heading"
      >
        <div className="container-h grid items-center gap-16 md:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <div
              className="flex aspect-[4/5] items-center justify-center overflow-hidden border border-white/10 bg-background/60"
              role="img"
              aria-label="Founder portrait placeholder"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-5 text-gold/70"
              >
                <div className="flex h-28 w-28 items-center justify-center border border-gold/35 bg-gold/5 sm:h-36 sm:w-36">
                  <ImageIcon size={48} strokeWidth={1.15} aria-hidden="true" className="sm:h-14 sm:w-14" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.28em] text-soft-gray">
                  Ansiya Rouf Madathilparambil
                </span>
              </motion.div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden border border-gold/50 bg-background px-6 py-5 md:block">
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Founded</div>
              <div className="mt-1 font-serif text-3xl text-warm-white">Dec 2025</div>
            </div>
          </div>
          <div>
            <SectionEyebrow>Why Havenza</SectionEyebrow>
            <SectionTitle id="why-havenza-heading" className="mt-5">
              Boutique by design.
              <br />
              <span className="text-warm-white/60">Founder-led by intent.</span>
            </SectionTitle>
            <p className="mt-8 max-w-lg leading-relaxed text-warm-white/80">
              Havenza was founded by <span className="text-gold">Ansiya Rouf Madathilparambil</span>, an
              HR strategist with 8+ years of cross-industry experience across real estate, tourism, and
              manufacturing. That operational rigour — the discipline of people-first, process-driven
              work — is the foundation of how we advise on property.
            </p>
            <p className="mt-5 max-w-lg leading-relaxed text-warm-white/80">
              We are deliberately small. We are deliberately selective. And we work with clients who
              value clarity over churn.
            </p>
            <div className="mt-10 grid max-w-lg grid-cols-1 gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="border-l border-gold/50 pl-4"
                >
                  <p.icon size={18} className="text-gold" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mt-3 text-[11px] uppercase tracking-[0.28em] text-warm-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-soft-gray">{p.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-32 md:py-40" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,169,97,0.14),transparent_65%)]" />
        <div className="container-h relative text-center">
          <SectionEyebrow>
            <span className="mx-auto">Let's Talk Property</span>
          </SectionEyebrow>
          <SectionTitle id="cta-heading" className="mx-auto mt-6 max-w-3xl">
            Begin with a conversation.
            <br />
            <span className="italic font-normal text-gold">Not a transaction.</span>
          </SectionTitle>
          <p className="mx-auto mt-8 max-w-xl leading-relaxed text-warm-white/75">
            Share your intent. We'll return with a considered shortlist and a candid point of view.
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 border border-gold bg-gold/5 px-10 py-4 text-[11px] uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background hover:shadow-[0_0_28px_rgba(201,169,97,0.22)]"
          >
            Schedule a Consultation
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
