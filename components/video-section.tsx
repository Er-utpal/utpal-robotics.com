"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { video } from "@/lib/assets";
import { Reveal } from "./reveal";

type VideoSectionProps = {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  caption?: string;
  children?: ReactNode;
  /** Full-height treatment for use as a page hero. */
  hero?: boolean;
};

/**
 * Full-bleed video band.
 *
 * The clip is silent, carries no audio track at all, and only downloads once
 * the section approaches the viewport. Playback pauses whenever it scrolls
 * out of view, and never starts for anyone who prefers reduced motion — they
 * get the poster frame and an explicit play control instead.
 */
export function VideoSection({
  eyebrow,
  title,
  body,
  caption,
  children,
  hero = false,
}: VideoSectionProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(motionQuery.matches);
    if (motionQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.play().then(
            () => setPlaying(true),
            () => setPlaying(false), // autoplay blocked — poster stands in
          );
        } else {
          node.pause();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`relative flex flex-col justify-end overflow-hidden bg-ink text-paper ${
        hero
          ? "min-h-[80vh] md:min-h-[88vh]"
          : "min-h-[70vh] md:min-h-[80vh]"
      }`}
    >
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={video.flight.poster}
        aria-label={video.flight.description}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={video.flight.src} type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/40"
      />
      {/* Keeps the header legible wherever the footage happens to be bright. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent"
      />

      <div
        className={`container-page relative w-full pb-16 md:pb-20 ${
          hero ? "pt-36 md:pt-44" : "pt-24 md:pt-32"
        }`}
      >
        <Reveal>
          <p className="label-mono text-white/60">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          {hero ? (
            <h1 className="display-xl mt-6 max-w-5xl text-balance md:mt-8">
              {title}
            </h1>
          ) : (
            <h2 className="display-lg mt-6 max-w-4xl text-balance md:mt-8">
              {title}
            </h2>
          )}
        </Reveal>
        {body && (
          <Reveal delay={160}>
            <div className="lead mt-8 max-w-2xl text-white/70">{body}</div>
          </Reveal>
        )}
        {children && (
          <Reveal delay={220}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {children}
            </div>
          </Reveal>
        )}

        {(reducedMotion || !playing) && (
          <button
            type="button"
            onClick={() => {
              const node = ref.current;
              if (!node) return;
              if (node.paused) {
                node.play().then(() => setPlaying(true), () => {});
              } else {
                node.pause();
                setPlaying(false);
              }
            }}
            className="mt-10 inline-flex items-center gap-3 border border-white/30 px-5 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-paper hover:text-ink"
          >
            <span
              aria-hidden="true"
              className="block h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-current"
            />
            Play footage
          </button>
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
