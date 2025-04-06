import React from "react";
import { FaCode, FaLaptopCode, FaLightbulb, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", transition: { duration: 0.3 } },
  };

  return (
    <section id="about" className="py-16 md:py-20 text-center px-4 bg-gradient-to-r from-gray-800 to-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-white mb-8"
      >
        About <span className="text-blue-500">Me</span>
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/profile.jpg" // Replace with your profile picture
            alt="Profile"
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-lg border-4 border-blue-500"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-left"
        >
          <motion.p variants={textVariants} className="text-base md:text-lg text-gray-300 mb-6">
            Hi, I'm Saikat Maji, a final-year BCA student with a passion for the MERN stack. I have worked on job-searching applications and news apps.
          </motion.p>
          <motion.p variants={textVariants} className="text-base md:text-lg text-gray-300 mb-6">
            I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js) and have experience building full-stack applications. I'm also proficient in HTML, CSS, JavaScript, and tools like Git and Tailwind CSS.
          </motion.p>
          <motion.p variants={textVariants} className="text-base md:text-lg text-gray-300 mb-6">
            I'm passionate about creating user-friendly and efficient web applications. I love learning new technologies and applying them to build solutions that make a difference.
          </motion.p>
        </motion.div>

        {/* Icons for Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-6 md:space-y-0 md:space-x-8"
        >
          <motion.div variants={iconVariants} whileHover="hover" className="flex flex-col items-center">
            <FaCode className="text-4xl text-blue-500 mb-2" />
            <p className="text-base text-gray-300">MERN Stack</p>
          </motion.div>
          <motion.div variants={iconVariants} whileHover="hover" className="flex flex-col items-center">
            <FaLaptopCode className="text-4xl text-blue-500 mb-2" />
            <p className="text-base text-gray-300">Web Development</p>
          </motion.div>
          <motion.div variants={iconVariants} whileHover="hover" className="flex flex-col items-center">
            <FaLightbulb className="text-4xl text-blue-500 mb-2" />
            <p className="text-base text-gray-300">Problem Solving</p>
          </motion.div>
        </motion.div>

        {/* Project Counter with Animation */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12 flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg w-full md:w-1/2 mx-auto transition-transform"
        >
          <FaProjectDiagram className="text-5xl text-blue-500 mb-4" />
          <h3 className="text-2xl font-bold text-white">4+ Projects</h3>
          <p className="text-gray-300 mt-2 text-center">
            I have built multiple projects, including job-search platforms and news apps. Check out my GitHub for more!
          </p>
          <a
            href="https://github.com/Saikatmaji2003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            View Projects
          </a>
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Let's Connect!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
