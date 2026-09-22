import Image from "next/image";
import type { Job, Project } from "@/content";
import { GitHubIcon, GlobeIcon } from "./icons";

// Prefixes files in public/ with the GitHub Pages base path.
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 sm:py-16 border-t border-line first:border-t-0">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-accent">{title}</h2>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full bg-accent-soft/60 px-3 py-1 text-xs font-medium text-fg">{children}</li>
  );
}

export function JobItem({ job }: { job: Job }) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" aria-hidden="true" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
        <h3 className="font-semibold">
          {job.role} <span className="text-muted font-normal">· {job.company}</span>
        </h3>
        {job.period && <p className="text-sm text-muted shrink-0">{job.period}</p>}
      </div>
      {job.location && <p className="text-sm text-muted">{job.location}</p>}
      {job.points.length > 0 && (
        <ul className="mt-2 list-disc pl-5 space-y-1 text-muted marker:text-line">
          {job.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line px-3 py-1 text-sm hover:border-accent hover:text-accent transition-colors"
          >
            {link.kind === "github" ? <GitHubIcon /> : <GlobeIcon />}
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-2 text-muted">{project.summary}</p>
      <ul className="mt-4 list-disc pl-5 space-y-1.5 marker:text-accent">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>
      {project.images.length > 0 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.images.map((image, i) => (
            // A wide first image in a set of three spans both columns so it stays readable.
            <figure
              key={image.src}
              className={project.images.length % 2 === 1 && i === 0 ? "sm:col-span-2" : undefined}
            >
              <a href={asset(image.src)} target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src={asset(image.src)}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto rounded-lg border border-line bg-white hover:opacity-90 transition-opacity"
                />
              </a>
              <figcaption className="mt-2 text-center text-sm text-muted">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}
