import Image from "next/image";
import { Reveal } from "./reveal";
import { founder } from "@/lib/site";

/**
 * The founder, on the About page.
 *
 * A single signed statement rather than a team grid — one person presented
 * with weight reads as confidence, where a grid of one reads as a gap. Set on
 * the dark surface so it lands as a distinct moment between the workshop
 * photograph and the closing sections.
 *
 * Renders nothing until `founder` is filled in, and drops the portrait column
 * cleanly if there is no photograph yet.
 */
export function FounderSection() {
  if (!founder) return null;

  const { name, role, statement, bio, portrait, linkedin } = founder;

  return (
    <section className="section-y bg-ink text-paper">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-20">
        {portrait && (
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink-soft">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        )}

        <div className={portrait ? "lg:col-span-7" : "lg:col-span-9"}>
          <Reveal>
            <p className="label-mono text-white/55">Founder</p>
          </Reveal>

          <Reveal delay={60}>
            <blockquote className="display-md mt-8 max-w-[26ch] text-balance">
              {statement}
            </blockquote>
          </Reveal>

          <div className="mt-10 space-y-6">
            {bio.map((paragraph, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p className="body-text max-w-xl text-white/65">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="mt-12 border-t border-hairline-dark pt-7">
              <p className="display-sm">{name}</p>
              <p className="label-mono mt-3 text-white/55">{role}</p>
              {linkedin && (
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2.5 border-b border-white/25 pb-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:border-paper"
                >
                  LinkedIn
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 10"
                    className="h-2.5 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  >
                    <path d="M0 5h14.5M10.5 1l4 4-4 4" />
                  </svg>
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
