import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { poemsData } from "@/data/poems";

const FeaturedPoems = () => {
  const featuredPoems = poemsData.slice(0, 3);

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
    hidden: { opacity: 0, y: 50 },
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
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            <span className="bg-text-highlight bg-clip-text text-transparent">
              Featured The Poetic Press
            </span>
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Journey through curated pieces that capture the essence of human
            experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {featuredPoems.map((poem, index) => (
            <motion.div
              key={poem.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/poem/${poem.id}`}>
                <div className="bg-charcoal-slate/60 backdrop-blur-sm rounded-2xl p-8 h-full border border-literary-gold/40 hover:border-literary-gold/80 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-literary-gold/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-literary-gold uppercase tracking-wider font-medium">
                      {poem.category}
                    </span>
                    <span className="text-sm text-warm-gray">
                      {poem.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif mb-4 group-hover:text-champagne transition-colors text-warm-ivory">
                    {poem.title}
                  </h3>

                  <p className="text-warm-gray mb-6 leading-relaxed">
                    {poem.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-warm-gray">{poem.date}</span>

                    <motion.div
                      className="text-literary-gold group-hover:translate-x-2 transition-transform"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-literary-gold text-literary-gold hover:bg-accent-gradient hover:text-deep-midnight px-8 py-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              View All Poems
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPoems;
