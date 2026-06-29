import { nav, practice } from "../data/site";
import { BookButton } from "./BookButton";
import { LogoSeal } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory/70">
      <div className="mx-auto w-full max-w-[1160px] px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand + CTA */}
          <div>
            <div className="group flex items-center gap-3">
              <LogoSeal size={42} className="text-ivory" />
              <span className="font-display text-xl text-ivory">Dr Alexander Ho</span>
            </div>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-ivory/55">
              General Practitioner offering holistic, patient-centred care at
              Busby Medical Practice, Bathurst NSW.
            </p>
            <BookButton size="md" className="mt-6" />
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ivory/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-ivory/65 transition-colors hover:text-ivory">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ivory/40">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={practice.rows[1].href} className="text-ivory/65 transition-colors hover:text-ivory">
                  {practice.rows[1].value}
                </a>
              </li>
              <li className="text-ivory/65">123 Howick Street</li>
              <li className="text-ivory/65">Bathurst, NSW 2795</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/40 sm:flex-row sm:items-center">
          <p>© {year} Dr Alexander Ho · Busby Medical Practice, Bathurst NSW</p>
          <p>Holistic, patient-centred general practice.</p>
        </div>
      </div>
    </footer>
  );
}
