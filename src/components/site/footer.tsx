import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";
import { Logo } from "./logo";

const LINKEDIN_URL = "https://www.linkedin.com/in/ansiya-rouf-hr/";
const EMAIL = "roufansiya@gmail.com";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5 bg-charcoal/40">
      <div className="container-h py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-soft-gray">
              A boutique Dubai property advisory, founded on refinement, rigour, and real value
              creation in one of the world's most dynamic real estate markets.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/havenza.properties"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 p-2 transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_rgba(201,169,97,0.12)]"
                aria-label="Havenza on Instagram"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 p-2 transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_rgba(201,169,97,0.12)]"
                aria-label="Ansiya Rouf on LinkedIn"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="border border-white/10 p-2 transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_rgba(201,169,97,0.12)]"
                aria-label={`Email ${EMAIL}`}
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <nav aria-label="Footer">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Navigate</div>
            <ul className="mt-6 space-y-3 text-sm text-warm-white/85">
              <li>
                <Link to="/" className="transition-colors duration-300 hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="transition-colors duration-300 hover:text-gold">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors duration-300 hover:text-gold">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors duration-300 hover:text-gold">
                  About Ansiya
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors duration-300 hover:text-gold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Contact</div>
            <ul className="mt-6 space-y-3 text-sm text-warm-white/85">
              <li>Dubai, United Arab Emirates</li>
              <li>
                <a href={`mailto:${EMAIL}`} className="transition-colors duration-300 hover:text-gold">
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/havenza.properties"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-gold"
                >
                  @havenza.properties
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-soft-gray md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Havenza Properties LLC. All rights reserved.</div>
          <div>
            This website is powered by{" "}
            <a
              href="https://theinnovations.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline-offset-4 transition-opacity hover:underline hover:opacity-90"
            >
              The Innovations
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
