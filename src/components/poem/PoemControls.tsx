import { motion } from "framer-motion";
import { ANIMATION_DURATIONS } from "@/lib/constants";

interface PoemControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  animationDelay?: number;
}

const PoemControls = ({
  isPlaying,
  onTogglePlay,
  onReset,
  animationDelay = 0,
}: PoemControlsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: ANIMATION_DURATIONS.slow, delay: animationDelay }}
      className="flex justify-center space-x-4 mb-12"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onTogglePlay}
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
        onClick={onReset}
        className="px-6 py-3 rounded-full bg-charcoal-slate/60 text-warm-gray hover:bg-literary-gold/20 hover:text-champagne transition-all"
      >
        Reset
      </motion.button>
    </motion.div>
  );
};

export default PoemControls;
