import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { about } from "../data/site";
import { Container, Eyebrow, Reveal, RevealGroup, RevealItem } from "./primitives";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image */}
          <div ref={ref} className="relative">
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full rounded-[var(--radius-lg)] bg-forest-soft" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-soft)]">
              <motion.img
                style={{ y }}
                src="/images/optimized/alex_hero.jpg"
                alt="Dr Alexander Ho at Busby Medical"
                className="h-[112%] w-full object-cover"
              />
            </div>
            <p className="mt-4 pl-1 text-sm text-ink-faint">{about.portraitCaption}</p>
          </div>

          {/* Copy */}
          <div>
            <Reveal>
              <Eyebrow>{about.eyebrow}</Eyebrow>
              <h2 className="display-md mt-5 max-w-[18ch] font-display">
                {about.title}
              </h2>
            </Reveal>

            <RevealGroup className="mt-7 flex flex-col gap-5" gap={0.1}>
              {about.paragraphs.map((p, i) => (
                <RevealItem
                  key={i}
                  className={`leading-relaxed text-ink-soft ${
                    i === 0 ? "text-lg text-ink" : ""
                  }`}
                >
                  {p}
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
