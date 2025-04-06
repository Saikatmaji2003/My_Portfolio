import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs size={50} className="text-yellow-500" /> },
    { name: "React", icon: <FaReact size={50} className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
    { name: "MongoDB", icon: <FaDatabase size={50} className="text-green-400" /> },
    { name: "MySQL", icon: <FaServer size={50} className="text-blue-600" /> },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.1, rotate: 5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" },
  };

  return (
    <section id="skills" className="py-16 text-center bg-gray-900 px-4"> {/* Darker Background */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md transition duration-300"
          >
            <div className="text-4xl mb-4 group-hover:text-blue-400 transition duration-300">
              {skill.icon}
            </div>
            <p className="text-lg text-white group-hover:text-blue-400 transition duration-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
