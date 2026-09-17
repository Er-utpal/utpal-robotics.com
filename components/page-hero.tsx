import Image from "next/image";
import type { ReactNode } from "react";
import type { Asset } from "@/lib/assets";
import { Reveal } from "./reveal";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Full-bleed background photograph. Omit for a typographic hero. */
  image?: Asset;
  /** CSS object-position for the background crop, e.g. "50% 35%". */
  imagePosition?: string;
  tone?: "dark" | "light";
  height?: "short" | "standard";
  children?: ReactNode;
  /** Caption pinned to the bottom-right of an image hero. */
  caption?: string;
};

/**
 * Interior page hero. With an image it runs full-bleed behind the header;
 * without one it is purely typographic on a flat surface.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imagePosition = "50% 50%",
  tone = "dark",
  height = "standard",
  children,
  caption,
}: PageHeroProps) {
  const dark = tone === "dark" || Boolean(image);
  const minHeight =
    height === "short"
      ? "min-h-[58vh] md:min-h-[62vh]"
      : "min-h-[72vh] md:min-h-[78vh]";

  return (
    <section
      className={`relative flex flex-col justify-end overflow-hidden ${minHeight} ${
        image ? "bg-ink" : dark ? "bg-ink" : "bg-bone"
      } ${dark ? "text-paper" : "text-ink"}`}
    >
      {image && (
        <>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: imagePosition }}
            className="object-cover"
          />
          {/* Two scrims: one lifts the headline off the photograph, the other
              keeps the header legible across the top. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/45"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/10 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent"
          />
        </>
      )}

      <div className="container-page relative w-full pt-36 pb-16 md:pt-44 md:pb-20">
        <Reveal>
          <p
            className={`label-mono ${dark ? "text-white/60" : "text-slate"}`}
          >
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl mt-6 max-w-5xl text-balance md:mt-8">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <div
              className={`lead mt-8 max-w-2xl ${
                dark ? "text-white/70" : "text-slate"
              }`}
            >
              {intro}
            </div>
          </Reveal>
        )}
        {children && (
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {children}
            </div>
          </Reveal>
        )}
      </div>

      {caption && (
        <p className="container-page relative hidden w-full pb-8 text-right font-mono text-[0.6875rem] tracking-[0.12em] text-white/70 [text-shadow:0_1px_6px_rgb(11_11_11/0.9)] md:block">
          {caption}
        </p>
      )}
    </section>
  );
}
