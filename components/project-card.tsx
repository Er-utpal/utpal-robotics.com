import type { Project } from "@/lib/content";
import { Media } from "./media";

type ProjectCardProps = {
  project: Project;
  sizes?: string;
  aspect?: string;
  /**
   * Heading level for the project name. Defaults to h3, for use under a
   * section heading; pass "h2" where the cards are the page's top-level
   * sections, so the document outline stays in order.
   */
  headingLevel?: "h2" | "h3";
};

/**
 * Portfolio entry. There are no project detail pages yet, so this is a static
 * article rather than a link — nothing here pretends to be clickable.
 */
export function ProjectCard({
  project,
  sizes = "(min-width: 1024px) 46vw, 92vw",
  aspect = "aspect-[4/3]",
  headingLevel: Heading = "h3",
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col">
      {project.image ? (
        <>
          <Media asset={project.image} aspect={aspect} sizes={sizes} />
          <p className="label-mono mt-7 text-slate">{project.category}</p>
          <Heading className="display-sm mt-4">{project.name}</Heading>
          <p className="body-text mt-4 max-w-md text-slate">
            {project.description}
          </p>
        </>
      ) : (
        /* No photograph yet — carried as a statement panel instead of a gap. */
        <div className={`flex ${aspect} flex-col justify-between bg-ink p-8 text-paper md:p-10`}>
          <p className="label-mono text-white/55">{project.category}</p>
          <div>
            <Heading className="display-md max-w-[12ch] text-balance">
              {project.name}
            </Heading>
            <p className="body-text mt-5 max-w-md text-white/60">
              {project.description}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
