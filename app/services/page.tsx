import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Project guidance, consulting, prototyping and custom robotics and drone development from Utpal Robotics — for students, builders and engineering teams.",
  alternates: { canonical: "/services" },
};

const process = [
  {
    index: "01",
    name: "A conversation",
    description:
      "You describe what you are trying to build and where it currently stands. We say plainly whether we are the right people for it.",
  },
  {
    index: "02",
    name: "Scope",
    description:
      "We agree what is actually being built, what it has to do, and what is deliberately left out of the first version.",
  },
  {
    index: "03",
    name: "Build and iterate",
    description:
      "The machine gets made, tested and corrected. Physical things rarely work first time, and the schedule should assume that.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Bring us the hard part."
        intro="We work directly with people and teams — students stuck partway through a project, and organisations that need a machine built which does not exist yet."
        tone="light"
        height="short"
      >
        <ButtonLink href="/contact" arrow>
          Discuss a project
        </ButtonLink>
      </PageHero>

      {/* Services */}
      <section className="section-y bg-paper">
        <div className="container-page">
          <SectionHeading
            label="What we do"
            title="Five kinds of work."
            lead="Ranging from an afternoon of direction to a machine designed and built from nothing."
          />

          <ul className="mt-20 md:mt-24">
            {services.map((service, i) => (
              <Reveal key={service.name} delay={i * 50} as="li">
                <div className="grid gap-5 border-t border-hairline py-10 md:grid-cols-12 md:gap-8 md:py-14">
                  <span className="label-mono text-slate md:col-span-1 md:pt-3">
                    {service.index}
                  </span>
                  <h3 className="display-md md:col-span-5 md:pr-8">
                    {service.name}
                  </h3>
                  <p className="body-text max-w-xl text-slate md:col-span-6 md:pt-2">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work */}
      <section className="section-y bg-ink text-paper">
        <div className="container-page">
          <SectionHeading
            label="How we work"
            tone="dark"
            title="No mystery to it."
            lead="Three steps, and an honest answer at the first one if the work is not a good fit."
          />

          <div className="mt-20 grid gap-x-12 gap-y-12 md:mt-24 md:grid-cols-3 lg:gap-x-20">
            {process.map((step, i) => (
              <Reveal key={step.name} delay={i * 80}>
                <div className="border-t border-hairline-dark pt-7">
                  <span className="label-mono text-white/55">{step.index}</span>
                  <h3 className="display-sm mt-5">{step.name}</h3>
                  <p className="body-text mt-4 text-white/60">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scope, stated honestly */}
      <section className="section-y-tight bg-bone">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">Scope</p>
          </Reveal>
          <Reveal delay={60} className="lg:col-span-9">
            <p className="lead max-w-3xl text-graphite">
              We are a small operation, and we would rather turn work down than
              take on something we cannot do well. If a project needs
              capabilities we do not have, we will say so at the first
              conversation instead of discovering it halfway through.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Services"
        title="Describe the machine."
        body="A few lines about what it has to do is enough to start. We will tell you what is realistic."
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Discuss a project
        </ButtonLink>
        <ButtonLink href="/projects" variant="outline-light">
          See the work
        </ButtonLink>
      </CTASection>
    </>
  );
}
