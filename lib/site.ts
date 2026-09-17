import type { Asset } from "./assets";

/**
 * Global site configuration.
 *
 * Anything here is real and verifiable. Links that do not exist yet are left
 * as `null` and the UI simply does not render them — nothing is invented.
 */

export const site = {
  name: "Utpal Robotics",
  shortName: "UTPAL ROBOTICS",
  email: "utpalkant.uav@gmail.com",
  description:
    "Utpal Robotics builds robotics kits, drones and quadruped platforms, and works with students, builders and engineering teams turning robotics ideas into working machines.",
  /**
   * Set once a production domain is live — used for canonical + Open Graph URLs.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://utpalrobotics.com",
} as const;

/**
 * External profiles.
 *
 * Set a URL to surface that link in the footer and on the contact page; leave
 * it null and nothing renders. Nothing here is ever invented — add a profile
 * only once the account genuinely exists.
 */
export const profiles: { label: string; href: string | null }[] = [
  { label: "LinkedIn", href: null },
  { label: "GitHub", href: null },
];

/** Only the profiles that have a real URL behind them. */
export const activeProfiles = profiles.filter(
  (profile): profile is { label: string; href: string } => Boolean(profile.href),
);

/**
 * The person behind the company.
 *
 * Left null until the real details are supplied — the About page simply skips
 * the section, exactly as it does for an unconfigured profile link. Fill every
 * field with verifiable fact: no invented credentials, titles or history.
 *
 * `portrait` points at an entry in `lib/assets.ts` (add the photograph there
 * first). Without one the section still works — the statement runs full width.
 *
 * Example:
 *
 *   export const founder: Founder | null = {
 *     name: "…",
 *     role: "Founder",
 *     statement:
 *       "I started Utpal Robotics because …",
 *     bio: ["…", "…"],
 *     portrait: assets.founder,
 *     linkedin: "https://www.linkedin.com/in/…",
 *   };
 */
export type Founder = {
  name: string;
  /** e.g. "Founder" or "Founder & Engineer" — whatever is accurate. */
  role: string;
  /** A short first-person line, set in display type. Two sentences at most. */
  statement: string;
  /** Background, in the founder's own voice. One or two paragraphs. */
  bio: string[];
  portrait: Asset | null;
  linkedin: string | null;
};

export const founder: Founder | null = null;

export const navigation = [
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/learn", label: "Learn" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;
