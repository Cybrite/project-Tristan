import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Poem } from "@/types/poem";
import { ROUTES } from "@/lib/constants";

interface PoemCardProps {
  poem: Poem;
}

const PoemCard = ({ poem }: PoemCardProps) => {
  return (
    <Link to={ROUTES.poem(poem.id)}>
      <div className="bg-charcoal-slate/40 backdrop-blur-sm rounded-2xl p-8 h-full border border-literary-gold/30 hover:border-literary-gold/60 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-literary-gold uppercase tracking-wider">
            {poem.category}
          </span>
          <span className="text-sm text-warm-gray">{poem.readTime}</span>
        </div>

        <h3 className="text-2xl font-serif mb-4 group-hover:text-champagne transition-colors text-warm-ivory">
          {poem.title}
        </h3>

        <p className="text-warm-gray mb-6 leading-relaxed">{poem.excerpt}</p>

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
  );
};

export default PoemCard;
