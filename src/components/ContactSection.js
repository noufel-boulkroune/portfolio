import React, { useState, useRef } from "react";
import SectionHeader from "./ui/SectionHeader";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, Loader2, CheckCircle, XCircle, Download } from "lucide-react";
import { RESUME_URL } from "./HeroSection";
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
      value: "Algiers, Algeria",
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative pt-16 lg:pt-24 pb-10 bg-dark-100"
    >
      <div className="container relative z-10">
        {/* Header */}
        <SectionHeader index="06" label="Contact" title="Let's talk">
          Hiring for a mobile role or have a project to discuss? Email me,
          message me on LinkedIn, or use the form below.
        </SectionHeader>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="surface p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-light mb-6">Send a Message</h3>
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
                      className="w-full px-4 py-3.5 well border border-transparent rounded-xl text-light placeholder-light-300/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 hover:border-white/20 transition-all duration-300"
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
                      className="w-full px-4 py-3.5 well border border-transparent rounded-xl text-light placeholder-light-300/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
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
                    className="w-full px-4 py-3.5 well border border-transparent rounded-xl text-light placeholder-light-300/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 hover:border-white/20 transition-all duration-300"
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
                    placeholder="Tell me about the role or project..."
                    aria-required="true"
                    aria-describedby="message-description"
                    className="w-full px-4 py-3.5 well border border-transparent rounded-xl text-light placeholder-light-300/40 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 hover:border-white/20 transition-all duration-300 resize-none"
              />
              <span id="message-description" className="sr-only">Required field</span>
            </div>

                <motion.button
                  type="submit"
              disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
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
            className="lg:col-span-2 space-y-4 order-first"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                >
                  {info.href ? (
                    <motion.a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="surface spotlight flex items-center gap-4 p-4 !rounded-2xl group"
                    >
                      <div className="well w-12 h-12 rounded-xl flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
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
                      className="surface flex items-center gap-4 p-4 !rounded-2xl"
                    >
                      <div className="well w-12 h-12 rounded-xl flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-secondary" />
                      </div>
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

            {/* Resume */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full"
            >
              <Download className="w-5 h-5" aria-hidden="true" />
              Download Resume (PDF)
            </a>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-light-300/50 text-sm">
            © {new Date().getFullYear()} Nawfel Boulkroune. All rights reserved.
          </p>
          {/* <p className="text-light-300/30 text-xs mt-2">
            Built with React, Tailwind CSS & Framer Motion
          </p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
