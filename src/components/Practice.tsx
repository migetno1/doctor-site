import { practice } from "../data/site";
import { Container, Eyebrow, Reveal } from "./primitives";

export function Practice() {
  return (
    <section id="practice" className="grain scroll-mt-20 bg-paper/50 py-24 sm:py-32">
      <Container>
        <Reveal className="max-w-[30ch]">
          <Eyebrow>{practice.eyebrow}</Eyebrow>
          <h2 className="display-md mt-5 font-display">{practice.name}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <Reveal className="flex flex-col">
            <div className="mb-6 overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow-soft)]">
              <img
                src="/images/optimized/busby1.jpg"
                alt="Entrance to Busby Medical Practice"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <dl className="divide-y divide-line rounded-[var(--radius)] border border-line bg-ivory px-6">
              {practice.rows.map((r) => (
                <div key={r.label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:gap-4">
                  <dt className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-ink-faint">
                    {r.label}
                  </dt>
                  <dd>
                    <a
                      href={r.href}
                      target={r.href.startsWith("http") ? "_blank" : undefined}
                      rel={r.href.startsWith("http") ? "noopener" : undefined}
                      className="font-medium text-ink transition-colors hover:text-forest"
                    >
                      {r.value}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-4">
                <dt className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-ink-faint">
                  {practice.hours.label}
                </dt>
                <dd className="whitespace-pre-line font-medium text-ink">
                  {practice.hours.value}
                </dd>
              </div>
            </dl>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1} className="overflow-hidden rounded-[var(--radius-lg)] border border-line shadow-[var(--shadow-soft)]">
            <iframe
              title="Map showing Busby Medical Practice, 123 Howick Street, Bathurst"
              src={practice.mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
