import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import LearningProjectsSection from "./components/LearningProjectsSection";
import projects from "./data/projectsData";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black text-yellow-400">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <ProjectsSection projects={projects} />
      <LearningProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
