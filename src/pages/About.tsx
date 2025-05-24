import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      <div className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-10 md:mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-serif mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About the Poet
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Where words meet wonder, and The poetic press find their voice
              </p>
            </motion.div>

            {/* Main Content */}
            <motion.div variants={itemVariants} className="mb-10 md:mb-16">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
                <div className="prose prose-lg max-w-none text-white/90">
                  <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl leading-relaxed mb-6 md:mb-8 font-light"
                  >
                    Welcome to my digital sanctuary of words, where poetry
                    transcends the traditional page and finds new life in the
                    realm of interactive storytelling. I am a poet fascinated by
                    the intersection of technology and timeless human emotions.
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-white/80"
                  >
                    My work explores the contemporary human experience through
                    the lens of both ancient wisdom and modern innovation. Each
                    piece is crafted to resonate across generations, bridging
                    the gap between traditional verse and digital expression.
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed text-white/80"
                  >
                    Through this platform, I invite you to experience poetry not
                    just as words on a page, but as an immersive journey through
                    emotion, thought, and the boundless possibilities of human
                    creativity.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Section */}
            <motion.div variants={itemVariants} className="mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Writing Philosophy
                </span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 md:p-8 border border-white/10"
                >
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-purple-400">
                    Authenticity
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    Every poem emerges from genuine experience, raw emotion, and
                    unfiltered truth. I believe in the power of vulnerability to
                    create connection across all boundaries.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 md:p-8 border border-white/10"
                >
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-purple-400">
                    Innovation
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    Traditional forms meet contemporary expression. I experiment
                    with structure, rhythm, and digital presentation to push the
                    boundaries of what poetry can become.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 md:p-8 border border-white/10"
                >
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-purple-400">
                    Accessibility
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    Poetry should speak to everyone. I strive to create work
                    that is both intellectually stimulating and emotionally
                    accessible to readers from all walks of life.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 md:p-8 border border-white/10"
                >
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-purple-400">
                    Evolution
                  </h3>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    Like life itself, poetry must evolve. Each piece represents
                    growth, learning, and the endless journey of understanding
                    ourselves and our world.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Connect with Me
                </span>
              </h2>

              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-2xl mx-auto">
                I believe in the power of connection through shared words and
                experiences. Whether you're a fellow poet, a lover of
                literature, or simply someone moved by a verse, I'd love to hear
                from you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  Get in Touch
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                >
                  Newsletter
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
