import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink, TextLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { DomainTile } from "@/components/domain-tile";
import { ProductCard } from "@/components/product-card";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VideoSection } from "@/components/video-section";
import { assets } from "@/lib/assets";
import { domains, products, projects, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Utpal Robotics — Robotics Kits, Drones & Engineering",
  description:
    "Robotics kits, drones and quadruped platforms, plus learning resources and engineering support for students, builders and teams putting real machines together.",
  alternates: { canonical: "/" },
};

/** Layout for the "what we build" mosaic — deliberately uneven. */
const domainLayout = [
  { span: "lg:col-span-7", aspect: "aspect-[16/10]", sizes: "(min-width: 1024px) 58vw, 92vw" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 40vw, 92vw" },
  { span: "lg:col-span-4", aspect: "aspect-[3/4]", sizes: "(min-width: 1024px) 32vw, 92vw" },
  { span: "lg:col-span-4", aspect: "aspect-[1/1]", sizes: "(min-width: 1024px) 32vw, 92vw" },
  { span: "lg:col-span-4", aspect: "aspect-[4/3]", sizes: "(min-width: 1024px) 32vw, 92vw" },
  { span: "lg:col-span-12", aspect: "aspect-[4/3] md:aspect-[16/5]", sizes: "92vw" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] flex-col bg-ink text-paper">
        <div className="relative h-[48svh] w-full shrink-0 md:absolute md:inset-0 md:h-full">
          <Image
            src={assets.quadruped.src}
            alt={assets.quadruped.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[55%_50%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/20 md:from-ink/90 md:via-ink/30 md:to-ink/50"
          />
        </div>

        <div className="container-page relative flex flex-1 flex-col justify-end pt-10 pb-14 md:pt-44 md:pb-20">
          <Reveal>
            <h1 className="display-hero max-w-[15ch] text-balance">
              Build something that moves.
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead mt-8 max-w-xl text-white/70 md:mt-10">
              Robotics kits, drones and quadruped platforms — with the
              engineering guidance to get from a first assembly to a machine
              that actually works.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4 md:mt-12">
              <ButtonLink href="/products" variant="solid-light" arrow>
                Explore products
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline-light">
                Work with us
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <p className="container-page relative hidden w-full pb-8 text-right font-mono text-[0.6875rem] tracking-[0.12em] text-white/70 [text-shadow:0_1px_6px_rgb(11_11_11/0.9)] lg:block">
          Quadruped platform — legged locomotion
        </p>
      </section>

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">Introduction</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="display-lg max-w-[20ch] text-balance">
                Robotics shouldn&rsquo;t be something you only study.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
              <Reveal delay={80}>
                <p className="body-text text-graphite">
                  Most people meet robotics through a syllabus — equations,
                  block diagrams, a simulation that always converges. The
                  moment a real machine has to hold itself up, none of that is
                  quite enough. Wires come loose. Controllers oscillate. A leg
                  lands somewhere it shouldn&rsquo;t.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-text text-graphite">
                  Utpal Robotics exists to close that gap. We build hardware
                  people can actually get their hands on, write the material
                  that explains it, and stay available while it is being put
                  together — for students, for enthusiasts, and for teams who
                  need a machine built properly.
                </p>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="mt-12">
                <TextLink href="/about">About the company</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What we build ────────────────────────────────────────────────── */}
      <section className="section-y bg-bone">
        <div className="container-page">
          <SectionHeading
            label="What we build"
            title="Machines across the ground and the air."
            lead="Legged robots, wheeled platforms and aircraft — each one a different way into the same set of problems: sensing, control, power and the gap between a plan and a moving machine."
          />

          <div className="mt-20 grid items-end gap-x-8 gap-y-16 md:mt-24 lg:grid-cols-12 lg:gap-y-24">
            {domains.map((domain, i) => (
              <Reveal
                key={domain.name}
                delay={(i % 3) * 80}
                className={domainLayout[i].span}
              >
                <DomainTile
                  domain={domain}
                  aspect={domainLayout[i].aspect}
                  sizes={domainLayout[i].sizes}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured products ────────────────────────────────────────────── */}
      <section className="section-y bg-paper">
        <div className="container-page">
          <SectionHeading
            label="Products"
            title="Start with a machine."
            lead="Three ways in, depending on how far along you are — and each one arrives as hardware you assemble, not a finished appliance."
            action={<TextLink href="/products">All products</TextLink>}
          />

          <div className="mt-20 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <Reveal key={product.href} delay={i * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learn by building ────────────────────────────────────────────── */}
      <section className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden bg-ink text-paper">
        <Image
          src={assets.lab.src}
          alt={assets.lab.alt}
          fill
          sizes="100vw"
          className="object-cover object-[50%_42%] opacity-80"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/45"
        />

        <div className="container-page relative w-full pt-28 pb-20 md:pt-40 md:pb-24">
          <Reveal>
            <p className="label-mono text-white/55">Learn by building</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-xl mt-6 max-w-[16ch] text-balance md:mt-8">
              Don&rsquo;t just learn robotics. Build it.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mt-8 max-w-xl text-white/70">
              Every kit is meant to end up switched on. The hardware comes with
              the material needed to understand it, and with someone to ask
              when the machine does something unexpected.
            </p>
          </Reveal>

          <ul className="mt-16 grid gap-px border-t border-hairline-dark sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Practical kits", "Hardware chosen so it can be assembled and understood."],
              ["02", "Manuals", "Written instructions that cover assembly and first power-on."],
              ["03", "Demonstration video", "The machine running, so you know what correct looks like."],
              ["04", "Guided projects", "Something to build next, once the basics work."],
            ].map(([index, name, description], i) => (
              <Reveal key={name} delay={i * 70} as="li" className="pt-6 lg:pr-8">
                <span className="label-mono text-white/55">{index}</span>
                <h3 className="display-sm mt-4">{name}</h3>
                <p className="body-text mt-3 text-white/60">{description}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap items-center gap-4">
              <ButtonLink href="/products/kits" variant="solid-light" arrow>
                Explore kits
              </ButtonLink>
              <ButtonLink href="/learn" variant="outline-light">
                What you can learn
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section className="section-y bg-paper">
        <div className="container-page">
          <SectionHeading
            label="Projects"
            title="The work behind the products."
            lead="Platforms we build to push further than a kit needs to go. They are where the harder problems get worked out first."
            action={<TextLink href="/projects">All projects</TextLink>}
          />

          <div className="mt-20 grid gap-x-8 gap-y-16 md:mt-24 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <ProjectCard
                project={projects[1]}
                aspect="aspect-[3/4]"
                sizes="(min-width: 1024px) 40vw, 92vw"
              />
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7 lg:mt-28">
              <ProjectCard
                project={projects[0]}
                aspect="aspect-[16/10]"
                sizes="(min-width: 1024px) 56vw, 92vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── In the field ─────────────────────────────────────────────────── */}
      <VideoSection
        eyebrow="In the field"
        title="A machine is only finished once it leaves the bench."
        body="Flight behaves differently in open air than it does in a simulator or a corridor. The platforms get taken outside, flown, broken and adjusted until they hold up."
        caption="Aerial footage"
      >
        <ButtonLink href="/products/drones" variant="solid-light" arrow>
          Explore drones
        </ButtonLink>
      </VideoSection>

      {/* ── Engineering ──────────────────────────────────────────────────── */}
      <section className="section-y bg-bone">
        <div className="container-page">
          <SectionHeading
            label="Engineering"
            title={<>Have an idea? Let&rsquo;s build it.</>}
            lead="Beyond the catalogue, we take on work directly — with students who are stuck, and with teams who need something built that does not exist yet."
          />

          <ul className="mt-20 md:mt-24">
            {services.map((service, i) => (
              <Reveal key={service.name} delay={i * 50} as="li">
                <div className="grid gap-4 border-t border-hairline py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <span className="label-mono text-slate md:col-span-1 md:pt-2">
                    {service.index}
                  </span>
                  <h3 className="display-sm md:col-span-4">{service.name}</h3>
                  <p className="body-text max-w-xl text-slate md:col-span-7">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-hairline pt-14">
              <ButtonLink href="/contact" arrow>
                Discuss a project
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                How we work
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Close ────────────────────────────────────────────────────────── */}
      <CTASection
        eyebrow="Get started"
        title="Your next robot starts here."
        body="Pick a machine to build, or tell us what you are trying to make."
      >
        <ButtonLink href="/products" variant="solid-light" arrow>
          Explore products
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline-light">
          Contact us
        </ButtonLink>
      </CTASection>
    </>
  );
}
