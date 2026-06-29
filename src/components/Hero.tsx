import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "../data/site";
import { BookButton } from "./BookButton";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-ivory pt-[112px] pb-16 sm:pb-20 lg:pt-[128px]"
    >
      {/* soft background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full bg-forest-soft/70 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-[360px] w-[360px] rounded-full bg-clay-soft/50 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1160px] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left — type */}
        <motion.div style={{ opacity: fade }}>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow inline-flex items-center gap-2.5"
          >
            <span className="h-px w-7 bg-forest/60" />
            {hero.eyebrow}
          </motion.span>

          <h1 className="display-xl mt-6 font-display font-medium leading-[0.98]">
            {"Dr Alexander".split(" ").map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.08 }}
                className="block"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.26 }}
              className="block italic text-forest"
            >
              Ho
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.4 }}
            className="mt-5 font-display text-xl text-ink-soft sm:text-2xl"
          >
            {hero.role} <span className="text-ink-faint">·</span> Bathurst, NSW
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}
            className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-soft"
          >
            {hero.lede}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <BookButton size="lg" />
            <a
              href="#about"
              className="nav-link text-[0.98rem] font-medium text-ink/80 hover:text-forest"
            >
              Meet Alex
            </a>
          </motion.div>
        </motion.div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          {/* clay accent frame */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[var(--radius-lg)] border border-clay/50" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lift)]">
            <motion.img
              style={{ y: imgY }}
              src="/images/optimized/alex_portrait.jpg"
              alt="Portrait of Dr Alexander Ho"
              className="h-[114%] w-full object-cover object-center"
            />
          </div>
          {/* floating caption chip */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
            className="absolute -left-5 bottom-8 hidden rounded-2xl border border-line bg-ivory/90 px-5 py-3 shadow-[var(--shadow-soft)] backdrop-blur sm:block"
          >
            <p className="font-display text-lg leading-none">RACGP Registrar</p>
            <p className="mt-1 text-sm text-ink-soft">Busby Medical · Bathurst</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
