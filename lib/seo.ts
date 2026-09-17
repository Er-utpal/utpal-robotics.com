import type { Metadata } from "next";
import { site } from "./site";

type PageSeo = {
  /** Slots into the "%s — Utpal Robotics" template. Keep it under ~45 chars. */
  title: string;
  description: string;
  /** Path with a leading slash, e.g. "/products/drones". */
  path: string;
  /** Overrides the title used for sharing, when a fuller phrase reads better. */
  socialTitle?: string;
  /**
   * Only for routes with no `opengraph-image` file of their own. Setting
   * `openGraph` on a page replaces the parent's entirely, so those routes
   * would otherwise end up with no share image at all.
   */
  ogImage?: { url: string; alt: string };
};

/**
 * Builds a page's metadata: title, description, canonical URL, Open Graph and
 * Twitter card. Every route uses this so nothing is left inheriting the site
 * defaults by accident.
 *
 * Most routes supply their own share image through Next.js's `opengraph-image`
 * file convention. Routes without one pass `ogImage` instead, because a page
 * that sets `openGraph` replaces the parent's object and would otherwise ship
 * with no share image.
 */
export function pageMetadata({
  title,
  description,
  path,
  socialTitle,
  ogImage,
}: PageSeo): Metadata {
  const shareTitle = socialTitle ?? `${title} — ${site.name}`;
  const images = ogImage
    ? [{ url: ogImage.url, width: 1200, height: 630, alt: ogImage.alt }]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: shareTitle,
      description,
      url: path,
      locale: "en",
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      ...(images ? { images } : {}),
    },
  };
}

/**
 * Breadcrumb trail for a page, used both for JSON-LD and nothing else — the
 * visual design has no breadcrumb component and none is being added.
 */
export function breadcrumbs(
  ...trail: { name: string; path: string }[]
): { name: string; path: string }[] {
  return [{ name: "Home", path: "/" }, ...trail];
}
