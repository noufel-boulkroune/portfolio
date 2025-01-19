import React from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.nav
      className="py-20 bg-gradient-to-bl from-dark via-black to-dark"
      // className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Nawfel Boulkroune
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-yellow-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="bg-black md:hidden border-t border-yellow-400 shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-6 text-yellow-400">
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
            <a href="#projects" className="hover:text-yellow-500">
              Projects
            </a>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
