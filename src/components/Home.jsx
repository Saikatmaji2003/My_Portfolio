// import React from "react"
// import './Home.css'
// const Home = () => {
//   return (
//     <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-10 bg-gradient-to-r from-gray-900 to-gray-800">
//       <div className="md:w-1/2">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fadeIn opacity-0 animation-delay-0">
//           Hello, I am <span className="text-blue-500">Saikat</span>
//         </h1>
//         <h1 className="text-3xl md:text-6xl text-blue-400 font-semibold mb-6 animate-fadeIn opacity-0 animation-delay-500">
//           I am a Passionate
//         </h1>
//         <h1 className="text-2xl md:text-5xl text-white font-semibold mb-6 animate-fadeIn opacity-0 animation-delay-1000">
//           Web Developer
//         </h1>
//         <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
//           <a
//             href="/resume.pdf"
//             download
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Download Resume
//           </a>
//           <a
//             href="https://github.com/Saikatmaji2003"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
//           >
//             Visit GitHub
//           </a>
//         </div>
//       </div>
//       <div className="md:w-[50%] mt-10 md:mt-0 flex justify-center md:justify-end">
//         <img
//           src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?ga=GA1.1.373179254.1740503477&semt=ais_hybrid"
//           alt="Coding"
//           className="w-full max-w-md md:w-[520px] md:h-[420px] rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
//         />
//       </div>
//     </section>
//   );
// };

// export default Home

import React from "react";
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-10 bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Text/Content Div with Reduced Top Padding */}
      <div className="md:w-1/2 p-6 md:p-8 pt-0 md:pt-0"> {/* Reduced top padding */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white animate-fadeIn opacity-0 animation-delay-0">
          Hello, I am <span className="text-blue-500">Saikat</span>
        </h1>
        <h1 className="text-3xl md:text-6xl text-blue-400 font-semibold mb-6 animate-fadeIn opacity-0 animation-delay-500">
          I am a Passionate
        </h1>
        <h1 className="text-2xl md:text-5xl text-white font-semibold mb-6 animate-fadeIn opacity-0 animation-delay-1000">
          Web Developer
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/Saikatmaji2003"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
          >
            Visit GitHub
          </a>
        </div>
      </div>

      {/* Image Div with More Padding and Reduced Top Margin */}
      <div className="md:w-[50%] mt-4 flex justify-center md:justify-center p-6 md:p-8"> {/* Reduced top margin (mt-10 to mt-4) and increased padding */}
        <img
          src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?ga=GA1.1.373179254.1740503477&semt=ais_hybrid"
          alt="Coding"
          className="w-full max-w-md md:w-[520px] md:h-[420px] rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
        />
      </div>
    </section>
  );
};

export default Home;