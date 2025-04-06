import React from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-gray-700 p-6 rounded-xl shadow-lg transition duration-300"
    >
      <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 text-sm md:text-base">{project.description}</p>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-400 hover:text-blue-600 transition duration-300"
      >
        <FaGithub size={20} className="mr-2" />
        <span className="font-semibold">View on GitHub</span>
      </a>
    </motion.div>
  );
};

export default ProjectCard;