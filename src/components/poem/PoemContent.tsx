import { motion, AnimatePresence } from "framer-motion";
import { ANIMATION_DURATIONS } from "@/lib/constants";

interface PoemContentProps {
  stanzas: string[][];
  currentStanza: number;
  isPlaying: boolean;
}

const PoemContent = ({
  stanzas,
  currentStanza,
  isPlaying,
}: PoemContentProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: ANIMATION_DURATIONS.normal,
        ease: "easeOut",
      },
    },
  };

  return (
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
              opacity: isPlaying ? (stanzaIndex <= currentStanza ? 1 : 0.3) : 1,
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
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {line}
              </motion.p>
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default PoemContent;
