import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-bl from-dark via-black to-dark"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Get In Touch
        </h2>
        {/* className="w-full min-h-[600px] bg-dark rounded-xl shadow-lg overflow-hidden border-2 border-primary/20 hover:border-primary/60 transition-colors duration-300 transform hover:scale-105 transition-all" */}
        <div className="bg-black rounded-xl shadow-lg p-8 border-2 border-primary/20 hover:border-primary/60">
          <div className="flex flex-col space-y-6">
            <a
              href="mailto:noufelboulkroune@gmail.com"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail className="text-yellow-500" />
              <span className="text-white">noufelboulkroune@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nawfelboulkroune/"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="text-yellow-500" />
              <span className="text-white">LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/noufel-boulkroune"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Github className="text-yellow-500" />
              <span className="text-white">GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
