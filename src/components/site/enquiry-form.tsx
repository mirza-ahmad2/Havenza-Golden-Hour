import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Send } from "lucide-react";
import { useEffect, useId, useRef } from "react";

const interests = [
  "Off-plan investment",
  "Ready-to-move residence",
  "Luxury villa",
  "Commercial / mixed-use",
  "Portfolio advisory",
];

const budgets = ["Under AED 2M", "AED 2M – 5M", "AED 5M – 10M", "AED 10M – 25M", "AED 25M+"];

export function ConsultationEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="border border-gold/40 bg-charcoal/50 p-12 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
          <Check size={20} aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-serif text-3xl text-warm-white">Thank you.</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-soft-gray">
          Your enquiry has been received. Ansiya will personally review your details and reach out
          within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Nationality" name="nationality" required />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <BrandSelect label="Investment Interest" name="interest" options={interests} />
        <BrandSelect label="Budget Range" name="budget" options={budgets} />
      </div>
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <div>
        <label htmlFor="message" className="mb-3 block text-[11px] uppercase tracking-[0.26em] text-gold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={1000}
          className="w-full resize-none border-b border-white/15 bg-transparent py-3 text-warm-white outline-none transition-colors placeholder:text-soft-gray/60 focus:border-gold"
          placeholder="Tell us about the property or investment you have in mind…"
        />
      </div>
      <button
        type="submit"
        className="group inline-flex items-center gap-3 border border-gold px-9 py-4 text-[11px] uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
      >
        Send Enquiry
        <Send size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="mb-3 block text-[11px] uppercase tracking-[0.26em] text-gold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        maxLength={200}
        autoComplete={autoComplete}
        className="w-full border-b border-white/15 bg-transparent py-3 text-warm-white outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function BrandSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  const id = useId();
  const listId = `${id}-listbox`;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <label id={`${id}-label`} className="mb-3 block text-[11px] uppercase tracking-[0.26em] text-gold">
        {label}
      </label>
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${id}-label`}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between border-b border-white/15 bg-transparent py-3 text-left text-warm-white outline-none transition-colors focus:border-gold focus-visible:ring-1 focus-visible:ring-gold"
      >
        <span className={value ? "text-warm-white" : "text-soft-gray/70"}>
          {value || "Select…"}
        </span>
        <ChevronDown
          size={16}
          className={`text-gold/80 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            id={listId}
            role="listbox"
            aria-labelledby={`${id}-label`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute z-30 mt-2 max-h-60 w-full overflow-auto border border-gold/30 bg-background/98 py-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md"
          >
            {options.map((o) => {
              const selected = value === o;
              return (
                <li key={o} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => {
                      setValue(o);
                      setOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 ${
                      selected
                        ? "bg-gold/20 text-gold"
                        : "text-warm-white/90 hover:bg-gold/15 hover:text-gold"
                    }`}
                  >
                    {o}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
