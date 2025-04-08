import React from "react";
import ProjectCard from "./ProjectCard";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import { motion } from "framer-motion"; // Import framer-motion

const Projects = () => {
  const projectList = [
    {
      title: "FindJob",
      description: "FindJob is a full-stack job search web application built with the MERN stack, designed to help users discover, filter, and save job opportunities with ease. It features user authentication, resume upload, and a responsive UI for a seamless job-hunting experience.",
      githubLink: "https://github.com/Saikatmaji2003/FindJob",
    },
    {
      title: "RideSwift",
      description: "RideSwift is a mobile-first ride-booking app inspired by Uber, developed using React and Tailwind CSS. It offers a sleek, intuitive interface optimized for mobile users, simulating real-time ride requests and booking flows.",
      githubLink: "https://github.com/Saikatmaji2003/RideSwift",
    },
    {
      title: "News App",
      description: "NewsApp is a React-based live news aggregator that fetches and displays the latest headlines using the NewsAPI. Users can browse news by category in a clean, responsive interface built with BootStrap and React.",
      githubLink: "https://github.com/Saikatmaji2003/NewsApp",
    }

  ];

  return (
    <section id="projects" className="py-16 text-center bg-gray-800 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      {/* Visit Other Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <a
          href="https://github.com/Saikatmaji2003" // Link to your GitHub profile or projects page
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          <FaGithub className="mr-2" /> {/* GitHub icon */}
          <span>Visit Other Projects</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;