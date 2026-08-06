import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      aria-label="Havenza Properties — Home"
      className={`group inline-flex items-center gap-2.5 text-[15px] ${className}`}
    >
      <img
        src="/havenza-logo.png"
        alt=""
        width={15}
        height={18}
        className="h-[1em] w-auto shrink-0 object-contain object-center"
        aria-hidden="true"
        decoding="async"
      />
      <span className="font-serif leading-none tracking-[0.32em] uppercase text-warm-white transition-colors duration-300 group-hover:text-gold">
        Havenza
      </span>
    </Link>
  );
}
