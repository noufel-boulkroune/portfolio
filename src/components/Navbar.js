import React from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.nav
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Nawfel Boulkroune
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
