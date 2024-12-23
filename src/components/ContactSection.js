import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex flex-col space-y-6">
            <a
              href="https://github.com/noufel-boulkroune"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Mail className="text-blue-600" />
              <span>noufelboulkroune@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nawfelboulkroune/"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Linkedin className="text-blue-600" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com"
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Github className="text-blue-600" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
