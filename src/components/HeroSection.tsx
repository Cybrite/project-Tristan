import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentLine, setCurrentLine] = useState(0);

  const heroLines = [
    "An Ocean of words, waiting to be freed,",
    "But silence holds them, knowing the need.",
    "To keep the peace and spare the pain,",
    "Unspoken truths, quite refrain.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % heroLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
        >
          <span className="bg-text-highlight bg-clip-text text-transparent">
            To write
          </span>
          <br />
          <span className="text-warm-ivory">yet despise</span>
        </motion.h1>

        <div className="h-16 mb-12 flex items-center justify-center">
          <motion.p
            key={currentLine}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-2xl text-soft-pearl font-light italic"
          >
            {heroLines[currentLine]}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Link to="/gallery">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-gradient text-deep-midnight px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg border border-literary-gold/30 backdrop-blur-sm hover:shadow-literary-gold/30"
            >
              Explore The Poetic Press
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToContent}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-warm-gray hover:text-literary-gold transition-colors"
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
