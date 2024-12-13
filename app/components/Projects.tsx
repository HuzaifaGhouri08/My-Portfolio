import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

type Project = {
  title: string;
  description: string;
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Weather App",
    description: "Get accurate and up-to-the-minute forecasts for your current location and any other spot on the globe.",
    link: "https://huzaifaghouri08.github.io/Weather-App/",
    image: "/Weather.jpg"
  },
  {
    title: "Launching CountDown",
    description: "A live countdown timer shows you exactly when we're going live, or launching something.",
    link: "https://launching-soon-omega.vercel.app/",
    image: "/Launch.jpg"
  },
  {
    title: "Consultation Web Template",
    description: "Connects you with expert professionals.",
    link: "https://numerio.netlify.app/",
    image: "/Numerio.jpg"
  },
  {
    title: "Number Guessing Game",
    description: "This is a classic game where the computer selects a random number within a specified range.",
    link: "https://number-guessing-game-nu-steel.vercel.app/",
    image: "/Game.jpg"
  },
  {
    title: "E-Commerce Landing Page",
    description: "This E-Commerce landing page template outlines a structured approach to creating high-converting online storefronts.",
    link: "https://huzaifaghouri08.github.io/Ecommerce/",
    image: "/Ecommerce.jpg"
  },
    {
      title: "To-do List",
      description: "This Todo List app helps you manage and track your daily tasks",
      link: "https://todo-list-zeta-orpin-98.vercel.app/",
      image: "/Todo.jpg"
    }
];

const ProjectsPage: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-10 px-5 md:px-10 bg-primary flex flex-col items-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple tracking-widest font-grover">My Projects</h1>
        <p className="text-gray-400 mt-4 font-itim">Explore some of the projects I’ve worked on.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0B0D24] rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300 hover:bg-[#1c2051]"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={160}
              className="object-cover rounded-md mb-4 hover:opacity-90 transition-opacity duration-300"
            />
            <h2 className="text-2xl font-semibold text-white font-dancing hover:text-purple-300 transition-colors duration-300">
              {project.title}
            </h2>
            <p className="text-gray-400 mt-3 font-itim hover:text-gray-200 transition-colors duration-300">
              {project.description}
            </p>

          <Link href={project.link} 
                className="inline-block font-grover mt-5 text-purple font-medium hover:text-white transition-colors duration-300" 
                target="_blank" 
                rel="noopener noreferrer">
                View Project &rarr;
          </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
