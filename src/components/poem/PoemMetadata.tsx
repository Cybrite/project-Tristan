import { motion } from "framer-motion";
import { Poem } from "@/types/poem";
import { ANIMATION_DURATIONS } from "@/lib/constants";

interface PoemMetadataProps {
  poem: Poem;
  animationDelay?: number;
}

const PoemMetadata = ({ poem, animationDelay = 0 }: PoemMetadataProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATIONS.slow, delay: animationDelay }}
      className="bg-charcoal-slate/40 backdrop-blur-sm rounded-2xl p-8 border border-literary-gold/30 mb-12"
    >
      <div className="grid md:grid-cols-2 gap-6 text-center">
        <div>
          <h3 className="text-sm uppercase tracking-wider text-literary-gold mb-2">
            Category
          </h3>
          <p className="text-warm-gray">{poem.category}</p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-wider text-literary-gold mb-2">
            Reading Time
          </h3>
          <p className="text-warm-gray">{poem.readTime}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PoemMetadata;
