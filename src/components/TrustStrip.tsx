import { Reveal } from "./primitives";
import { credentials } from "../data/site";

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper/60">
      <Reveal className="mx-auto flex w-full max-w-[1160px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-6 sm:px-8">
        {credentials.map((c, i) => (
          <div key={c} className="flex items-center gap-8">
            {i > 0 && <span className="hidden h-1 w-1 rounded-full bg-clay sm:block" />}
            <span className="text-sm font-medium tracking-tight text-ink-soft">
              {c}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
