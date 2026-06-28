import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

// Parent that staggers children using the fadeUp variant.
export const stagger = (gap = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
});

// Shared props for a scroll-reveal block. once:false so content hides
// again after scrolling past and re-reveals when scrolled back into view.
export const revealOnce = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: false, margin: "-12% 0px -12% 0px" },
};
