import { motion } from "framer-motion";
import { serviceCategories } from "../data/site";
import { fadeUp, revealOnce, stagger } from "../lib/motion";
import { Container, Eyebrow, Reveal } from "./primitives";

export function Services() {
  return (
    <section id="services" className="grain relative scroll-mt-20 bg-paper/50 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-[26ch]">
            <Eyebrow>Services</Eyebrow>
            <h2 className="display-md mt-5 font-display">
              Comprehensive care, all in one place.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[40ch] text-ink-soft">
              From everyday illness to long-term conditions, procedures and
              preventive checks — organised here by the kind of care you need.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger(0.1)}
          {...revealOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {serviceCategories.map((cat, idx) => (
            <motion.article
              key={cat.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-ivory p-8 shadow-[var(--shadow-soft)] sm:p-10"
            >
              {/* index marker */}
              <span className="font-display text-sm font-semibold text-clay">
                0{idx + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl">{cat.title}</h3>
              <p className="mt-2 text-[0.95rem] text-ink-soft">{cat.blurb}</p>

              <ul className="mt-7 flex flex-col divide-y divide-line">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3 text-[0.98rem] text-ink/90"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest-soft text-forest">
                      <svg
                        viewBox="0 0 12 12"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 6.5l2.2 2.2L9.5 3.5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* hover accent line */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-forest transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
