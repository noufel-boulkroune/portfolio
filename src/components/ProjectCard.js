import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { FaGooglePlay } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [tilts, setTilts] = useState([]);

  useEffect(() => {
    const generateFixedTilts = () => {
      const fixedTilts = project.images.map((_, index) => {
        let tilt;

        if (index === 0) {
          tilt = 3; // Slight right tilt
        } else if (index === 2) {
          tilt = -3; // Slight left tilt
        } else {
          tilt = 0; // No tilt for center
        }

        return { tilt };
      });

      setTilts(fixedTilts);
    };

    generateFixedTilts();
  }, [project.images]);

  const getImageStyle = (index) => {
    const { tilt } = tilts[index] || { tilt: 0 };
    return {
      transform: `rotate(${tilt}deg)`,
      zIndex: index === 1 ? 2 : 1,
    };
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= project.images.length ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? project.images.length - 1 : prev - 1
    );
  };

  const openModal = (image) => {
    // setModalImage(image);
    // setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <motion.div
      className="w-full min-h-[600px] bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center items-center text-center space-y-6">
          <span className="px-6 py-3 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
            {project.category}
          </span>

          <h3 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            {project.description}
          </p>

          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-800">
              Key Features:
            </h4>
            <ul className="space-y-3 text-gray-600">
              {project.tasks.map((task, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Play Store Link */}
          {project.playStoreUrl && (
            <div className="flex items-center space-x-2 mt-6">
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700"
              >
                <FaGooglePlay size={24} />
                <span className="ml-2">Get it on Play Store</span>
              </a>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 md:p-8 relative">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-2 justify-center">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative w-[330px] h-[700px] bg-black rounded-[40px] p-3 shadow-xl flex justify-center items-center"
                style={getImageStyle(index)}
                onClick={() => openModal(image)}
              >
                <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                  <img
                    src={image}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover rounded-[32px]"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Mobile View */}
          <div className="block md:hidden relative flex items-center justify-center">
            {/* Previous Button */}
            <button
              className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600"
              onClick={prevImage}
            >
              {/* Replace the &lt; with an icon */}
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

            {/* Display current image */}
            <div className="relative w-[330px] h-[700px] bg-black rounded-[40px] p-3 shadow-xl flex justify-center items-center mx-4">
              <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                <img
                  src={project.images[currentIndex]}
                  alt={`Screenshot ${currentIndex + 1}`}
                  className="w-full h-full object-cover rounded-[32px]"
                  onClick={() => openModal(project.images[currentIndex])}
                />
              </div>
            </div>

            {/* Next Button */}
            <button
              className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600"
              onClick={nextImage}
            >
              {/* Replace the &gt; with an icon */}
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
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-xl w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={modalImage}
              alt="Enlarged view"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
