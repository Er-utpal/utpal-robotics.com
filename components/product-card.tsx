import Link from "next/link";
import type { Product } from "@/lib/content";
import { Media } from "./media";

type ProductCardProps = {
  product: Product;
  sizes?: string;
  priority?: boolean;
};

/** Catalogue entry: a large photograph, a name, a line, a way in. */
export function ProductCard({
  product,
  sizes = "(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 90vw",
  priority = false,
}: ProductCardProps) {
  return (
    <Link href={product.href} className="group block">
      <Media
        asset={product.image}
        aspect="aspect-[5/4]"
        sizes={sizes}
        priority={priority}
        zoom
      />
      <div className="mt-7 flex items-baseline gap-4 border-t border-hairline pt-5">
        <span className="label-mono text-slate">{product.index}</span>
        <h3 className="display-sm">{product.name}</h3>
      </div>
      <p className="body-text mt-4 max-w-sm text-slate">{product.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em]">
        Explore
        <svg
          aria-hidden="true"
          viewBox="0 0 16 10"
          className="h-2.5 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        >
          <path d="M0 5h14.5M10.5 1l4 4-4 4" />
        </svg>
      </span>
    </Link>
  );
}
