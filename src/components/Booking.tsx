import { motion } from "framer-motion";
import { HOTDOC_URL, practice } from "../data/site";
import { BookButton } from "./BookButton";
import { Container, Reveal } from "./primitives";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Booking() {
  return (
    <section id="book" className="scroll-mt-20 py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--radius-lg)] bg-forest px-6 py-14 text-ivory shadow-[var(--shadow-lift)] sm:px-12 sm:py-16">
            {/* soft glow accents */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-clay/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-ivory/10 blur-3xl" />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Pitch */}
              <div>
                <span className="eyebrow text-clay-soft">Book online</span>
                <h2 className="display-md mt-5 font-display text-ivory">
                  Ready when you are.
                </h2>
                <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-ivory/85">
                  Appointments with Dr Ho are booked through HotDoc. Pick a time
                  that suits you — it takes less than a minute, and you'll get a
                  reminder before your visit.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <BookButton variant="light" size="lg" />
                  <a
                    href={`tel:${practice.rows[1].value.replace(/\s/g, "")}`}
                    className="text-ivory/80 transition-colors hover:text-ivory"
                  >
                    or call {practice.rows[1].value}
                  </a>
                </div>
              </div>

              {/* Booking panel — HotDoc */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
                className="rounded-[var(--radius)] border border-ivory/15 bg-ivory/5 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl text-ivory">Busby Medical</p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-ivory/10 px-3 py-1 text-xs font-medium text-clay-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-clay-soft" />
                    Booking open
                  </span>
                </div>
                <p className="mt-1 text-sm text-ivory/70">
                  Dr Alexander Ho · General Practitioner
                </p>

                <dl className="mt-6 space-y-3 border-t border-ivory/15 pt-5 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-ivory/60">Consulting days</dt>
                    <dd className="text-ivory">Tue – Fri</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ivory/60">Hours</dt>
                    <dd className="text-ivory">8:00 am – 5:00 pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ivory/60">Location</dt>
                    <dd className="text-ivory">Bathurst, NSW</dd>
                  </div>
                </dl>

                <BookButton variant="light" size="md" className="mt-7 w-full" />
                <a
                  href={HOTDOC_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 block text-center text-xs text-ivory/55 underline-offset-4 hover:text-ivory/80 hover:underline"
                >
                  View full availability on HotDoc
                </a>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
