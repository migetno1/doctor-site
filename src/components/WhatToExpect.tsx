import { motion } from "framer-motion";
import { steps } from "../data/site";
import { fadeUp, revealOnce, stagger } from "../lib/motion";
import { Container, Eyebrow, Reveal } from "./primitives";

export function WhatToExpect() {
  return (
    <section id="what-to-expect" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-[34ch]">
          <Eyebrow>Visiting</Eyebrow>
          <h2 className="display-md mt-5 font-display">What to expect.</h2>
          <p className="mt-4 text-lg text-ink-soft">
            A simple, unhurried path from booking to follow-up.
          </p>
        </Reveal>

        <motion.ol
          variants={stagger(0.12)}
          {...revealOnce}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((s) => (
            <motion.li
              key={s.n}
              variants={fadeUp}
              className="group relative bg-ivory p-8 transition-colors duration-500 hover:bg-paper/60"
            >
              <span className="font-display text-3xl font-semibold text-clay">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
