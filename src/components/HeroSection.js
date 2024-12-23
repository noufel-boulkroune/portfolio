import React from "react";
import { ChevronRight, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Left Content Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nawfel Boulkroune
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-gray-700">
            Mobile App Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Mobile App Developer with 2 years of experience in Android and
            Flutter, skilled in building user-friendly apps using Flutter
            framework, Dart, Firebase, Git, and REST APIs. I launched apps on
            both Play Store and App Store. I thrive on tackling complex
            projects.
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>View Projects</span>
              <ChevronRight size={20} />
            </a>
            <div className="flex space-x-4">
              <a
                href="https://github.com/noufel-boulkroune"
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/nawfelboulkroune/"
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="https://example.com/cv.pdf"
                target="_blank"
                className="p-3 hover:bg-gray-100 rounded-full transition-colors"
              >
                <span>CV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Section with Advanced Shape and Color */}
        <div className="flex justify-center md:block">
          <motion.div
            className="relative w-[400px] h-[400px] mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {/* Right Image Section with Advanced Shape and Color */}
            <div className="flex justify-center md:block">
              <motion.div
                className="relative w-[400px] h-[400px] mx-auto overflow-hidden flex justify-center items-center" // Center the image within the container
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                {/* Blob shapes that move around the image */}
                <div className="absolute top-0 w-full h-full">
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 200"
                  >
                    <circle cx="100" cy="100" fill="#939CE2" r="80" />
                    <g>
                      <path
                        fill="#00796B66"
                        d="M40.4,-70.6C50.5,-64,55.8,-49.6,62.2,-36.6C68.6,-23.5,76.2,-11.8,76.1,0C76.1,11.7,68.5,23.4,60.4,33.5C52.2,43.6,43.6,52.1,33.5,57.1C23.3,62,11.7,63.5,-1.9,66.8C-15.5,70.1,-31,75.3,-43,71.4C-55,67.5,-63.5,54.5,-69.3,41.1C-75.1,27.7,-78.1,13.9,-77.9,0.1C-77.7,-13.6,-74.2,-27.2,-67.8,-39.5C-61.3,-51.7,-51.9,-62.6,-40.1,-68.2C-28.3,-73.8,-14.2,-74.1,0.5,-74.9C15.1,-75.7,30.2,-77.1,40.4,-70.6Z"
                        className="top"
                      />
                      <path
                        fill="#B2DFDB66"
                        d="M44.9,-75.5C57.4,-70.6,66.1,-56.9,74.2,-42.8C82.3,-28.8,89.7,-14.4,88,-1C86.2,12.3,75.2,24.7,64.7,34.6C54.2,44.4,44.2,51.8,33.5,57.5C22.8,63.2,11.4,67.2,-1.6,70C-14.6,72.8,-29.2,74.4,-41.6,69.6C-54,64.9,-64.2,54,-71.2,41.3C-78.1,28.7,-81.7,14.3,-81.7,0C-81.8,-14.4,-78.3,-28.8,-71.6,-41.7C-64.8,-54.7,-54.8,-66.2,-42.4,-71.1C-29.9,-76,-14.9,-74.4,0.6,-75.5C16.2,-76.6,32.4,-80.4,44.9,-75.5Z"
                        className="middle"
                      />
                      <path
                        fill="#7C4DFF66"
                        d="M39.1,-66.7C53.2,-59.6,69,-54.3,75.5,-43.5C82,-32.6,79.1,-16.3,74.4,-2.7C69.8,10.9,63.3,21.9,56.1,31.4C48.9,40.9,40.9,49,31.5,57.9C22,66.8,11,76.4,-1.4,78.7C-13.7,81.1,-27.5,76.2,-40.7,69.6C-54,62.9,-66.8,54.4,-71.9,42.6C-77,30.7,-74.3,15.3,-74.5,-0.1C-74.7,-15.6,-77.8,-31.1,-71.7,-41.3C-65.7,-51.5,-50.4,-56.2,-37,-63.7C-23.5,-71.1,-11.7,-81.3,0.4,-81.9C12.5,-82.6,25,-73.7,39.1,-66.7Z"
                        className="bottom"
                      />
                    </g>
                  </svg>
                </div>

                {/* Image with circular shape */}
                <div className="relative z-10 overflow-hidden rounded-full w-[300px] h-[300px]">
                  <img
                    src="/images/myImage.jpg"
                    alt="Nawfel Boulkroune"
                    className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
