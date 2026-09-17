import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink, TextLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { Media } from "@/components/media";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Robotics Products & Kits",
  description:
    "Robotics kits, drone platforms and quadruped robots you assemble yourself — an engineering catalogue for students, builders and early-stage teams.",
  path: "/products",
});

/** What each category is actually for — plain, checkable statements. */
const detail: Record<string, string[]> = {
  "Robotics Kits": [
    "A first machine that ends up working",
    "Assembly guidance and a written manual",
    "Example projects to build on afterwards",
  ],
  Drones: [
    "Learning to fly before learning to tune",
    "FPV airframes and autonomous quadcopters",
    "Platforms that carry their own compute",
  ],
  Quadrupeds: [
    "Locomotion, balance and whole-body control",
    "Actuation and state estimation on real hardware",
    "A platform to keep developing against",
  ],
};

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }]}
      />
      <PageHero
        eyebrow="Products"
        title="Robots you can build."
        intro="Three categories, each a different entry point into the same discipline. None of them arrive finished — that is the point of buying one."
        tone="dark"
        height="short"
      >
        <ButtonLink href="/products/robotics-kits" variant="solid-light" arrow>
          Start with a kit
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline-light">
          Ask about availability
        </ButtonLink>
      </PageHero>

      <section className="bg-paper">
        {products.map((product, i) => (
          <article
            key={product.href}
            className={`section-y border-t border-hairline first:border-t-0 ${
              i % 2 === 1 ? "bg-bone" : "bg-paper"
            }`}
          >
            <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
              <Reveal
                className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Media
                  asset={product.image}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 56vw, 92vw"
                  priority={i === 0}
                />
              </Reveal>

              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <Reveal>
                  <p className="label-mono text-slate">
                    {product.index} — Category
                  </p>
                </Reveal>
                <Reveal delay={60}>
                  <h2 className="display-lg mt-6 text-balance">{product.name}</h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="lead mt-7 max-w-lg text-slate">
                    {product.description}
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <ul className="mt-10">
                    {detail[product.name].map((line) => (
                      <li
                        key={line}
                        className="body-text border-t border-hairline py-4 text-graphite"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={240}>
                  <div className="mt-10">
                    <ButtonLink href={product.href} arrow>
                      Explore {product.name.toLowerCase()}
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Honest about what is not here yet. */}
      <section className="section-y-tight border-t border-hairline bg-paper">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">Availability</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="lead max-w-3xl text-graphite">
                Individual models, configurations and pricing are published here
                as each one is finalised. If you have something specific in mind
                — a platform for a course, a batch for a lab, or a build you
                have already started — write to us and we will tell you plainly
                what is possible.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-10">
                <TextLink href="/contact">Ask about a product</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Not sure where to start"
        title="Tell us what you want to build."
        body="A short description of the project is enough for us to point you at the right machine."
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Contact us
        </ButtonLink>
        <ButtonLink href="/learn" variant="outline-light">
          Learn first
        </ButtonLink>
      </CTASection>
    </>
  );
}
