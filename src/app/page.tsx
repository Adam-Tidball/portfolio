import Image from "next/image";
import getConfig from "next/config";

// Retrieve the basePath dynamically
const { publicRuntimeConfig } = getConfig();
const { basePath } = publicRuntimeConfig;

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
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
            <div className="relative w-4 h-4">
            <Image
              aria-hidden
              src={`${basePath}/icons/134146_mail_email_icon.png`}
              alt="Email: "
              fill
            />
            </div>
            abtidball@gmail.com
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-8 row-start-2 w-full lg:w-2/3 ">
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

              href={`${basePath}/resumes/Adam B. Tidball - Resume - Website.pdf`} // This is the path to the resume file
              

              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
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
              <h3 className="text-md font-bold mb-2">Marketplace Application</h3>
              <p>

                I worked as a member of a 12 person development team to create a marketplace application for the University of Victoria. The application was designed using a micro service architecture, using Restful APIs for communication between the services and being scaled and deployed utilizing docker containers. My primary role was to develop a recommendation system that would suggest items to users based on their previous interactions with the application.                <br />
                <br />
                The recommendation system was built using Python and the PyTorch library. The system created vector representations of item descriptions in the system and then mapped every user into that vector space based on their interactions. Recommendations were generated by finding the nearest neighbors to the user in the vector space. The system was able to generate recommendations for users in real time.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 items-center mt-12 mb-12">
                <a
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-solid border-black/[.08] hover:bg-black/[.08]"
                  href="https://github.com/matt-lebl/uvic-marketplace"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-4 h-4">
                  <Image
                    aria-hidden
                    src={`${basePath}/icons/211904_social_github_icon.png`}
                    alt="GitHub icon"
                    fill 
                  />
                  </div>
                  Project Repository
                </a>
              </div>

                <div className="border border-solid border-black/[.25] rounded-lg p-4">
                  <div className="flex justify-center mt-4">
                    <div className="w-full xl:w-3/4">
                    <p className="text-center italic mb-2">Recommender Logic Diagram:</p>
                    <Image

                      src={`${basePath}/marketplace/recommender_flow_v2.JPG`}
                      alt="recommender flow diagram"
                      width={800}
                      height={600}
                      className="border border-solid border-black/[.08] rounded-lg object-cover"

                    />
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <div className="w-full xl:w-3/4">
                    <p className="text-center italic mb-2">Recommendation UI:</p>
                    <div className="relative mx-auto max-w-full h-[200px] w-[250px] sm:h-[250px] sm:w-[500px] lg:h-[400px] lg:w-[800px]">
                    <Image
                      src={`${basePath}/marketplace/UI_rec3.PNG`}
                      alt="recommender UI"
                      fill
                      className="border border-solid border-black/[.08] rounded-lg"
                    />
                    </div>
                    </div>
                  </div>
                </div>


            </li>
            <li>
              <h3 className="text-md font-bold mt-16 mb-2">NFTs For Charity</h3>
              <p>
              I started an NFT project aimed at raising funds for charity. I created 5,000 unique bear-themed digital artworks from individual art components I commissioned from a local artist. I regularly consulted with a board of advisors—friends with expertise in business, art, and technology—to refine my ideas and approach. 
              <br />
              <br />
              Throughout this project, I gained an understanding of blockchain technology and the NFT creation process. I also learned a lot of non-software skills such as skills about business and entrepreneurship. While the digital assets have been completed, they are yet to be minted on a blockchain. I look forward to revisiting this project in the future, with plans to mint the NFTs once the timing and resources align.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 items-center mt-12 mb-12">
                <a
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-solid border-black/[.08] hover:bg-black/[.08]"
                  href="https://charitynfts.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative w-4 h-4">
                  <Image
                    aria-hidden
                    src={`${basePath}/icons/8666725_globe_icon.png`}
                    alt="Globe icon"
                    fill 
                  />
                  </div>
                  Project Website
                </a>
              </div>

              <div className="border border-solid border-black/[.25] rounded-lg p-4">
                  <div className="flex justify-center mt-4">
                    <div className="w-full xl:w-1/2">
                    <p className="text-center italic mb-2">NFT Art Components:</p>
                    <div className="relative mx-auto max-w-full h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">
                    <Image
                      src={`${basePath}/NFTs/NFT_Bears_Breakdown.jpeg`}
                      alt="NFT art components"
                      fill
                      className="border border-solid border-black/[.08] rounded-lg"
                    />
                    </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <div className="w-full sm:w-3/4 lg:w-1/2">
                    <p className="text-center italic mb-2">Example Bear Image:</p>
                    <div className="relative mx-auto max-w-full h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]">    
                    <Image
                      src={`${basePath}/NFTs/4983.png`}
                      alt="Example Bear Image"
                      fill
                      className="border border-solid border-black/[.08] rounded-lg"
                    />
                    </div>
                    </div>
                  </div>
                </div>


            </li>
            {/* <li>
              <h3 className="text-md font-bold mt-32">Project 3</h3>
              <p className="mb-32">
                Description of project 3
              </p>
            </li> */}
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
          <div className="relative w-4 h-4">
          <Image
            aria-hidden
            src={`${basePath}/icons/134146_mail_email_icon.png`}
            alt="Email: "
            fill
          />
          </div>
          abtidball@gmail.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Adam-Tidball"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-4 h-4">
          <Image
            aria-hidden
            src={`${basePath}/icons/211904_social_github_icon.png`}
            alt="GitHub icon"
            fill
          />
          </div>
          GitHub →
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/adam-tidball-146117202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-4 h-4">
          <Image
            aria-hidden
            src={`${basePath}/icons/104493_linkedin_icon.png`}
            alt="LinkedIn icon"
            fill
          />
          </div>
          LinkedIn →
        </a>
        </div>
      </footer>
    </div>
  );
}
