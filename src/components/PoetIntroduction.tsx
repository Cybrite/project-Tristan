import { motion } from "framer-motion";

const PoetIntroduction = () => {
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
    <section className="py-16 md:py-24 px-4 md:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">
              <span className="bg-text-highlight bg-clip-text text-transparent">
                Meet the Poet
              </span>
            </h2>
            <div className="w-24 h-1 bg-accent-gradient mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-charcoal-slate/80 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-literary-gold/30 mb-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mx-auto md:mx-0"
              >
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-accent-gradient p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-deep-midnight to-charcoal-slate flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-serif text-warm-ivory">
                      <img
                        src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748366662/sr5z30021cb386aws3_vflppp.png"
                        alt="Poet's Profile"
                        width={200}
                        height={200}
                        className="rounded-full object-cover w-48 h-48 md:w-56 md:h-56"
                      />
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="md:col-span-2 space-y-4 md:space-y-6">
                <motion.h3
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-serif text-warm-ivory"
                >
                  Hello, I'm Sybrite.
                </motion.h3>

                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg leading-relaxed text-soft-pearl"
                >
                  Welcome to my digital sanctuary. Here, I share poetry and
                  reflections shaped by the people, places, and moments that
                  define my journey. Perhaps you’ll find a piece of yourself
                  within these words—explore and connect.
                </motion.p>

                <motion.p
                  variants={itemVariants}
                  className="text-base md:text-lg leading-relaxed text-warm-gray"
                >
                  Poetry began as a conversation with myself—an exploration of
                  thought and feeling. Now, it’s a bridge to others. Each poem
                  is a piece of my soul, inviting you to share in my journey.
                  May i have a moment of your time? I will not disappoint.
                </motion.p>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-3 pt-4"
                >
                  {["Contemporary Verse", "Free Form", "Narrative Poetry"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-deep-charcoal/60 rounded-full text-sm border border-literary-gold/40 text-champagne backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center bg-deep-charcoal/50 rounded-xl p-6 md:p-8 border border-literary-gold/40 backdrop-blur-sm shadow-xl"
          >
            <blockquote className="text-lg md:text-xl font-serif italic text-soft-pearl mb-4">
              "To see a world in a grain of sand, and a heaven in a wildflower.
              <br />
              Hold infinity in the palm of your hand, and eternity in an hour."
            </blockquote>
            <div className="w-16 h-0.5 bg-accent-gradient mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoetIntroduction;
