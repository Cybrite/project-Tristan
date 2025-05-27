import { motion } from "framer-motion";

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  variant?: "gold" | "rose" | "green";
}

const FilterButton = ({
  label,
  isSelected,
  onClick,
  variant = "gold",
}: FilterButtonProps) => {
  const variantStyles = {
    gold: {
      selected: "bg-literary-gold text-deep-midnight",
      hover: "hover:bg-literary-gold/20 hover:text-champagne",
    },
    rose: {
      selected: "bg-muted-rose text-warm-ivory",
      hover: "hover:bg-muted-rose/20 hover:text-champagne",
    },
    green: {
      selected: "bg-sage-green text-deep-charcoal",
      hover: "hover:bg-sage-green/20 hover:text-sage-green",
    },
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-all ${
        isSelected
          ? variantStyles[variant].selected
          : `bg-charcoal-slate/60 text-warm-gray ${variantStyles[variant].hover}`
      }`}
    >
      {label}
    </motion.button>
  );
};

export default FilterButton;
