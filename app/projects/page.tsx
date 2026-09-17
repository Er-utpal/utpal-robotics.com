import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { assets } from "@/lib/assets";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Robotics work from Utpal Robotics — quadrupeds, rovers, aerial platforms, hexapods, swarm behaviour and experimental machines built to test ideas properly.",
  alternates: { canonical: "/projects" },
};

/** Deliberately uneven grid — a portfolio, not a product listing. */
const layout = [
  { span: "lg:col-span-7", aspect: "aspect-[16/10]", sizes: "(min-width: 1024px) 58vw, 92vw" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 40vw, 92vw", offset: "lg:mt-24" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 40vw, 92vw" },
  { span: "lg:col-span-7", aspect: "aspect-[16/10]", sizes: "(min-width: 1024px) 58vw, 92vw", offset: "lg:mt-24" },
  { span: "lg:col-span-7", aspect: "aspect-[16/10]", sizes: "(min-width: 1024px) 58vw, 92vw" },
  { span: "lg:col-span-5", aspect: "aspect-[4/5]", sizes: "(min-width: 1024px) 40vw, 92vw", offset: "lg:mt-24" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Split hero — the rover is a portrait photograph, so it gets a
          portrait frame instead of being cropped into a letterbox. */}
      <section className="flex flex-col bg-ink text-paper lg:min-h-[88vh] lg:flex-row lg:items-stretch">
        <div className="flex flex-col justify-end px-6 pt-36 pb-16 md:px-10 md:pt-44 md:pb-20 lg:w-1/2 lg:px-16 lg:pb-24">
          <Reveal>
            <p className="label-mono text-white/60">Projects</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-xl mt-6 max-w-[14ch] text-balance md:mt-8">
              Machines built to find out.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="lead mt-8 max-w-xl text-white/70">
              Platforms we build to work through problems properly — legged
              robots, ground vehicles, aircraft and the occasional machine that
              exists only because someone wanted to know whether it would work.
            </p>
          </Reveal>
        </div>

        <div className="relative h-[62svh] w-full lg:h-auto lg:w-1/2">
          <Image
            src={assets.rover.src}
            alt={assets.rover.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_40%]"
          />
          <p className="absolute right-10 bottom-8 hidden font-mono text-[0.6875rem] tracking-[0.12em] text-white/70 [text-shadow:0_1px_6px_rgb(11_11_11/0.9)] md:block">
            Rover platform — manipulation on uneven ground
          </p>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-page">
          <Reveal>
            <p className="lead max-w-3xl text-graphite">
              Descriptions here are kept broad on purpose. These are working
              platforms rather than finished products, and we would rather say
              less than claim more than a machine has actually done.
            </p>
          </Reveal>

          <div className="mt-24 grid gap-x-8 gap-y-20 md:mt-28 lg:grid-cols-12 lg:gap-y-8">
            {projects.map((project, i) => (
              <Reveal
                key={project.name}
                delay={(i % 2) * 90}
                className={`${layout[i].span} ${layout[i].offset ?? ""}`}
              >
                <ProjectCard
                  project={project}
                  aspect={layout[i].aspect}
                  sizes={layout[i].sizes}
                  headingLevel="h2"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Engineering"
        title="Something like this, for you."
        body="Prototypes, custom machines and one-off platforms — if it needs to exist, describe it and we will tell you what it takes."
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Discuss a project
        </ButtonLink>
        <ButtonLink href="/services" variant="outline-light">
          How we work
        </ButtonLink>
      </CTASection>
    </>
  );
}
