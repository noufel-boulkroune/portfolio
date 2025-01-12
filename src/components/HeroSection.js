import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const skills = [
    { name: "Flutter", icon: "/images/SVG/flutter-icon.svg" },
    { name: "Dart", icon: "/images/SVG/dart-icon.svg" },
    { name: "Firebase", icon: "/images/SVG/firebase-icon.svg" },
    { name: "REST API", icon: "/images/SVG/rest-api-icon.svg" },
    { name: "GitHub", icon: "/images/SVG/github-icon.svg" },
    { name: "Stripe", icon: "/images/SVG/stripe-icon.svg" },
    { name: "Flutter flavors", icon: "/images/SVG/flavors-icon.svg" },
    { name: "Provider", icon: "/images/SVG/state-managment.svg" },
    { name: "GetX", icon: "/images/SVG/state-managment.svg" },
    { name: "IOS", icon: "/images/SVG/ios-icon.svg" },
    { name: "Android", icon: "/images/SVG/android-icon.svg" },
    { name: "Kotlin", icon: "/images/SVG/kotlin-icon.svg" },
    { name: "GCP", icon: "/images/SVG/gcp-icon.svg" },
    { name: "Windows", icon: "/images/SVG/Windows-icon.svg" },
    { name: "MacOs", icon: "/images/SVG/MacOs-icon.svg" },
    { name: "Linux", icon: "/images/SVG/Linux-icon.svg" },
    { name: "VS Code", icon: "/images/SVG/VS-code-icon.svg" },
    { name: "Xcode", icon: "/images/SVG/Xcode-icon.svg" },
    { name: "Android Studio", icon: "/images/SVG/android-studio-icon.svg" },
  ];
  return (
    <section className="pt-32 pb-10 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <motion.div
        className="max-w-6xl mx-auto px-6 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {" "}
        <motion.div
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nawfel Boulkroune
            </h1>
            <p className="text-2xl text-gray-700 mb-6">
              Mobile App Developer with 2 years of experience in Android and
              Flutter, skilled in building user-friendly apps using Flutter
              framework, Dart, Firebase, Git, and REST APIs. I launched apps on
              both Play Store and App Store. I thrive on tackling complex
              projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
              >
                <span>View Projects</span>
                <ChevronRight size={20} />
              </a>
              <a
                href="https://github.com/noufel-boulkroune"
                target="_blank"
                className="p-3 border rounded-full hover:bg-gray-100 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/nawfelboulkroune/"
                target="_blank"
                className="p-3 border rounded-full hover:bg-gray-100 transition"
              >
                <FaLinkedin size={24} />
              </a>
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
          </div>{" "}
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-6 text-center md:text-left w-full px-4">
            <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills
            </h2>

            {/* Mobile Grid View */}
            <div className="md:hidden grid grid-cols-3 gap-4 place-items-center">
              {skills.map((skill, index) => (
                <div
                  key={`grid-${skill.name}-${index}`}
                  className="flex flex-col items-center p-2"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <span className="text-sm sm:text-base mt-2 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop Infinite Scroll */}
            <div className="hidden md:block relative w-full overflow-hidden">
              <div className="flex space-x-8 animate-infinite-scroll">
                {/* First set of skills */}
                {skills.map((skill, index) => (
                  <div
                    key={`scroll-1-${skill.name}-${index}`}
                    className="flex flex-col items-center flex-shrink-0"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                    <span className="text-lg mt-2 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {skills.map((skill, index) => (
                  <div
                    key={`scroll-2-${skill.name}-${index}`}
                    className="flex flex-col items-center flex-shrink-0"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                    <span className="text-lg mt-2 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx global>{`
            @keyframes infinite-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-150%);
              }
            }

            .animate-infinite-scroll {
              animation: infinite-scroll ${skills.length * 4}s linear infinite; /* Adjust duration */
            }

            /* Pause animation on hover */
            .animate-infinite-scroll:hover {
              animation-play-state: paused;
            }

            /* Hide scrollbar */
            .overflow-hidden::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
