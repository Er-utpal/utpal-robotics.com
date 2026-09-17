import Image from "next/image";
import Link from "next/link";
import { activeProfiles, site } from "@/lib/site";

const columns = [
  {
    title: "Products",
    links: [
      { href: "/products/robotics-kits", label: "Robotics Kits" },
      { href: "/products/drones", label: "Drones" },
      { href: "/products/quadrupeds", label: "Quadrupeds" },
      { href: "/products", label: "All products" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/projects", label: "Projects" },
      { href: "/learn", label: "Learn" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
          <div>
            <Image
              src="/resources/logo-light.png"
              alt=""
              width={640}
              height={354}
              sizes="48px"
              className="w-11"
            />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-white/55">
              Robotics kits, drones and engineering support for people building
              real machines.
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="label-mono text-white/55">{column.title}</h2>
              <ul className="mt-6 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[0.95rem] text-white/75 transition-colors duration-300 hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="label-mono text-white/55">Contact</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-[0.95rem] break-all text-white/75 transition-colors duration-300 hover:text-paper"
            >
              {site.email}
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex border border-white/25 px-6 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-paper hover:text-ink"
              >
                Start a conversation
              </Link>
            </div>
            {activeProfiles.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {activeProfiles.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-white/55 transition-colors duration-300 hover:text-paper"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-hairline-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.6875rem] tracking-[0.1em] text-white/55">
            © {new Date().getFullYear()} {site.shortName}
          </p>
          <p className="font-mono text-[0.6875rem] tracking-[0.1em] text-white/55">
            Designed and built for machines that leave the bench.
          </p>
        </div>
      </div>
    </footer>
  );
}
