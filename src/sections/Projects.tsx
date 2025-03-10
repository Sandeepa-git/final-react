import Image from 'next/image'; // Import Image from next/image
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import CheckCircleicon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";


const darkSaasLandingPageUrl = darkSaasLandingPage.src;
const lightSaasLandingPageUrl = lightSaasLandingPage.src;
const aiStartupLandingPageUrl = aiStartupLandingPage.src;

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Increased mobile traffic by 35%" },
      { title: "Optimized load times by 50%" },
    ],
    image: darkSaasLandingPageUrl,
    link: "https://youtu.be/4k7IdSLxh6w",
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Increased brand awareness by 15%" },
      { title: "Improved SEO performance by 25%" },
    ],
    image: lightSaasLandingPageUrl,
    link: "https://youtu.be/7hi5zwO75yc",
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Increased mobile traffic by 35%" },
      { title: "Achieved 98% performance score" },
    ],
    image: aiStartupLandingPageUrl,
    link: "https://youtu.be/Z7I5uSRHMHg",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-1 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 mx-w-wd mx-auto">
          See how I transformed concepts into engaging digital experiences
        </p>

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.title}
              className="sticky top-0 bg-gray-800 rounded-3xl z-0 overflow-hidden 
                         after:-z-10 after:content-[''] after:absolute after:inset-0 
                         after:outline-2 after:outline after:-outline-offset-2 
                         after:rounded-3xl after:outline-white/20 px-6 sm:px-8 pt-8 pb-6 after:pointer-events-non md:pt-12 pd:px-10"
              style={{
                zIndex: index + 1, // Increase z-index for each project
                marginTop: index === 0 ? 0 : "10%", // Add margin to push projects down
                transform: `translateY(${index * 20}px)`, // Add vertical offset for stack effect
              }}
            > 
              {/* Grain background */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>

              <div className="lg:grid lg:grid-cols-2">
                <div>
                  {/* Project metadata */}
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold tracking-widest text-sm inline-flex gap-2"
                    style={{ WebkitTextFillColor: "transparent" }}
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project title */}
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  {/* Project results */}
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/80 items-center"
                      >
                        <CheckCircleicon className="size-5 md:size-6" />
                        {result.title}
                      </li>
                    ))}
                  </ul>

                  {/* Visit Live Site button */}
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full 
                      rounded-xl font-semibold inline-flex items-center justify-center 
                      gap-2 md:w-auto px-8 mt-8 transition hover:bg-gray-200">
                      Visit Live Site
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </button>
                  </a>
                </div>

                {/* Project image */}
                <div>
                  <div className="w-full aspect-auto mt-8 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}  // Set the appropriate width for your images
                      height={600} // Set the appropriate height for your images
                      className="mt-8 -mb-4 md:mb-0 
                      lg:mt-0 lg:absolute lg:h-[100%] 
                      lg:w-auto lg:max-w-none lg:scale-y-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
