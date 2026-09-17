import Link from "next/link";
import type { Domain } from "@/lib/content";
import { Media } from "./media";

type DomainTileProps = {
  domain: Domain;
  sizes: string;
  aspect?: string;
  priority?: boolean;
};

/**
 * One entry in the "what we build" catalogue. Domains that have a product page
 * behind them become links; the rest are plain articles.
 */
export function DomainTile({
  domain,
  sizes,
  aspect = "aspect-[4/3]",
  priority = false,
}: DomainTileProps) {
  // The one domain without a photograph is presented as a statement panel
  // rather than an empty frame pretending an image is missing.
  if (!domain.image) {
    return (
      <article className="flex min-h-[20rem] flex-col justify-between bg-ink p-8 text-paper md:min-h-[24rem] md:p-12 lg:min-h-[26rem]">
        <span className="label-mono text-white/55">{domain.index}</span>
        <div className="mt-16">
          <h3 className="display-lg max-w-[14ch] text-balance">{domain.name}</h3>
          <p className="body-text mt-6 max-w-lg text-white/60">
            {domain.description}
          </p>
        </div>
      </article>
    );
  }

  const body = (
    <>
      <Media
        asset={domain.image}
        aspect={aspect}
        sizes={sizes}
        priority={priority}
        zoom={Boolean(domain.href)}
      />
      <div className="mt-6 flex items-baseline gap-4 border-t border-hairline pt-5">
        <span className="label-mono text-slate">{domain.index}</span>
        <h3 className="display-sm">{domain.name}</h3>
        {domain.href && (
          <svg
            aria-hidden="true"
            viewBox="0 0 16 10"
            className="ml-auto h-2.5 w-4 shrink-0 self-center text-slate transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-ink"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            <path d="M0 5h14.5M10.5 1l4 4-4 4" />
          </svg>
        )}
      </div>
      <p className="body-text mt-4 max-w-sm text-slate">{domain.description}</p>
    </>
  );

  if (domain.href) {
    return (
      <Link href={domain.href} className="group block">
        {body}
      </Link>
    );
  }

  return <article>{body}</article>;
}
