
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import { poemsData } from "@/data/poems";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMood, setSelectedMood] = useState("All");

  const categories = ["All", ...new Set(poemsData.map(poem => poem.category))];
  const moods = ["All", ...new Set(poemsData.map(poem => poem.mood))];

  const filteredPoems = poemsData.filter(poem => {
    const matchesSearch = poem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         poem.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || poem.category === selectedCategory;
    const matchesMood = selectedMood === "All" || poem.mood === selectedMood;
    
    return matchesSearch && matchesCategory && matchesMood;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Poetry Gallery
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Explore a collection of verses that capture moments, emotions, and the beautiful complexity of human experience
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
              <input
                type="text"
                placeholder="Search poems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-full pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            {/* Category and Mood Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-white/60 flex items-center mr-2">Category:</span>
                {categories.map(category => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedCategory === category
                        ? "bg-purple-600 text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-white/60 flex items-center mr-2">Mood:</span>
                {moods.map(mood => (
                  <motion.button
                    key={mood}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedMood(mood)}
                    className={`px-4 py-2 rounded-full text-sm transition-all ${
                      selectedMood === mood
                        ? "bg-pink-600 text-white"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {mood}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Poems Grid */}
          <AnimatePresence>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPoems.map((poem) => (
                <motion.div
                  key={poem.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link to={`/poem/${poem.id}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-purple-400 uppercase tracking-wider">
                          {poem.category}
                        </span>
                        <span className="text-sm text-white/50">
                          {poem.readTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-serif mb-4 group-hover:text-purple-400 transition-colors">
                        {poem.title}
                      </h3>
                      
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {poem.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-white/50">
                            {poem.date}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            poem.mood === 'contemplative' ? 'bg-blue-500/20 text-blue-300' :
                            poem.mood === 'peaceful' ? 'bg-green-500/20 text-green-300' :
                            poem.mood === 'introspective' ? 'bg-purple-500/20 text-purple-300' :
                            poem.mood === 'nostalgic' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-pink-500/20 text-pink-300'
                          }`}>
                            {poem.mood}
                          </span>
                        </div>
                        
                        <motion.div
                          className="text-purple-400 group-hover:translate-x-2 transition-transform"
                          whileHover={{ x: 5 }}
                        >
                          →
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPoems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-2xl text-white/60">No poems found matching your criteria</p>
              <p className="text-white/40 mt-2">Try adjusting your search or filters</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
