import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 w-full lg:w-4/5 ">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-2xl sm:text-3xl font-bold">Adam Tidball</h1>
            <p className="text-sm mb-4 sm:mb-2">
              Software Engineering Portfolio
            </p>
          </div>
          <div className="flex items-center">
            <a
              className="text-sm sm:text-base text-right flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="mailto:abtidball@gmail.com"
            >
            <Image
              aria-hidden
              src="/icons/134146_mail_email_icon.png"
              alt="Email: "
              width={16}
              height={16}
            />
            abtidball@gmail.com
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 w-full lg:w-2/3">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-4xl sm:text-5xl font-bold text-center">
            Hello, I&apos;m Adam!
          </p>
          <p className="text-lg sm:text-xl text-center mb-2 sm:mb-4">
            Welcome to my software portfolio.
          </p>
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
        </div>

        <section id="AboutMe" className="flex flex-col gap-4 mt-8">
          <h2 className="text-lg font-bold">About Me</h2>
          <p>
            I graduated with a degree in Software Engineering from the University of Victoria, specializing in data mining and analysis, artificial intelligence, and machine learning. I have a passion for problem-solving and leveraging the power of technology to create innovative solutions. I am constantly inspired by the impact software can have in transforming industries and improving lives.
            < br />
            < br />
            Throughout my academic journey, I have developed a strong foundation in various programming languages and software engineering principles. In addition to my education, I’ve had the opportunity to gain practical experience through 16 months of co-op work including as a Quality Assurance Engineer, IT support, and as an entrepreneur creating an NFT project. These experiences have provided me with hands-on exposure to real-world challenges and helped me develop a versatile skill set.
            < br />
            < br />
            Outside of tech, I’m passionate about hockey, golf, and chess—each offering its own unique challenges to tackle. I thrive on solving problems, whether they’re on the ice, on the course, or in the software world, and I’m always ready for the next big challenge.
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:abtidball@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/portfolio/icons/134146_mail_email_icon.png"
            alt="Email: "
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
