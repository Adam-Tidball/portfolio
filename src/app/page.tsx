import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 grid grid-rows-[auto_auto] gap-4 w-2/3 items-center">
        <div className="items-center sm:items-start py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-center">Adam Tidball</h1>
          <p className="text-sm text-center">
            Software Engineering Portfolio
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 items-center">
          <a
            className="px-4 py-2 rounded-full border border-solid border-black/[.08] hover:bg-black/[.08]"
            href="#AboutMe"
          >
            About Me
          </a>
          <a
            className="px-4 py-2 rounded-full border border-solid border-black/[.08] hover:bg-black/[.08]"
            href="#Projects"
          >
            Projects
          </a>
          <a
            className="px-4 py-2 rounded-full border border-solid border-black/[.08] hover:bg-black/[.08]"
            href="#Footer"
          >
            Contact Info
          </a>
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section id="AboutMe" className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">About Me</h2>
          <p>
            I am a software engineer with a passion for creating and maintaining
            software that is both efficient and user-friendly. I have a
            background in full-stack development, with experience in both
            front-end and back-end technologies. I am always looking for new
            challenges and opportunities to learn and grow as a developer.
          </p>
        </section>
        <section id="Projects" className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Projects</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <h3 className="text-md font-bold">Project 1</h3>
              <p>
                Description of project 1
              </p>
            </li>
            <li>
              <h3 className="text-md font-bold mt-32">Project 2</h3>
              <p>
                Description of project 2
              </p>
            </li>
            <li>
              <h3 className="text-md font-bold mt-32">Project 3</h3>
              <p className="mb-32">
                Description of project 3
              </p>
            </li>
          </ul>
        </section>

      </main>

      <footer id="Footer" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="col-span-1 sm:col-span-2 flex flex-col gap-4 items-center">
          <h2 className="text-lg font-bold">Contact Info</h2>
          <p>
            Feel free to reach out to me via email or connect with me on GitHub
            or LinkedIn.
          </p>
        </div>
        <div className="col-start-1 sm:col-start-1 sm:col-span-2 flex gap-8 flex-wrap items-center justify-center mt-8">
          <a
          className="flex items-center gap-2  "
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/portfolio/icons/134146_mail_email_icon.png"
            alt="Email icon"
            width={16}
            height={16}
          />
          abtidball@gmail.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Adam-Tidball"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/portfolio/icons/211904_social_github_icon.png"
            alt="GitHub icon"
            width={16}
            height={16} 
          />
          GitHub →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/adam-tidball-146117202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/portfolio/icons/104493_linkedin_icon.png"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn →
        </a>
        </div>
      </footer>
    </div>
  );
}
