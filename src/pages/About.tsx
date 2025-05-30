import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import PhotoGallery from "@/components/PhotoGallery";
import { photos } from "@/data/about";

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
    <div className="min-h-screen bg-literary-gradient text-warm-ivory">
      <Navigation />

      <div className="pt-20 md:pt-24 pb-10 md:pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
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
                <span className="bg-text-highlight bg-clip-text text-transparent">
                  About the Poet
                </span>
              </h1>
              <p className="text-lg md:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
                None to call home, so i created one for myself, a place to be,
                to die.
              </p>
            </motion.div>

            {/* Main Content */}
            <motion.div variants={itemVariants} className="mb-10 md:mb-16">
              <div className="bg-charcoal-slate/40 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-literary-gold/30">
                <div className="prose prose-lg max-w-none text-soft-pearl">
                  <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl leading-relaxed mb-6 md:mb-8 font-light"
                  >
                    So, Welcome to my world of poetry, where words are more or
                    less a reflection of my sanity and insanity, a place where i
                    try to explain to you people, how i feel about you, your
                    world and the universe.
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 text-warm-gray"
                  >
                    My work dwells in the spaces between breath and silence,
                    where emotion bleeds into the void. I write from the marrow
                    of existence—the weight we carry and the quiet violence of
                    being. Each poem is a fragment pulled from depths where
                    certainty dissolves.
                  </motion.p>

                  <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg leading-relaxed text-warm-gray"
                  >
                    Through this platform i created, I invite you to experience
                    poetry not just as words on a page, but as an immersive
                    journey through emotion, thought, and the boundless
                    possibilities of human creativity.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Philosophy Section */}
            {/* <motion.div variants={itemVariants} className="mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-center">
                <span className="bg-text-highlight bg-clip-text text-transparent">
                  Writing Philosophy
                </span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-charcoal-slate/40 backdrop-blur-sm rounded-xl p-5 md:p-8 border border-literary-gold/30"
                >
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-literary-gold">
                    Authenticity
                  </h3>
                  <p className="text-warm-gray leading-relaxed text-sm md:text-base">
                    Every poem emerges from genuine experience, raw emotion, and
                    unfiltered truth. I believe in the power of vulnerability to
                    create connection across all boundaries.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-charcoal-slate/40 backdrop-blur-sm rounded-xl p-5 md:p-8 border border-champagne/30"
                >
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-champagne">
                    Innovation
                  </h3>
                  <p className="text-warm-gray leading-relaxed text-sm md:text-base">
                    Traditional forms meet contemporary expression. I experiment
                    with structure, rhythm, and digital presentation to push the
                    boundaries of what poetry can become.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-charcoal-slate/40 backdrop-blur-sm rounded-xl p-5 md:p-8 border border-sage-green/30"
                >
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-sage-green">
                    Accessibility
                  </h3>
                  <p className="text-warm-gray leading-relaxed text-sm md:text-base">
                    Poetry should speak to everyone. I strive to create work
                    that is both intellectually stimulating and emotionally
                    accessible to readers from all walks of life.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-charcoal-slate/40 backdrop-blur-sm rounded-xl p-5 md:p-8 border border-muted-rose/30"
                >
                  <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-muted-rose">
                    Evolution
                  </h3>
                  <p className="text-warm-gray leading-relaxed text-sm md:text-base">
                    Like life itself, poetry must evolve. Each piece represents
                    growth, learning, and the endless journey of understanding
                    ourselves and our world.
                  </p>
                </motion.div>
              </div>
            </motion.div> */}

            <PhotoGallery photos={photos} />

            {/* Contact Section */}
            <motion.div
              variants={itemVariants}
              className="text-center bg-charcoal-slate/40 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-literary-gold/30"
            >
              <h2 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6">
                <span className="bg-text-highlight bg-clip-text text-transparent">
                  Connect with Me
                </span>
              </h2>

              <p className="text-base md:text-lg text-warm-gray mb-6 md:mb-8 max-w-2xl mx-auto">
                I believe in the power of connection through shared words and
                experiences. Whether you're a fellow poet, a lover of
                literature, or simply someone moved by a verse, I'd love to hear
                from you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-gradient text-deep-midnight px-8 py-3 rounded-full font-medium transition-all duration-300"
                >
                  <a href="mailto:harshtanishq2002@gmail.com">Get in Touch</a>
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
