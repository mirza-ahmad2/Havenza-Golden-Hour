import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { Hero } from "@/components/site/hero";
import { SectionEyebrow, SectionTitle } from "@/components/site/section";
import { ConsultationEnquiryForm } from "@/components/site/enquiry-form";
import { pageSeo } from "@/lib/seo";
import heroImg from "@/assets/hero-contact.jpg";

const LINKEDIN_URL = "https://www.linkedin.com/in/ansiya-rouf-hr/";
const EMAIL = "roufansiya@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact — Schedule a Consultation with Havenza Dubai",
      description:
        "Schedule a private consultation with Havenza Properties. Share your investment interest and Ansiya will personally review your enquiry.",
      path: "/contact",
      image: heroImg,
    }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="Contact"
        title="Let's Talk Property."
        subtitle="Share your intent. We'll return with a considered shortlist and a candid point of view."
        overlayIntensity="heavy"
        imageAlt="Dubai skyline at dusk — Havenza Properties contact"
      />

      <section className="py-24 md:py-32" aria-labelledby="enquiry-heading">
        <div className="container-h grid gap-16 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionEyebrow>Enquiry</SectionEyebrow>
            <SectionTitle id="enquiry-heading" className="mt-5 max-w-xl">
              Begin the conversation.
            </SectionTitle>
            <p className="mt-6 max-w-lg leading-relaxed text-warm-white/75">
              Every enquiry is read personally by Ansiya. Expect a response within one business day.
            </p>
            <div className="mt-14">
              <ConsultationEnquiryForm />
            </div>
          </div>

          <aside className="lg:border-l lg:border-white/10 lg:pl-8" aria-label="Direct contact details">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Direct Contact</div>
            <ul className="mt-8 space-y-6">
              <ContactRow icon={MapPin} label="Studio" value="Dubai, United Arab Emirates" />
              <ContactRow icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactRow
                icon={Instagram}
                label="Instagram"
                value="@havenza.properties"
                href="https://www.instagram.com/havenza.properties"
              />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="Ansiya Rouf Madathilparambil"
                href={LINKEDIN_URL}
              />
            </ul>

            <div className="mt-14 border border-gold/30 bg-charcoal/40 p-8 transition-colors duration-500 hover:border-gold/50">
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Response Time</div>
              <p className="mt-4 font-serif text-2xl leading-snug text-warm-white">
                Within one business day.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-soft-gray">
                Havenza is a boutique practice. We reply personally, in order, to every enquiry we
                receive.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="group flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-gold transition-all duration-300 group-hover:border-gold group-hover:shadow-[0_0_18px_rgba(201,169,97,0.15)]">
        <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.28em] text-soft-gray">{label}</div>
        <div className="mt-1 text-warm-white transition-colors duration-300 group-hover:text-gold">
          {value}
        </div>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {Content}
        </a>
      ) : (
        Content
      )}
    </li>
  );
}
