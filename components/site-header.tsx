"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";
import { navigation, site } from "@/lib/site";

/**
 * Routes that open on a light surface. Everywhere else the header sits over
 * dark hero imagery and starts out transparent with light type.
 */
const LIGHT_HERO_ROUTES = new Set([
  "/products/kits",
  "/services",
  "/about",
  "/contact",
]);

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const lightHero = LIGHT_HERO_ROUTES.has(pathname);
  /** Light type is only safe while floating over a dark hero. */
  const onDark = !lightHero && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        menuOpen
          ? "border-b border-hairline bg-paper"
          : scrolled
            ? "border-b border-hairline bg-paper/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`container-page flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled || menuOpen ? "h-16" : "h-20 md:h-24"
        }`}
      >
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="flex items-center gap-3 md:gap-4"
        >
          <Image
            src={onDark ? "/resources/logo-light.png" : assets.logo.src}
            alt=""
            width={640}
            height={354}
            priority
            className={`w-8 transition-[width] duration-500 md:w-9 ${
              scrolled || menuOpen ? "md:w-8" : ""
            }`}
          />
          <span
            className={`font-display text-[0.9rem] font-semibold tracking-[0.12em] transition-colors duration-500 md:text-[0.95rem] ${
              onDark ? "text-paper" : "text-ink"
            }`}
          >
            UTPAL ROBOTICS
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 lg:flex xl:gap-11"
        >
          {navigation.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                  onDark
                    ? "text-paper/75 hover:text-paper"
                    : "text-slate hover:text-ink"
                } ${active ? (onDark ? "!text-paper" : "!text-ink") : ""}`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={`hidden border px-6 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 lg:inline-flex ${
              onDark
                ? "border-white/35 text-paper hover:bg-paper hover:text-ink"
                : "border-ink/25 text-ink hover:bg-ink hover:text-paper"
            }`}
          >
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`-mr-3 flex h-12 w-12 items-center justify-center lg:hidden ${
              onDark ? "text-paper" : "text-ink"
            }`}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto bg-paper lg:hidden"
      >
        <nav aria-label="Primary" className="container-page flex flex-col pt-6">
          {[...navigation, { href: "/contact", label: "Contact" }].map(
            (item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline justify-between border-b border-hairline py-6 text-ink"
              >
                <span className="display-md">{item.label}</span>
                <span className="label-mono text-slate">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ),
          )}
          <a
            href={`mailto:${site.email}`}
            className="mt-10 mb-12 font-mono text-[0.75rem] tracking-[0.06em] text-slate"
          >
            {site.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
