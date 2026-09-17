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
   * Set to a real profile URL to surface the GitHub link across the site.
   * Left null until an official account is confirmed.
   */
  github: null as string | null,
  /**
   * Set once a production domain is live — used for canonical + Open Graph URLs.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://utpalrobotics.com",
} as const;

export const navigation = [
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/learn", label: "Learn" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;
