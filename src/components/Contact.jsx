// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 px-4">
//       <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Get in Touch</h2>
//       <p className="text-lg mb-6 text-gray-300">Feel free to reach out for collaborations or just a chat!</p>
//       <div className="flex justify-center space-x-4 md:space-x-6">
//         <a
//           href="https://github.com/Saikatmaji2003"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-300 hover:text-blue-400 transition duration-300"
//         >
//           <FaGithub size={30} />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/saikat-maji-077159256/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-gray-300 hover:text-blue-400 transition duration-300"
//         >
//           <FaLinkedin size={30} />
//         </a>
//         <div className="relative group">
//           <a
//             href="mailto:majisaikat864@gmail.com"
//             className="text-gray-300 hover:text-blue-400 transition duration-300"
//           >
//             <FaEnvelope size={30} />
//           </a>
//           <span className="absolute left-1/2 -translate-x-1/2 -top-10 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
//             Mail me at majisaikat864@gmail.com
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// const serviceId = 'service_nrjrn6l';
// const templateId = 'template_hfogvv8';
// const userId = 'WBlX9GgBRBzHl-TcC';


import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace with your own credentials
    const serviceId = "service_nrjrn6l";
    const templateId = "template_hfogvv8";
    const userId = "WBlX9GgBRBzHl-TcC";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "majisaikat864@gmail.com",
        },
        userId
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Whether it's a project or just a hello, feel free to reach out!
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="text-left">
            <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div className="text-left">
            <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-blue-500 transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>

      <div className="flex justify-center items-center mt-10 space-x-6">
        <a
          href="https://github.com/Saikatmaji2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transform hover:scale-110 transition duration-300"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/saikat-maji-077159256/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transform hover:scale-110 transition duration-300"
        >
          <FaLinkedin size={28} />
        </a>
        <div className="relative group">
          <a
            href="mailto:majisaikat864@gmail.com"
            className="text-gray-300 hover:text-white transform hover:scale-110 transition duration-300"
          >
            <FaEnvelope size={28} />
          </a>
          <span className="absolute left-1/2 -translate-x-1/2 -top-10 bg-gray-700 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
            Mail me
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
