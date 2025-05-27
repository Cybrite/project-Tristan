import { motion } from "framer-motion";
import { Poem } from "@/types/poem";
import { ANIMATION_DURATIONS } from "@/lib/constants";

interface PoemHeaderProps {
  poem: Poem;
  animationDelay?: number;
}

const PoemHeader = ({ poem, animationDelay = 0 }: PoemHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: ANIMATION_DURATIONS.slow, delay: animationDelay }}
      className="text-center mb-16"
    >
      <div className="flex items-center justify-center space-x-4 mb-6">
        <span className="text-sm text-literary-gold uppercase tracking-wider">
          {poem.category}
        </span>
        <span className="text-warm-gray">•</span>
        <span className="text-sm text-warm-gray">{poem.date}</span>
        <span className="text-warm-gray">•</span>
        <span className="text-sm text-warm-gray">{poem.readTime}</span>
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
  );
};

export default PoemHeader;
