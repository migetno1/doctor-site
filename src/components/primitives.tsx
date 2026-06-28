import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, revealOnce, stagger } from "../lib/motion";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1160px] px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2.5">
      <span className="h-px w-7 bg-forest/60" />
      {children}
    </span>
  );
}

/** A block that fades + rises into view once. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      {...revealOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** A container that staggers its direct <RevealItem> children. */
export function RevealGroup({
  children,
  className = "",
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div variants={stagger(gap)} {...revealOnce} className={className}>
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
