import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Doctors App Design Test",
    description:
      "A design for a doctor appointment booking app with Flutter, Dart, MVVM, Provider, and REST API integration. It allows users to search for doctors, schedule appointments, and track health data.",
    technologies: ["Flutter", "Dart", "MVVM", "Provider", "REST API"],
    images: [
      "images/doctors2.png",
      "images/doctors.png",
      "images/doctors3.png",
      "images/doctors4.png",
      "images/doctors5.png",
      "images/doctors6.png",
      "images/doctors7.png",
      "images/doctors8.png",
    ],
    link: "https://github.com/noufel-boulkroune/DoctorOFM",
  },
  {
    id: 2,
    title: "MyShop App",
    description:
      "A complete e-commerce app designed with Flutter, integrating Firebase for the backend, with authentication, notifications, and a real-time database.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Auth",
      "Notifications",
      "Design",
    ],
    images: [
      "images/myShop2.jpg",
      "images/myShop.jpg",
      "images/myShop1.jpg",
      "images/myShop3.jpg",
      "images/myShop4.jpg",
      "images/myShop5.jpg",
    ],
    link: "https://github.com/noufel-boulkroune/E-commerce-shop-app",
  },
  {
    id: 3,
    title: "Weather Design App",
    description:
      "A weather forecast app design created with Flutter and Dart, featuring a static data display for weather updates.",
    technologies: ["Flutter", "Dart"],
    images: ["images/wether.jpg", "images/wether1.jpg", "images/wether2.jpg"],
    link: "",
  },
  {
    id: 4,
    title: "Multi Store App",
    description:
      "A multi-store app built with Flutter, allowing users to shop across various stores or create their own store and sell products. The app supports user accounts, product listings, and order management, with Firebase serving as the backend for user authentication and data storage.",
    technologies: ["Flutter", "Dart", "MVVM", "Provider", "Firebase"],
    images: [
      "images/ms.jpg",
      "images/ms1.jpg",
      "images/ms2.jpg",
      "images/ms3.jpg",
    ],
    link: "https://github.com/noufel-boulkroune/Multi-Store-App",
  },
  {
    id: 5,
    title: "Social Media App Test Design",
    description:
      "A social media app design created with Flutter and Dart, featuring a REST API integration for user interactions such as liking and favoriting posts.",
    technologies: ["Flutter", "Dart", "REST API"],
    images: ["images/mobile_test1.png", "images/mobile_test2.png"],
    link: "https://github.com/noufel-boulkroune/DeveloperTestUI",
  },
  {
    id: 6,
    title: "Recipes App Design",
    description:
      "A recipe app design built with Flutter and Dart, utilizing Firebase for backend",
    technologies: ["Flutter", "Dart", "Firebase"],
    images: ["images/meal.jpg", "images/meal1.jpg", "images/meal2.jpg"],
    link: "",
  },
  {
    id: 7,
    title: "Auth Design",
    description:
      "A Flutter and Dart-based design showcasing a user authentication screen, including login, registration, and social login with Facebook, Twitter, and Google icons.",
    technologies: ["Flutter", "Dart"],
    images: ["images/auth.jpg", "images/auth1.jpg", "images/auth2.jpg"],
    link: "",
  },
  {
    id: 8,
    title: "Market App Design",
    description:
      "A Flutter-based market app design that uses MVVM architecture. Users can browse and purchase products with smooth navigation and user-friendly UI.",
    technologies: ["Flutter", "Dart", "MVVM"],
    images: ["images/market.jpg", "images/market1.jpg", "images/market2.jpg"],
    link: "https://github.com/noufel-boulkroune/MVVM-Shop-App",
  },
  {
    id: 9,
    title: "High Weight Ratio (App Design)",
    description:
      "A fitness tracking app designed with Flutter and Dart, focusing on weight and health management.",
    technologies: ["Flutter", "Dart"],
    images: ["images/h_w.jpg", "images/h_w1.jpg", "images/h_w2.jpg"],
    link: "",
  },
];

const LearningProjectsSection = () => {
  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(
    projectsData.map(() => 0)
  );

  const handleNextImage = (projectIndex) => {
    setCurrentImageIndex((prev) =>
      prev.map((index, idx) =>
        idx === projectIndex
          ? (index + 1) % projectsData[projectIndex].images.length
          : index
      )
    );
  };

  const handlePreviousImage = (projectIndex) => {
    setCurrentImageIndex((prev) =>
      prev.map((index, idx) =>
        idx === projectIndex
          ? (index - 1 + projectsData[projectIndex].images.length) %
            projectsData[projectIndex].images.length
          : index
      )
    );
  };

  return (
    <section
      id="projects"
      className="py-20 text-white bg-gradient-to-br from-dark via-black to-dark"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
          My Projects
        </h2>
        <motion.p
          className="text-lg text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Here are projects I've built as part of my learning journey,
          recruitment tests, and challenge tasks.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
          {projectsData.map((project, projectIndex) => (
            <motion.div
              key={project.id}
              className="w-full min-h-[500px] bg-dark rounded-xl shadow-lg overflow-hidden border-2 border-primary/20 hover:border-primary/60 transition-colors duration-300 transform hover:scale-105 transition-all flex flex-col"
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={project.images[currentImageIndex[projectIndex]]}
                  alt={project.title}
                  className="w-full h-full object-cover bg-gray-700"
                />
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => handlePreviousImage(projectIndex)}
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-primary/70 text-gray-700 rounded-full p-2 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleNextImage(projectIndex)}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-primary/70 text-gray-700 rounded-full p-2 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex-grow"></div>
                <div className="mt-auto">
                  <ul className="mb-4 flex flex-wrap justify-center items-center">
                    {project.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className="inline-block bg-gray-700 text-sm text-white py-1 px-3 rounded-full mr-2 mb-2"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {project.link &&
                    project.link !== "" &&
                    project.link !== null && (
                      <div className="flex justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-200 hover:text-blue-500 flex items-center"
                        >
                          <FaGithub className="mr-2" /> View on GitHub
                        </a>
                      </div>
                    )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningProjectsSection;
