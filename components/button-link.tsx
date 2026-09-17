import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "solid" | "outline" | "solid-light" | "outline-light";

const base =
  "group/btn inline-flex items-center justify-center gap-3 px-7 py-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300";

const variants: Record<Variant, string> = {
  /* On light surfaces */
  solid: "bg-ink text-paper hover:bg-graphite",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  /* On dark surfaces */
  "solid-light": "bg-paper text-ink hover:bg-bone",
  "outline-light":
    "border border-white/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  /** Adds a trailing arrow that nudges on hover. */
  arrow?: boolean;
};

export function ButtonLink({
  variant = "solid",
  arrow = false,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

/** Understated inline link: label, rule and arrow. */
export function TextLink({
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`group/btn inline-flex items-center gap-2.5 border-b border-current/25 pb-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:border-current ${className}`}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 10"
      className="h-2.5 w-4 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="M0 5h14.5M10.5 1l4 4-4 4" />
    </svg>
  );
}
