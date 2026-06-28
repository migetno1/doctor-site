/**
 * Serif ligature seal — the practice mark.
 * Outer ring + tightly-kerned serif "AH" + a fine clay dotted ring that
 * rotates on hover (place inside a `group` for the motion). Ring and
 * initials use `currentColor`; set the colour on the wrapper
 * (e.g. text-forest on light, text-ivory on dark).
 */
export function LogoSeal({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* solid outer ring */}
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.8" />
      {/* fine clay dotted ring — orbits on hover */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="#C9895F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="0.5 6.2"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        className="transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:rotate-[28deg]"
      />
      {/* tightly-kerned serif initials */}
      <text
        x="50.5"
        y="63"
        textAnchor="middle"
        fontFamily="'Fraunces', Georgia, serif"
        fontWeight={600}
        fontSize="39"
        letterSpacing="-3"
        fill="currentColor"
      >
        AH
      </text>
      {/* seal anchor dot */}
      <circle cx="50" cy="83.5" r="2.3" fill="#C9895F" />
    </svg>
  );
}
