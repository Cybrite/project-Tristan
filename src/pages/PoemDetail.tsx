
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { poemsData } from "@/data/poems";

const PoemDetail = () => {
  const { id } = useParams();
  const [currentStanza, setCurrentStanza] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const poem = poemsData.find(p => p.id === id);
  const currentIndex = poemsData.findIndex(p => p.id === id);
  const prevPoem = currentIndex > 0 ? poemsData[currentIndex - 1] : null;
  const nextPoem = currentIndex < poemsData.length - 1 ? poemsData[currentIndex + 1] : null;

  if (!poem) {
    return (
      <div className="min-h-screen bg-literary-gradient text-warm-ivory flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Poem not found</h1>
          <Link to="/gallery" className="text-literary-gold hover:text-champagne">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  // Split poem into stanzas
  const stanzas = poem.content.join('\n').split('\n\n').map(stanza => 
    stanza.split('\n').filter(line => line.trim() !== '')
  );

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStanza(prev => {
          if (prev < stanzas.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return 0;
          }
        });
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, stanzas.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-literary-gradient text-warm-ivory">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-sm text-literary-gold uppercase tracking-wider">
                {poem.category}
              </span>
              <span className="text-warm-gray">•</span>
              <span className="text-sm text-warm-gray">
                {poem.date}
              </span>
              <span className="text-warm-gray">•</span>
              <span className="text-sm text-warm-gray">
                {poem.readTime}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              <span className="bg-text-highlight bg-clip-text text-transparent">
                {poem.title}
              </span>
            </h1>
            
            {poem.inspiration && (
              <p className="text-lg text-warm-gray italic max-w-2xl mx-auto">
                "{poem.inspiration}"
              </p>
            )}
          </motion.div>

          {/* Reading Controls */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center space-x-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-6 py-3 rounded-full transition-all ${
                isPlaying 
                  ? "bg-muted-rose text-warm-ivory" 
                  : "bg-charcoal-slate/60 text-warm-gray hover:bg-literary-gold/20 hover:text-champagne"
              }`}
            >
              {isPlaying ? "Pause" : "Play"} Reading
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStanza(0)}
              className="px-6 py-3 rounded-full bg-charcoal-slate/60 text-warm-gray hover:bg-literary-gold/20 hover:text-champagne transition-all"
            >
              Reset
            </motion.button>
          </motion.div>

          {/* Poem Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="prose prose-lg max-w-none text-center mb-16"
          >
            <AnimatePresence mode="wait">
              {stanzas.map((stanza, stanzaIndex) => (
                <motion.div
                  key={stanzaIndex}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isPlaying ? (stanzaIndex <= currentStanza ? 1 : 0.3) : 1 
                  }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  {stanza.map((line, lineIndex) => (
                    <motion.p
                      key={lineIndex}
                      variants={lineVariants}
                      className="text-xl md:text-2xl font-light leading-relaxed text-soft-pearl mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif"
                      }}
                    >
                      {line}
                    </motion.p>
                  ))}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Poem Metadata */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-charcoal-slate/40 backdrop-blur-sm rounded-2xl p-8 border border-literary-gold/30 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-literary-gold mb-2">Mood</h3>
                <p className="text-warm-gray capitalize">{poem.mood}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-literary-gold mb-2">Category</h3>
                <p className="text-warm-gray">{poem.category}</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-literary-gold mb-2">Reading Time</h3>
                <p className="text-warm-gray">{poem.readTime}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-between items-center"
          >
            {prevPoem ? (
              <Link to={`/poem/${prevPoem.id}`} className="group">
                <motion.div
                  whileHover={{ x: -5 }}
                  className="flex items-center space-x-3 text-warm-gray hover:text-warm-ivory transition-colors"
                >
                  <ChevronLeft size={20} />
                  <div className="text-left">
                    <p className="text-sm text-literary-gold">Previous</p>
                    <p className="font-medium">{prevPoem.title}</p>
                  </div>
                </motion.div>
              </Link>
            ) : (
              <div />
            )}

            <Link to="/gallery">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-literary-gold hover:bg-champagne text-deep-midnight rounded-full transition-colors"
              >
                Back to Gallery
              </motion.button>
            </Link>

            {nextPoem ? (
              <Link to={`/poem/${nextPoem.id}`} className="group">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-warm-gray hover:text-warm-ivory transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm text-literary-gold">Next</p>
                    <p className="font-medium">{nextPoem.title}</p>
                  </div>
                  <ChevronRight size={20} />
                </motion.div>
              </Link>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PoemDetail;
