import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type CTASectionProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  children: ReactNode;
  tone?: "dark" | "light";
};

/** Closing statement: one large line, room around it, and a way forward. */
export function CTASection({
  eyebrow,
  title,
  body,
  children,
  tone = "dark",
}: CTASectionProps) {
  const dark = tone === "dark";

  return (
    <section
      className={`section-y ${dark ? "bg-ink text-paper" : "bg-bone text-ink"}`}
    >
      <div className="container-page">
        {eyebrow && (
          <Reveal>
            <p className={`label-mono ${dark ? "text-white/55" : "text-slate"}`}>
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={60}>
          <h2 className="display-hero mt-8 max-w-[18ch] text-balance">{title}</h2>
        </Reveal>
        {body && (
          <Reveal delay={120}>
            <div
              className={`lead mt-10 max-w-xl ${dark ? "text-white/65" : "text-slate"}`}
            >
              {body}
            </div>
          </Reveal>
        )}
        <Reveal delay={180}>
          <div className="mt-12 flex flex-wrap items-center gap-4 md:mt-14">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
