
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FloatingElements = () => {
  // Initialize with empty array and update after component mounts to avoid hydration issues
  const [elements, setElements] = useState([]);
  
  useEffect(() => {
    // Create elements only after component mounts to access window dimensions
    const elementsArray = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 30, // Smaller elements for mobile
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      duration: Math.random() * 20 + 10,
    }));
    setElements(elementsArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full opacity-10"
          style={{
            width: element.size,
            height: element.size,
            background: `radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(236, 72, 153, 0.1) 100%)`,
          }}
          initial={{
            x: element.initialX,
            y: element.initialY,
          }}
          animate={{
            x: element.initialX + (Math.random() - 0.5) * 200, // Reduced movement for mobile
            y: element.initialY + (Math.random() - 0.5) * 200,
            rotate: 360,
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
