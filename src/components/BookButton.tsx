import { motion } from "framer-motion";
import { HOTDOC_LIGHTBOX } from "../data/site";

type Variant = "solid" | "outline" | "light";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-300 will-change-transform";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-[1.02rem]",
};

const variants: Record<Variant, string> = {
  solid: "bg-forest text-ivory hover:bg-forest-deep shadow-[0_10px_28px_-8px_rgba(46,93,82,0.6)]",
  outline: "border border-ink/20 text-ink hover:border-forest hover:text-forest",
  light: "bg-ivory text-forest hover:bg-white shadow-[0_10px_28px_-8px_rgba(0,0,0,0.4)]",
};

export function BookButton({
  variant = "solid",
  size = "md",
  className = "",
  label = "Book an appointment",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  return (
    <motion.a
      href={HOTDOC_LIGHTBOX}
      target="_blank"
      rel="noopener"
      data-hotdoc-widget="lightbox"
      data-hotbox-button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.985 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {label}
      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </motion.a>
  );
}
