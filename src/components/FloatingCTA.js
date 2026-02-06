import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Briefcase } from "lucide-react";

const FloatingCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (about 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const actions = [
    {
      icon: Mail,
      label: "Send Message",
      description: "Quick response",
      href: "#contact",
      color: "from-primary/20 to-cyan-500/20",
      iconColor: "text-primary"
    },
    {
      icon: Briefcase,
      label: "View Services",
      description: "What I offer",
      href: "#services",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
          )}

          {/* Floating Menu */}
          <motion.div
            className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Action Buttons */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="flex flex-col gap-3 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  {actions.map((action, index) => (
                    <motion.a
                      key={action.label}
                      href={action.href}
                      target={action.href.startsWith("http") ? "_blank" : undefined}
                      rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-3 px-4 py-3 bg-dark-100/95 backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/30 transition-all group`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center ${action.iconColor}`}>
                        <action.icon className="w-5 h-5" />
                      </div>
                      <div className="text-right">
                        <div className="text-light font-medium text-sm">{action.label}</div>
                        <div className="text-light-300/50 text-xs">{action.description}</div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                isOpen 
                  ? "bg-dark-200 border border-white/10 text-light rotate-45" 
                  : "bg-gradient-to-r from-primary to-primary/80 text-dark shadow-glow"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: isOpen 
                  ? "none" 
                  : "0 0 30px rgba(0, 212, 255, 0.4)"
              }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MessageCircle className="w-6 h-6" />
              )}
            </motion.button>

            {/* Pulse animation when closed */}
            {!isOpen && (
              <motion.div
                className="absolute inset-0 rounded-full bg-primary"
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
