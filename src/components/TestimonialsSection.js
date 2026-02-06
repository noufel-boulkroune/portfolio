import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Ben",
    role: "CEO",
    company: "Mziya",
    image: "/images/myImage.jpg", // You can replace with actual client image
    content: "Nawfel delivered exceptional work on our delivery app. His ability to quickly understand requirements and implement complex features like payment integration and real-time tracking was impressive. The Stripe fix alone saved us 15% in costs!",
    rating: 5,
    project: "Package Delivery Platform"
  },
  {
    id: 2,
    name: "Karim S.",
    role: "Founder",
    company: "Snay3i",
    image: "/images/myImage.jpg",
    content: "Working with Nawfel was a great experience. He built our entire job marketplace app from scratch - from translating Figma designs to implementing Firebase backend and Google Maps. The multi-language support he added helped us reach more users.",
    rating: 5,
    project: "Job Marketplace App"
  },
  {
    id: 3,
    name: "Mohamed L.",
    role: "Product Manager",
    company: "Azougui",
    image: "/images/myImage.jpg",
    content: "Nawfel helped us launch our grocery app on both iOS and Android stores successfully. His attention to detail in localization for our market and the smooth authentication flow he implemented significantly improved our user onboarding.",
    rating: 5,
    project: "Grocery Delivery App"
  },
  {
    id: 4,
    name: "Youssef A.",
    role: "CTO",
    company: "Laffaiire",
    image: "/images/myImage.jpg",
    content: "The migration to Flutter 3.x and null safety that Nawfel handled was seamless. He also helped us launch a separate tech marketplace app with proper environment management. His code quality and documentation are excellent.",
    rating: 5,
    project: "E-commerce Apps"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="relative bg-gradient-to-br from-dark-100 to-dark-200 rounded-3xl p-8 border border-white/5"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Quote className="w-6 h-6 text-primary/40" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-light-300/90 text-lg leading-relaxed mb-8">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary p-0.5">
          <div className="w-full h-full rounded-full bg-dark-200 flex items-center justify-center text-lg font-bold text-light">
            {testimonial.name.charAt(0)}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-light">{testimonial.name}</h4>
          <p className="text-sm text-light-300/60">
            {testimonial.role} at {testimonial.company}
          </p>
          <span className="inline-block mt-1 px-2 py-0.5 rounded bg-primary/10 text-primary text-xs">
            {testimonial.project}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <motion.div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
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
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          {/*
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 mb-6"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Client Feedback
          </motion.span>
          */}

          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-light">What Clients </span>
            <span className="gradient-text-static">Say About Me</span>
          </motion.h2>

          <motion.p 
            className="text-light-300/70 max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Don't just take my word for it. Here's what my clients have to say 
            about working together on their mobile app projects.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <TestimonialCard 
                key={currentIndex} 
                testimonial={testimonials[currentIndex]} 
              />
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-dark-200/80 border border-white/10 flex items-center justify-center text-light hover:border-primary/30 hover:text-primary transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? "bg-primary w-6" 
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-dark-200/80 border border-white/10 flex items-center justify-center text-light hover:border-primary/30 hover:text-primary transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "100%", label: "On-Time Delivery" },
              { value: "4+", label: "Happy Clients" },
              { value: "5+", label: "5-Star Reviews" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 rounded-xl bg-dark-200/30 border border-white/5"
              >
                <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-xs text-light-300/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
