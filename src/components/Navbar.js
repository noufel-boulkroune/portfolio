import React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.nav
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Nawfel Boulkroune
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="bg-white md:hidden border-t shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-6">
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
