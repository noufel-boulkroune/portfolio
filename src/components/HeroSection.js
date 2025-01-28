import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  const skills = [
    { name: "Flutter", icon: "/images/SVG/flutter-icon.svg" },
    { name: "Dart", icon: "/images/SVG/dart-icon.svg" },
    { name: "Firebase", icon: "/images/SVG/firebase-icon.svg" },
    {
      name: "REST API",
      icon: "/images/SVG/rest-api-icon.svg",
      class: "icon-rest-api",
    },
    {
      name: "GitHub",
      icon: "/images/SVG/github-icon.svg",
      class: "icon-github",
    },
    { name: "Stripe", icon: "/images/SVG/stripe-icon.svg" },
    {
      name: "Flutter flavors",
      icon: "/images/SVG/flavors-icon.svg",
      class: "icon-flavors",
    },
    {
      name: "Provider",
      icon: "/images/SVG/state-managment.svg",
      class: "icon-state-management-provider",
    },
    {
      name: "GetX",
      icon: "/images/SVG/state-managment.svg",
      class: "icon-state-management-getX",
    },
    { name: "IOS", icon: "/images/SVG/ios-icon.svg", class: "icon-ios" },
    {
      name: "Android",
      icon: "/images/SVG/android-icon.svg",
      class: "icon-android",
    },
    { name: "Kotlin", icon: "/images/SVG/kotlin-icon.svg" },
    { name: "GCP", icon: "/images/SVG/gcp-icon.svg" },
    {
      name: "Windows",
      icon: "/images/SVG/Windows-icon.svg",
      class: "icon-windows",
    },
    { name: "MacOs", icon: "/images/SVG/MacOs-icon.svg", class: "icon-macos" },
    { name: "Linux", icon: "/images/SVG/Linux-icon.svg", class: "icon-linux" },
    { name: "VS Code", icon: "/images/SVG/VS-code-icon.svg" },
    { name: "Xcode", icon: "/images/SVG/Xcode-icon.svg", class: "icon-xcode" },
    {
      name: "Android Studio",
      icon: "/images/SVG/android-studio-icon.svg",
      class: "icon-android-studio",
    },
  ];

  return (
    <section className="pt-20 sm:pt-32 pb-10 min-h-9/10 flex items-center justify-center bg-gradient-to-br from-dark via-black to-dark px-4 sm:px-16 lg:pt-64 lg:pb-64">
      <motion.div
        className="w-full max-w-7xl mx-auto px-2 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
              Nawfel Boulkroune
            </h1>
            <p className="text-xl sm:text-1xl text-light mb-6">
              Hey there! I’m Nawfel Boulkroune, a Flutter developer with 2 years
              of experience building mobile apps that work seamlessly on both
              Android and iOS. I love creating apps that are not only fast and
              reliable but also a joy to use. My toolkit includes Flutter,
              Firebase, and REST APIs, and I rely on Provider to keep everything
              running smoothly behind the scenes. I’ve had the pleasure of
              launching several apps on the Play Store, each one solving
              real-world problems. I’m all about clean code, continuous
              learning, and taking on new challenges in this fast-paced tech
              world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-yellow-400 transition flex items-center gap-2"
              >
                <span>View Projects</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/noufel-boulkroune"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-primary rounded-full hover:bg-primary/10 transition"
              >
                <FaGithub className="w-6 h-6 text-primary" />
              </a>

              <a
                href="https://www.linkedin.com/in/nawfelboulkroune/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-primary rounded-full hover:bg-primary/10 transition"
              >
                <FaLinkedin className="w-6 h-6 text-primary" />
              </a>

              <a
                href="/Doc/Mobile-dev-nawfel_boulkroune_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-primary rounded-full hover:bg-primary/10 transition flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              className="relative w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] mx-auto flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {/* Blob Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 200"
                >
                  <circle cx="100" cy="100" fill="#FFD700" r="80" />
                  <g>
                    <path
                      fill="#FFA50066"
                      d="M40.4,-70.6C50.5,-64,55.8,-49.6,62.2,-36.6C68.6,-23.5,76.2,-11.8,76.1,0C76.1,11.7,68.5,23.4,60.4,33.5C52.2,43.6,43.6,52.1,33.5,57.1C23.3,62,11.7,63.5,-1.9,66.8C-15.5,70.1,-31,75.3,-43,71.4C-55,67.5,-63.5,54.5,-69.3,41.1C-75.1,27.7,-78.1,13.9,-77.9,0.1C-77.7,-13.6,-74.2,-27.2,-67.8,-39.5C-61.3,-51.7,-51.9,-62.6,-40.1,-68.2C-28.3,-73.8,-14.2,-74.1,0.5,-74.9C15.1,-75.7,30.2,-77.1,40.4,-70.6Z"
                      className="top"
                    />
                    <path
                      fill="#FFD70066"
                      d="M44.9,-75.5C57.4,-70.6,66.1,-56.9,74.2,-42.8C82.3,-28.8,89.7,-14.4,88,-1C86.2,12.3,75.2,24.7,64.7,34.6C54.2,44.4,44.2,51.8,33.5,57.5C22.8,63.2,11.4,67.2,-1.6,70C-14.6,72.8,-29.2,74.4,-41.6,69.6C-54,64.9,-64.2,54,-71.2,41.3C-78.1,28.7,-81.7,14.3,-81.7,0C-81.8,-14.4,-78.3,-28.8,-71.6,-41.7C-64.8,-54.7,-54.8,-66.2,-42.4,-71.1C-29.9,-76,-14.9,-74.4,0.6,-75.5C16.2,-76.6,32.4,-80.4,44.9,-75.5Z"
                      className="middle"
                    />
                    <path
                      fill="#FF450066"
                      d="M39.1,-66.7C53.2,-59.6,69,-54.3,75.5,-43.5C82,-32.6,79.1,-16.3,74.4,-2.7C69.8,10.9,63.3,21.9,56.1,31.4C48.9,40.9,40.9,49,31.5,57.9C22,66.8,11,76.4,-1.4,78.7C-13.7,81.1,-27.5,76.2,-40.7,69.6C-54,62.9,-66.8,54.4,-71.9,42.6C-77,30.7,-74.3,15.3,-74.5,-0.1C-74.7,-15.6,-77.8,-31.1,-71.7,-41.3C-65.7,-51.5,-50.4,-56.2,-37,-63.7C-23.5,-71.1,-11.7,-81.3,0.4,-81.9C12.5,-82.6,25,-73.7,39.1,-66.7Z"
                      className="bottom"
                    />
                  </g>
                </svg>
              </div>

              {/* Profile Image */}
              <div className="relative z-10 overflow-hidden rounded-full w-[240px] sm:w-[340px] h-[240px] sm:h-[340px]">
                <img
                  src="/images/myImage.jpg"
                  alt="Nawfel Boulkroune"
                  className="w-full h-full object-cover transform transition-all duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center lg:text-left bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
            Skills
          </h2>

          {/* Mobile Grid */}
          <div className="grid grid-cols-3 gap-4 place-items-center md:hidden">
            {skills.map((skill, index) => (
              <div
                key={`grid-${skill.name}-${index}`}
                className="flex flex-col items-center p-2"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-8 h-8 sm:w-10 sm:h-10 ${skill.class || ""}`}
                />
                <span className="text-sm sm:text-base mt-2 text-center text-light">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop Infinite Scroll */}
          <div className="hidden md:block relative w-full overflow-hidden">
            <div className="flex space-x-8 animate-infinite-scroll">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`scroll-${skill.name}-${index}`}
                  className="flex flex-col items-center flex-shrink-0"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-10 h-10 ${skill.class || ""}`}
                  />
                  <span className="text-lg mt-2 whitespace-nowrap text-light">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <style jsx global>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
