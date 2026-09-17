"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Scroll reveal.
 *
 * One shared, rAF-throttled sweep serves every element on the page rather than
 * an observer each. A sweep only ever measures elements that are still hidden,
 * and the listener detaches once the last one has been shown — so the cost
 * falls to zero as the visitor moves down the page.
 *
 * The sweep reveals anything whose top edge has reached the viewport, which
 * also covers elements flicked past between frames. Nothing can end up stuck
 * in the hidden state.
 */

const pending = new Set<HTMLElement>();
let frame = 0;
let listening = false;

function reveal(node: HTMLElement) {
  node.dataset.reveal = "shown";
  pending.delete(node);
}

function sweep() {
  frame = 0;
  // Trigger slightly before the element is fully on screen.
  const limit = window.innerHeight * 0.88;
  for (const node of [...pending]) {
    if (node.getBoundingClientRect().top < limit) reveal(node);
  }
  if (pending.size === 0) stopListening();
}

function schedule() {
  if (!frame) frame = requestAnimationFrame(sweep);
}

function startListening() {
  if (listening) return;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  listening = true;
}

function stopListening() {
  if (!listening) return;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  listening = false;
}

type RevealProps = {
  children: ReactNode;
  /** Stagger within a group, in milliseconds. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.dataset.reveal = "shown";
      return;
    }

    pending.add(node);
    startListening();
    schedule();

    return () => {
      pending.delete(node);
      if (pending.size === 0) stopListening();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal="pending"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
