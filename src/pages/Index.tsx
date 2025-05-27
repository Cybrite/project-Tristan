import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PoetIntroduction from "@/components/PoetIntroduction";
import FeaturedPoems from "@/components/FeaturedPoems";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-literary-gradient text-warm-ivory overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep-midnight"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-serif mb-4 bg-accent-gradient bg-clip-text text-transparent">
                The Poetic Press
              </div>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="h-0.5 bg-accent-gradient"
              />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <FloatingElements />
            <Navigation />
            <HeroSection />
            <PoetIntroduction />
            <FeaturedPoems />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
