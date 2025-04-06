import React from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Internship",
      company: "Pinnacle Labs",
      location: "Virtual",
      duration: "August 2024 - September 2024",
      description:
        "Successfully completed a web development virtual internship at Pinnacle Labs, where I built a personal portfolio website and a fully functional to-do list application. The projects were developed using React.js, Tailwind CSS, and JavaScript, focusing on responsive design, component-based architecture, and state management.",
    },
    {
      title: "Industrial Training",
      company: "Webguru Infosystem",
      location: "Kolkata, India",
      duration: "July 2024 - September 2024",
      description:
        "Completed industrial training focused on the MEAN stack at Webguru Infosystem, where I developed a restaurant recommendation web application using Angular. The app provided intelligent suggestions based on dish preferences and user location. Technologies used include Angular, TypeScript, Node.js, Express, and MongoDB, with an emphasis on building RESTful APIs and dynamic front-end integration.",
    },
    {
      title: "BCA Final Year Project",
      company: "College Project",
      location: "Kolkata, India",
      duration: "August 2024 - May 2025",
      description:
        "CareNow is a full-stack medical appointment booking platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows patients to browse doctors by specialty, book appointments, and manage schedules in a user-friendly interface. The app features secure authentication, real-time availability, and an admin dashboard for managing appointments and user data efficiently."
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-16 md:py-20 px-4 bg-gray-800"> {/* Slightly lighter background */}
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
        Experience
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-gray-700 rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <p className="text-gray-300">{exp.company}, {exp.location}</p>
              </div>
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <p className="text-gray-300">{exp.duration}</p>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="mt-4">
                <span className="text-gray-400">Skills:</span>
                <span className="text-gray-300"> React, Node.js, MongoDB</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
