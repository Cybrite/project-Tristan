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
  animationDelay = 0,
}: PoemNavigationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATIONS.slow, delay: animationDelay }}
      className="flex justify-center items-center"
    >
      <Link to={ROUTES.gallery}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-literary-gold hover:bg-champagne text-deep-midnight rounded-full transition-colors"
        >
          Back to Gallery
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default PoemNavigation;
