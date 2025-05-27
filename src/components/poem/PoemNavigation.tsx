import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Poem } from "@/types/poem";
import { ROUTES, ANIMATION_DURATIONS } from "@/lib/constants";

interface PoemNavigationProps {
  prevPoem: Poem | null;
  nextPoem: Poem | null;
  animationDelay?: number;
}

const PoemNavigation = ({
  prevPoem,
  nextPoem,
  animationDelay = 0,
}: PoemNavigationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATIONS.slow, delay: animationDelay }}
      className="flex justify-between items-center"
    >
      {prevPoem ? (
        <Link to={ROUTES.poem(prevPoem.id)} className="group">
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

      <Link to={ROUTES.gallery}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-literary-gold hover:bg-champagne text-deep-midnight rounded-full transition-colors"
        >
          Back to Gallery
        </motion.button>
      </Link>

      {nextPoem ? (
        <Link to={ROUTES.poem(nextPoem.id)} className="group">
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
  );
};

export default PoemNavigation;
