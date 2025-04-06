import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Saikat Maji</h1>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block bg-gray-800 md:bg-transparent p-4 md:p-0`}>
          <li><a href="#home" className="text-white hover:text-blue-400 transition duration-300 block py-2">Home</a></li>
          <li><a href="#about" className="text-white hover:text-blue-400 transition duration-300 block py-2">About</a></li>
          <li><a href="#projects" className="text-white hover:text-blue-400 transition duration-300 block py-2">Projects</a></li>
          <li><a href="#skills" className="text-white hover:text-blue-400 transition duration-300 block py-2">Skills</a></li>
          <li><a href="#skills" className="text-white hover:text-blue-400 transition duration-300 block py-2">Experience</a></li>
          <li><a href="#contact" className="text-white hover:text-blue-400 transition duration-300 block py-2">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;