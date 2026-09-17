import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink, TextLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { Media } from "@/components/media";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Robotics Kits",
  description:
    "Robotics kits from Utpal Robotics: hardware, assembly guidance, a written manual, demonstration video and example projects — so the machine you build ends up working.",
  alternates: { canonical: "/products/kits" },
};

const included = [
  {
    index: "01",
    name: "Hardware",
    description:
      "The parts, chosen so they can be assembled by hand and understood afterwards.",
  },
  {
    index: "02",
    name: "Assembly guidance",
    description:
      "The order things go together in, and the steps that are easy to get wrong.",
  },
  {
    index: "03",
    name: "User manual",
    description:
      "Written documentation covering assembly, wiring and first power-on.",
  },
  {
    index: "04",
    name: "Demonstration video",
    description:
      "The machine running as it should, so you know what you are aiming at.",
  },
  {
    index: "05",
    name: "Example projects",
    description:
      "Somewhere to go once it works — changes worth making and things worth trying.",
  },
  {
    index: "06",
    name: "Guidance",
    description:
      "Someone to ask when it does something you did not expect. Which it will.",
  },
];

export default function KitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products — Robotics Kits"
        title="Learn by building."
        intro="A kit is not a model to assemble and shelve. It is a working machine you put together yourself, with everything needed to understand why it works."
        tone="light"
        height="short"
      >
        <ButtonLink href="/contact" arrow>
          Enquire about kits
        </ButtonLink>
        <ButtonLink href="/learn" variant="outline">
          What you can learn
        </ButtonLink>
      </PageHero>

      {/* The machine */}
      <section className="section-y bg-paper">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <Media
              asset={assets.spider}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 56vw, 92vw"
              priority
            />
          </Reveal>
          <div className="lg:col-span-5">
            <Reveal>
              <p className="label-mono text-slate">The end of the build</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="display-lg mt-6 max-w-[14ch] text-balance">
                Finished means switched on.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-7 max-w-lg text-slate">
                Plenty of people get through the assembly and then stop, because
                the last mile — wiring, firmware, the first time it moves — is
                where the instructions usually run out. That is the part we care
                most about getting right.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="section-y bg-bone">
        <div className="container-page">
          <SectionHeading
            label="What you get"
            title="Everything the machine needs to end up running."
            lead="Hardware on its own is a box of parts. These are the things that turn it into a robot."
          />

          <div className="mt-20 grid gap-x-12 gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {included.map((item, i) => (
              <Reveal key={item.name} delay={(i % 3) * 70}>
                <div className="border-t border-ink/20 pt-7">
                  <span className="label-mono text-slate">{item.index}</span>
                  <h3 className="display-sm mt-5">{item.name}</h3>
                  <p className="body-text mt-4 text-slate">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support band */}
      <section className="relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-ink text-paper">
        <Image
          src={assets.lab.src}
          alt={assets.lab.alt}
          fill
          sizes="100vw"
          className="object-cover object-[50%_45%] opacity-75"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40"
        />
        <div className="container-page relative w-full pt-28 pb-20 md:pt-36 md:pb-24">
          <Reveal>
            <p className="label-mono text-white/55">Support</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-xl mt-6 max-w-[18ch] text-balance md:mt-8">
              You are not left with a box and good luck.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mt-8 max-w-xl text-white/70">
              Builds go wrong in predictable ways, and in a few unpredictable
              ones. When yours does, there is someone on the other end who has
              seen that failure before.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12">
              <ButtonLink href="/contact" variant="solid-light" arrow>
                Ask a question
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Availability — stated plainly */}
      <section className="section-y-tight bg-paper">
        <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">Availability</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <p className="lead max-w-3xl text-graphite">
                Individual kits are listed here as each one is finalised, with
                its contents and price. Until then, tell us what you want to
                build and at what level, and we will tell you honestly whether
                we have something suitable.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-10">
                <TextLink href="/contact">Enquire about a kit</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Robotics kits"
        title="Build the first one properly."
        body="Start with a machine you can finish, and the next one gets easier."
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Enquire
        </ButtonLink>
        <ButtonLink href="/products" variant="outline-light">
          All products
        </ButtonLink>
      </CTASection>
    </>
  );
}
