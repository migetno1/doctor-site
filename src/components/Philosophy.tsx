import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { philosophy } from "../data/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const words = philosophy.quote.split(" ");

  return (
    <section ref={ref} className="relative overflow-hidden bg-forest-deep py-28 sm:py-36">
      {/* atmospheric background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src="/images/atmosphere/philosophy-band-bg.png"
          alt=""
          className="h-[116%] w-full object-cover opacity-25"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/80 via-forest-deep/70 to-forest-deep/90" />

      <div className="mx-auto w-full max-w-[1000px] px-6 text-center sm:px-8">
        <span className="eyebrow text-clay-soft">Approach to care</span>
        <blockquote className="mt-8">
          <p className="font-display text-[1.7rem] font-medium leading-[1.35] text-ivory sm:text-[2.4rem] sm:leading-[1.3]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.15 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.025 }}
                className="inline-block"
              >
                {w}&nbsp;
              </motion.span>
            ))}
          </p>
          <footer className="mt-8 font-display text-lg italic text-clay-soft">
            — {philosophy.attribution}
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
