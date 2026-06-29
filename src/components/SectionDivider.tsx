import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative flex h-[340px] items-center justify-center overflow-hidden sm:h-[420px]"
    >
      <motion.img
        style={{ y }}
        src="/images/atmosphere/section-divider.png"
        alt=""
        className="absolute inset-0 h-[124%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/55" />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-[24ch] px-6 text-center font-display text-[1.8rem] font-medium leading-[1.2] text-ivory sm:text-[2.6rem]"
      >
        Caring for Bathurst, <span className="italic text-clay-soft">close to home.</span>
      </motion.p>
    </section>
  );
}
