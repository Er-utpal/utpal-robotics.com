import { assets } from "@/lib/assets";
import { founder, profiles, site } from "@/lib/site";

/**
 * Schema.org JSON-LD.
 *
 * Everything emitted here reflects content that is actually visible on the
 * page. There are no prices, ratings, reviews, availability or specifications,
 * because none of those exist yet — Product schema is deliberately not used
 * for that reason. When real product data arrives, it can be added then.
 */

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from local config, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const organizationId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

const sameAs = profiles
  .map((profile) => profile.href)
  .filter((href): href is string => Boolean(href));

/**
 * Organization + WebSite, emitted once from the root layout.
 *
 * `knowsAbout` lists the disciplines the site genuinely covers, each of which
 * has real content behind it.
 */
export function SiteSchema() {
  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}${assets.logo.src}`,
      width: assets.logo.width,
      height: assets.logo.height,
    },
    knowsAbout: [
      "Robotics education",
      "Robotics kits",
      "Drones",
      "Quadcopters",
      "Quadruped robots",
      "Robot swarms",
      "Rovers",
      "Custom robotics",
      "Robotics consulting",
      "Custom drone development",
    ],
  };

  if (sameAs.length) organization.sameAs = sameAs;
  if (site.country) {
    organization.address = {
      "@type": "PostalAddress",
      addressCountry: site.country,
    };
  }
  if (founder) {
    organization.founder = {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.discipline,
    };
  }

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          organization,
          {
            "@type": "WebSite",
            "@id": websiteId,
            url: site.url,
            name: site.name,
            description: site.description,
            publisher: { "@id": organizationId },
            inLanguage: "en",
          },
        ],
      }}
    />
  );
}

/** Breadcrumb trail for pages below the root. */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${site.url}${item.path === "/" ? "" : item.path}`,
        })),
      }}
    />
  );
}

/**
 * The founder, on the About page. Only the details the page itself states:
 * name, role, discipline and the profiles linked from the same section.
 */
export function FounderSchema() {
  if (!founder) return null;

  const person: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.discipline,
    description: founder.lead,
    worksFor: { "@id": organizationId },
    url: `${site.url}/about`,
  };

  if (founder.portrait) person.image = `${site.url}${founder.portrait.src}`;
  if (sameAs.length) person.sameAs = sameAs;

  return <JsonLd data={person} />;
}
