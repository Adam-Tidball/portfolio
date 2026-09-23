import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { JobItem, ProjectCard, Section, Tag, asset } from "@/components/ui";
import { about, education, experience, profile, projects, skills } from "@/content";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const iconLinks = [
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
  { href: profile.github, label: "GitHub", Icon: GitHubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

function ContactLinks({ size = "w-5 h-5" }: { size?: string }) {
  return (
    <>
      {iconLinks.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
          className="text-muted hover:text-accent transition-colors"
        >
          <Icon className={size} />
        </a>
      ))}
    </>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
          <a href="#top" className="font-semibold tracking-tight">
            {profile.name}
          </a>
          <div className="flex items-center gap-4 sm:hidden">
            <ContactLinks />
          </div>
          <nav aria-label="Sections" className="w-full sm:w-auto">
            <ul className="flex justify-between gap-5 text-sm text-muted sm:justify-end">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-accent transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="py-16 sm:py-24">
          <p className="font-medium text-accent">Hi, I&apos;m</p>
          <h1 className="mt-1 text-4xl sm:text-6xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-3 text-xl sm:text-2xl font-medium">{profile.headline}</p>
          <p className="mt-4 max-w-xl text-lg text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-medium text-bg hover:opacity-90 transition-opacity"
            >
              <MailIcon /> Get in touch
            </a>
            <a
              href={asset(profile.resume)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-5 py-2.5 font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Resume
            </a>
            <div className="ml-2 hidden items-center gap-4 sm:flex">
              <ContactLinks />
            </div>
          </div>
        </div>

        <Section id="about" title="About">
          <div className="space-y-4 text-lg">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="mb-3 text-sm font-semibold">{group.group}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="space-y-8 border-l border-line">
            {experience.map((job) => (
              <JobItem key={`${job.company}-${job.role}`} job={job} />
            ))}
          </ol>
          <div className="mt-10 rounded-2xl border border-line bg-surface p-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-4">
              <h3 className="font-semibold">
                {education.degree} <span className="text-muted font-normal">· {education.school}</span>
              </h3>
              <p className="text-sm text-muted shrink-0">{education.period}</p>
            </div>
            <p className="mt-2 text-muted">{education.note}</p>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p className="text-2xl sm:text-3xl font-semibold tracking-tight">Want to chat? My inbox is open.</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-lg text-accent underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
          <div className="mt-6 flex items-center gap-5">
            <ContactLinks size="w-6 h-6" />
          </div>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
