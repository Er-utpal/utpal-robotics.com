import Image from "next/image";
import type { Asset } from "@/lib/assets";

type MediaProps = {
  asset: Asset;
  /** Tailwind aspect utility, e.g. "aspect-[5/4]". */
  aspect?: string;
  sizes: string;
  priority?: boolean;
  /** Adds the restrained hover push — parent must carry `group`. */
  zoom?: boolean;
  className?: string;
  objectPosition?: string;
};

/**
 * One image, handled correctly.
 *
 * Shots taken against white are contained and multiplied into the page so they
 * read as objects rather than as pictures in a box; everything else is a crop
 * that fills its frame. Both use the same container, so rows stay aligned.
 */
export function Media({
  asset,
  aspect = "aspect-[5/4]",
  sizes,
  priority = false,
  zoom = false,
  className = "",
  objectPosition,
}: MediaProps) {
  const onWhite = Boolean(asset.onWhite);

  return (
    <div
      className={`relative overflow-hidden ${aspect} ${
        // White-background shots keep the surface behind them, so multiply has
        // something to blend into; crops get a neutral holding colour.
        onWhite ? "bg-transparent" : "bg-bone"
      } ${className}`}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={objectPosition ? { objectPosition } : undefined}
        className={`${
          onWhite
            ? "blend-white-bg object-contain"
            : "object-cover"
        } ${zoom ? "media-zoom" : ""}`}
      />
    </div>
  );
}
