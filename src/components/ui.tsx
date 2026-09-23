import Image from "next/image";
import type { ComponentProps } from "react";
import type { Job, Project } from "@/content";
import { asset } from "@/lib/asset";
import { GitHubIcon, GlobeIcon } from "./icons";

export const hoverAccent = "hover:text-accent transition-colors";
// Outlined round button; callers add padding and text size.
export const pill = `rounded-full border border-line hover:border-accent ${hoverAccent}`;

// Link that opens in a new tab.
export function ExternalLink(props: ComponentProps<"a">) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 sm:py-16 border-t border-line">
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

// "Title · Organization" on the left, dates on the right. Shared by jobs and education.
export function EntryHeader({ title, org, period }: { title: string; org: string; period?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
      <h3 className="font-semibold">
        {title} <span className="text-muted font-normal">· {org}</span>
      </h3>
      {period && <p className="text-sm text-muted shrink-0">{period}</p>}
    </div>
  );
}

export function JobItem({ job }: { job: Job }) {
  return (
    <li className="relative pl-6">
      <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-bg" aria-hidden="true" />
      <EntryHeader title={job.role} org={job.company} period={job.period} />
      {job.location && <p className="text-sm text-muted">{job.location}</p>}
      {job.points.length > 0 && (
        <ul className="mt-2 list-disc pl-5 space-y-1 text-muted marker:text-muted">
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
        {project.links.length > 0 && (
          <div className="flex flex-wrap gap-2 shrink-0">
            {project.links.map((link) => (
              <ExternalLink
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-2 px-3 py-1 text-sm ${pill}`}
              >
                {link.kind === "github" ? <GitHubIcon /> : <GlobeIcon />}
                {link.label}
              </ExternalLink>
            ))}
          </div>
        )}
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
          {project.images.map((image) => (
            <figure key={image.src} className={image.wide ? "sm:col-span-2" : undefined}>
              <ExternalLink href={asset(image.src)} className="block">
                <Image
                  src={asset(image.src)}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto rounded-lg border border-line bg-white hover:opacity-90 transition-opacity"
                />
              </ExternalLink>
              <figcaption className="mt-2 text-center text-sm text-muted">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}
