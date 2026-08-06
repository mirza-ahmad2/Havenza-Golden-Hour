import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/hero";
import { SectionEyebrow, SectionTitle, GoldStatement } from "@/components/site/section";
import { PropertyCard } from "@/components/site/property-card";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-properties.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";

export const Route = createFileRoute("/properties")({
  head: () =>
    pageSeo({
      title: "Properties & Investment Opportunities — Havenza Dubai",
      description:
        "A curated portfolio of premium Dubai residences and strategic investment opportunities across Dubai Marina, Palm Jumeirah, Downtown Dubai and Business Bay.",
      path: "/properties",
      image: heroImg,
    }),
  component: Properties,
});

const listings = [
  {
    title: "Marina Skyline Residences",
    area: "Dubai Marina",
    type: "Residential",
    highlight:
      "Waterfront tower with 1–4 bedroom residences, marina-facing frontage and strong yield profile.",
    image: p1,
  },
  {
    title: "Palm Peninsula Villa",
    area: "Palm Jumeirah",
    type: "Signature Villa",
    highlight: "Six-bedroom villa with infinity pool and unobstructed sea views. A trophy asset.",
    image: p2,
  },
  {
    title: "Downtown Sky Penthouse",
    area: "Downtown Dubai",
    type: "Penthouse",
    highlight: "Double-height penthouse framed by Burj Khalifa and the Fountains. Fully fitted.",
    image: p3,
  },
  {
    title: "Business Bay Investment Tower",
    area: "Business Bay",
    type: "Investment",
    highlight: "Fully-tenanted mixed-use asset engineered for stabilised institutional yield.",
    image: p4,
  },
  {
    title: "Emirates Hills Estate",
    area: "Emirates Hills",
    type: "Private Estate",
    highlight:
      "Golf-course-facing estate in one of Dubai's most exclusive gated communities. Private commission.",
    image: p2,
  },
  {
    title: "DIFC Corporate Floor",
    area: "DIFC",
    type: "Commercial",
    highlight:
      "Full floor plate in a prime DIFC tower — ideal for family-office relocation or regional HQ.",
    image: p4,
  },
];

function Properties() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Luxury Dubai residences and skyline — Havenza property portfolio"
        eyebrow="Portfolio"
        title="Properties & Investment Opportunities"
        subtitle="A curated selection of Dubai residences, private estates and investment-grade assets — each vetted before it reaches this page."
      />

      <section className="py-24 md:py-32" aria-labelledby="listings-heading">
        <div className="container-h">
          <div className="max-w-2xl">
            <SectionEyebrow>Selected Opportunities</SectionEyebrow>
            <SectionTitle id="listings-heading" className="mt-5">
              A short list, held to a high bar.
            </SectionTitle>
            <p className="mt-6 leading-relaxed text-warm-white/75">
              Havenza is not a listings portal. Every opportunity below has been reviewed for
              location, developer credibility, delivery timeline and exit optionality. The complete
              shortlist — including off-market instructions — is shared privately during
              consultation.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((l, i) => (
              <PropertyCard key={l.title} p={l} index={i} />
            ))}
          </div>
        </div>
      </section>

      <GoldStatement>"The right property, held with intent, outperforms the market."</GoldStatement>
    </>
  );
}
