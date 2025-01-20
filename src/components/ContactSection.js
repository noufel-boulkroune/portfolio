import React, { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      to_email: formData.email,
    };

    try {
      await emailjs.send(service_id, template_id, templateParams, user_id);

      setSuccessMessage("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send the message", error);
      setErrorMessage("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 relative bg-gradient-to-bl from-dark via-black to-dark"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent">
        GET IN TOUCH
      </h2>
      <div className="container mx-auto px-4 sm:px-16 md:px-8 lg:px-32 max-w-1xl">
        {/* Contact form */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/10 mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            LET'S GET IN TOUCH!
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary"
                  placeholder="Enter your First Name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary"
                  placeholder="Enter your Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-white mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary"
                placeholder="Enter your E-mail"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-primary"
                placeholder="Enter your message..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-32 mx-auto block py-3 px-6 bg-primary text-black rounded-lg hover:bg-yellow-400 transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>

          {/* Feedback Messages */}
          {successMessage && (
            <p className="text-green-500 text-center mt-4">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-center mt-4">{errorMessage}</p>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          <a
            href="mailto:noufelboulkroune@gmail.com"
            className="p-3 border border-primary rounded-full hover:bg-primary/10 transition-colors"
          >
            <Mail className="w-6 h-6 text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/nawfelboulkroune/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-primary rounded-full hover:bg-primary/10 transition-colors"
          >
            <Linkedin className="w-6 h-6 text-primary" />
          </a>
          <a
            href="https://github.com/noufel-boulkroune"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-primary rounded-full hover:bg-primary/10 transition-colors"
          >
            <Github className="w-6 h-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
