import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Refs for focus management
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

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
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Failed to send the message", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Enter key to move to next field
  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter" && nextRef) {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "noufelboulkroune@gmail.com",
      href: "mailto:noufelboulkroune@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "nawfelboulkroune",
      href: "https://www.linkedin.com/in/nawfelboulkroune/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "noufel-boulkroune",
      href: "https://github.com/noufel-boulkroune",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Algeria",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div 
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.3, 0.5, 0.4, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-light">Let's Work </span>
            <span className="gradient-text-static">Together</span>
      </h2>

          <p className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Drop me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-dark-100 to-dark-200 rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl focus-within:border-primary/20 focus-within:ring-2 focus-within:ring-primary/10 focus-within:ring-offset-2 focus-within:ring-offset-dark transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="relative">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-light-300 mb-2"
                    >
                      First Name <span className="text-primary">*</span>
                    </label>
                <input
                      ref={firstNameRef}
                  type="text"
                      id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
                      required
                      placeholder="John"
                      aria-required="true"
                      aria-describedby="firstName-description"
                      className="w-full px-4 py-3.5 bg-dark-300/50 border border-white/10 rounded-xl text-light placeholder-light-300/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 hover:border-white/20 transition-all duration-300"
                />
                <span id="firstName-description" className="sr-only">Required field</span>
              </div>

                  {/* Last Name */}
                  <div className="relative">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-light-300 mb-2"
                    >
                      Last Name
                    </label>
                <input
                      ref={lastNameRef}
                  type="text"
                      id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                      onKeyDown={(e) => handleKeyDown(e, emailRef)}
                      placeholder="Doe"
                      className="w-full px-4 py-3.5 bg-dark-300/50 border border-white/10 rounded-xl text-light placeholder-light-300/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
            </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-light-300 mb-2"
                  >
                    Email Address <span className="text-primary">*</span>
                  </label>
              <input
                    ref={emailRef}
                type="email"
                    id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                    onKeyDown={(e) => handleKeyDown(e, messageRef)}
                    required
                    placeholder="john@example.com"
                    aria-required="true"
                    aria-describedby="email-description"
                    autoComplete="email"
                    className="w-full px-4 py-3.5 bg-dark-300/50 border border-white/10 rounded-xl text-light placeholder-light-300/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 hover:border-white/20 transition-all duration-300"
              />
              <span id="email-description" className="sr-only">Required field, must be a valid email address</span>
            </div>

                {/* Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-light-300 mb-2"
                  >
                    Your Message <span className="text-primary">*</span>
                  </label>
              <textarea
                    ref={messageRef}
                    id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    aria-required="true"
                    aria-describedby="message-description"
                    className="w-full px-4 py-3.5 bg-dark-300/50 border border-white/10 rounded-xl text-light placeholder-light-300/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 hover:border-white/20 transition-all duration-300 resize-none"
              />
              <span id="message-description" className="sr-only">Required field</span>
            </div>

                <motion.button
              type="submit"
              disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-dark font-semibold rounded-xl hover:shadow-glow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05, y: -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  aria-label={isSubmitting ? "Sending message" : "Submit contact form"}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      submitStatus === "success"
                        ? "bg-accent/10 border border-accent/20 text-accent"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                        <span>Failed to send message. Please try again or email me directly.</span>
                      </>
                    )}
                  </motion.div>
                )}
              </form>
        </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.1 * index, duration: 0.6 },
                    y: {
                      duration: 3 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    },
                  }}
                >
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-dark-100/50 rounded-xl border border-white/5 hover:border-primary/20 hover:bg-dark-100 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        <info.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-xs text-light-300/60 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-light font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ) : (
                    <motion.div 
                      className="flex items-center gap-4 p-4 bg-dark-100/50 rounded-xl border border-white/5"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center"
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3,
                        }}
                      >
                        <info.icon className="w-5 h-5 text-secondary" />
                      </motion.div>
                      <div>
                        <p className="text-xs text-light-300/60 uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-light font-medium">{info.value}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Availability Card */}
            <motion.div
              className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent">Available for hire</span>
              </div>
              <p className="text-light-300/70 text-sm">
                Currently open to freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your mobile app idea to life.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-light-300/50 text-sm">
            © {new Date().getFullYear()} Nawfel Boulkroune. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
