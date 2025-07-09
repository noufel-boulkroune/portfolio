import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SofaShowcaseSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    mobile: 0,
    tablet: 0,
    tv: 0,
  });

  const platforms = {
    mobile: {
      title: "Mobile Experience",
      description:
        "The mobile version provides a smooth streaming experience with intuitive touch controls and portrait-optimized interface. All core features are accessible with gesture-based navigation.",
      images: [
        "/images/sofa1.png",
        "/images/sofa2.png",
        "/images/sofa3.png",
        "/images/sofa4.png",
        "/images/sofa7.png",
        "/images/sofa5.png",
        "/images/sofa6.png",
        "/images/sofa8.png",
        "/images/sofa9.png",
        "/images/sofa10.png",
      ],
      features: ["Touch-Optimized Interface", "Offline Download Support"],
    },
    tablet: {
      title: "Tablet Interface",
      description:
        "Adapted for larger screens with enhanced UI elements and better content discovery. The tablet version takes advantage of the bigger display for improved browsing and viewing experience.",
      images: [
        "/images/sofa_tab1.png",
        "/images/sofa_tab2.png",
        "/images/sofa_tab3.png",
        "/images/sofa_tab4.png",
        "/images/sofa_tab5.png",
        "/images/sofa_tab6.png",
        "/images/sofa_tab7.png",
        "/images/sofa_tab8.png",
        "/images/sofa_tab9.png",
        "/images/sofa_tab10.png",
      ],
      features: ["Enhanced Content Grid", "Better Content Discovery"],
    },
    tv: {
      title: "Android TV Experience",
      description:
        "The TV version delivers a comfortable lean-back experience with remote-friendly navigation and voice search capabilities. Designed specifically for larger screens, it provides intuitive browsing and optimized viewing.",
      images: [
        "/images/sofa_tv4.png",
        "/images/sofa_tv1.png",
        "/images/sofa_tv2.png",
        "/images/sofa_tv5.png",
        "/images/sofa_tv6.png",
        "/images/sofa_tv3.png",
        "/images/sofa_tv7.png",
        "/images/sofa_tv8.png",
        "/images/sofa_tv9.png",
        "/images/sofa_tv10.png",
      ],
      features: [
        "Remote Control Navigation",
        "Voice Search Support",

        "Focus Management",
        "TV-Optimized Layout",
      ],
    },
  };

  const nextImage = (platform) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [platform]: (prev[platform] + 1) % platforms[platform].images.length,
    }));
  };

  const prevImage = (platform) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [platform]:
        prev[platform] === 0
          ? platforms[platform].images.length - 1
          : prev[platform] - 1,
    }));
  };

  const MockupImage = ({ platform, images, className }) => {
    const currentImage = images[currentImageIndex[platform]];

    return (
      <div className={`relative ${className}`}>
        {/* Device Frame */}
        <div className="relative mb-6">
          {platform === "mobile" && (
            <div className="relative">
              {/* Phone Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-[2.5rem] blur-xl transform translate-x-2 translate-y-2"></div>

              {/* Phone Body */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-2 rounded-[2.5rem] shadow-2xl border border-gray-700">
                {/* Screen Bezel */}
                <div className="bg-black rounded-[2.2rem] p-1">
                  {/* Screen - Updated dimensions for iPhone 16 Pro Max aspect ratio */}
                  <div className="w-72 h-[622px] bg-gray-900 rounded-[2rem] overflow-hidden relative">
                    {/* Notch - Updated for iPhone 16 Pro Max Dynamic Island */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-black rounded-full z-20"></div>

                    {/* Screen Content - Updated to fit perfectly without status bar or home indicator */}
                    <div className="absolute inset-0">
                      <img
                        src={currentImage}
                        alt={`Sofa Mobile ${currentImageIndex[platform] + 1}`}
                        className="w-full h-full object-cover object-top rounded-[1.8rem]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {platform === "tablet" && (
            <div className="relative">
              {/* Tablet Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-3xl blur-xl transform translate-x-3 translate-y-3"></div>

              {/* Tablet Body - Updated for iPad Pro M4 13-inch */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 p-3 rounded-3xl shadow-2xl border border-gray-700">
                {/* Screen Bezel */}
                <div className="bg-black rounded-2xl p-2">
                  {/* Screen - iPad Pro M4 13-inch dimensions (2752 x 2064 aspect ratio) */}
                  <div className="w-[400px] h-[300px] sm:w-[550px] sm:h-[412px] md:w-[650px] md:h-[487px] lg:w-[750px] lg:h-[562px] bg-gray-900 rounded-xl overflow-hidden relative">
                    {/* Screen Content */}
                    <img
                      src={currentImage}
                      alt={`Sofa Tablet ${currentImageIndex[platform] + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {platform === "tv" && (
            <div className="relative">
              {/* TV Shadow */}
              <div className="absolute inset-0 bg-black/30 rounded-xl blur-2xl transform translate-x-4 translate-y-4"></div>

              {/* TV Body */}
              <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden">
                {/* TV Bezel */}
                <div className="bg-black p-4 sm:p-6 rounded-xl">
                  {/* Screen */}
                  <div className="w-[350px] h-[200px] sm:w-[450px] sm:h-[255px] md:w-[580px] md:h-[330px] lg:w-[700px] lg:h-[400px] xl:w-[800px] xl:h-[450px] 2xl:w-[900px] 2xl:h-[510px] bg-gray-900 rounded-lg overflow-hidden relative border border-gray-800">
                    {/* Screen Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                    {/* Screen Content */}
                    <img
                      src={currentImage}
                      alt={`Sofa TV ${currentImageIndex[platform] + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* TV Stand */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg shadow-lg"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-gradient-to-b from-gray-600 to-gray-700 rounded-full shadow-lg"></div>
            </div>
          )}

          {/* Image Navigation Controls - Moved outside the device frame */}
          <div
            className="absolute top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 z-30"
            style={{ left: "-60px", right: "-60px" }}
          >
            <motion.button
              onClick={() => prevImage(platform)}
              className="w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => nextImage(platform)}
              className="w-12 h-12 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Image Indicators - Moved below the device */}
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentImageIndex((prev) => ({ ...prev, [platform]: index }))
              }
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentImageIndex[platform] === index
                  ? "bg-primary"
                  : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-bl from-dark via-black to-dark relative overflow-hidden">
      <div className="mb-24 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <motion.p
          className="text-lg text-center mb-16 text-light px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Over my years of professional experience, I've been part of exciting
          and challenging projects. Here are some that highlight my technical
          skills and development contributions.
        </motion.p>
        <motion.div
          className="max-w-full mx-auto px-4 sm:px-16 md:px-8 lg:px-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent px-4">
              Sofa – Cross-Platform Streaming App
            </h3>
            <p className="text-lg md:text-xl text-light max-w-3xl mx-auto px-4">
              I built a responsive streaming platform for Algeria using Flutter
              with Provider MVVM architecture. The app features a custom video
              player with multi-language subtitle support, video quality
              adjustment controls, Google Cast integration, user preference
              persistence, and authentication management. The UI was implemented
              based on a professional Figma design to ensure a visually
              consistent and user-friendly experience. Successfully released
              across mobile, tablet, and Android TV platforms on Google Play
              Store.
            </p>
          </motion.div>

          {/* Platform sections */}
          <div className="space-y-24 lg:space-y-32">
            {Object.entries(platforms).map(([key, platform], index) => (
              <motion.div
                key={key}
                className={`grid xl:grid-cols-5 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 items-center ${
                  index % 2 === 1 ? "xl:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 * index,
                  duration: 0.8,
                }}
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Content - Wider on larger screens */}
                <div
                  className={`space-y-6 px-4 lg:px-8 xl:px-12 ${
                    index % 2 === 1
                      ? "xl:col-start-4 xl:col-span-2 lg:col-start-2 lg:col-span-2"
                      : "xl:col-span-2 lg:col-span-2"
                  }`}
                >
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-light mb-4">
                    {platform.title}
                  </h4>
                  <p className="text-light/80 text-base md:text-lg lg:text-xl leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-light/80 text-sm md:text-base lg:text-lg">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mockup - More space on larger screens */}
                <motion.div
                  className={`flex justify-center px-4 lg:px-8 xl:px-12 ${
                    index % 2 === 1
                      ? "xl:col-start-1 xl:col-span-3 lg:col-start-1 lg:col-span-1"
                      : "xl:col-start-3 xl:col-span-3 lg:col-start-3 lg:col-span-1"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <MockupImage
                    platform={key}
                    images={platform.images}
                    className="transform hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Download section */}
          <motion.div
            className="text-center mt-20 pt-16 border-t border-primary/20 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl md:text-2xl font-bold text-light mb-4">
              Available on Google Play Store
            </h4>
            <p className="text-light/70 mb-8 max-w-2xl mx-auto">
              Download the app and experience the streaming platform with
              multi-language support, casting, and optimized video playback.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.qirat.sofa&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-orange-300 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGooglePlay size={24} />
                <span className="ml-2">Get it on Play Store</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-primary/3 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default SofaShowcaseSection;
