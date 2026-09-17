import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  label?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Sits to the right of the heading on wide screens — usually a link. */
  action?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
  size?: "lg" | "xl";
};

/**
 * Standard section opener: a small technical label, a display heading, and an
 * optional lead paragraph held to a comfortable measure.
 */
export function SectionHeading({
  label,
  title,
  lead,
  action,
  tone = "light",
  className = "",
  size = "lg",
}: SectionHeadingProps) {
  const muted = tone === "dark" ? "text-white/55" : "text-slate";
  const leadColor = tone === "dark" ? "text-white/65" : "text-slate";

  return (
    <div className={className}>
      {label && (
        <Reveal>
          <p className={`label-mono ${muted}`}>{label}</p>
        </Reveal>
      )}
      <div className="mt-6 flex flex-col gap-8 md:mt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <Reveal delay={60} className="max-w-4xl">
          <h2 className={size === "xl" ? "display-xl" : "display-lg"}>{title}</h2>
        </Reveal>
        {action && (
          <Reveal delay={120} className="shrink-0 lg:pb-3">
            {action}
          </Reveal>
        )}
      </div>
      {lead && (
        <Reveal delay={120}>
          <div className={`lead mt-8 max-w-2xl ${leadColor}`}>{lead}</div>
        </Reveal>
      )}
    </div>
  );
}

/** Hairline rule with an optional label — used to break long pages. */
export function RuleLabel({
  children,
  tone = "light",
}: {
  children?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`flex items-center gap-6 border-t pt-5 ${
        tone === "dark" ? "border-hairline-dark" : "border-hairline"
      }`}
    >
      {children && (
        <span
          className={`label-mono ${tone === "dark" ? "text-white/55" : "text-slate"}`}
        >
          {children}
        </span>
      )}
    </div>
  );
}
