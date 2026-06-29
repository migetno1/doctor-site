import { fees } from "../data/site";
import { Container, Eyebrow, Reveal } from "./primitives";

export function Fees() {
  return (
    <section className="pb-8">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[var(--radius-lg)] border border-line bg-paper/60 p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.55fr_1fr] lg:gap-12">
            <div>
              <div className="mb-7 hidden aspect-[4/3] w-full overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow-soft)] sm:block lg:max-w-[280px]">
                <img
                  src="/images/atmosphere/services-band-accent.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <Eyebrow>Fees & billing</Eyebrow>
              <h2 className="display-md mt-4 font-display">Clear and fair.</h2>
            </div>
            <div className="lg:pt-2">
              <p className="text-lg leading-relaxed text-ink-soft">{fees.body}</p>
              <p className="mt-4 text-sm text-ink-faint">{fees.note}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
