import { motion, AnimatePresence } from "framer-motion";
import { Search, SortAsc, SortDesc } from "lucide-react";

import { usePoemFilter } from "@/hooks/use-poem-filter";
import { ANIMATION_DURATIONS } from "@/lib/constants";
import { poemsData } from "@/data/poems";
import Navigation from "@/components/Navigation";
import PoemCard from "@/components/poem/PoemCard";
import FilterButton from "@/components/ui/FilterButton";

const Gallery = () => {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedSubCategory,
    setSelectedSubCategory,
    sortOrder,
    setSortOrder,
    categories,
    subCategories,
    filteredPoems,
  } = usePoemFilter({ poems: poemsData });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: ANIMATION_DURATIONS.slow,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-literary-gradient text-warm-ivory">
      <Navigation />

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.slow }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              <span className="bg-text-highlight bg-clip-text text-transparent">
                Poetry Gallery
              </span>
            </h1>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
              Explore a collection of poems that capture moments, emotions, and
              the beautiful complexity of human experience
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.2 }}
            className="mb-12 space-y-6"
          >
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-warm-gray"
                size={20}
              />
              <input
                type="text"
                placeholder="Search poems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-charcoal-slate/60 border border-literary-gold/30 rounded-full pl-12 pr-4 py-3 text-warm-ivory placeholder-warm-gray focus:outline-none focus:border-literary-gold transition-colors backdrop-blur-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-warm-gray flex items-center mr-2">
                  Category:
                </span>
                {categories.map((category) => (
                  <FilterButton
                    key={category}
                    label={category}
                    isSelected={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                    variant="gold"
                  />
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-warm-gray flex items-center mr-2">
                  Type:
                </span>
                {subCategories.map((subCategory) => (
                  <FilterButton
                    key={subCategory}
                    label={
                      subCategory === "named"
                        ? "Named"
                        : subCategory === "unnamed"
                        ? "Unnamed"
                        : "All"
                    }
                    isSelected={selectedSubCategory === subCategory}
                    onClick={() => setSelectedSubCategory(subCategory)}
                    variant="rose"
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <span className="text-sm text-warm-gray flex items-center mr-2">
                  Sort:
                </span>
                <FilterButton
                  label={
                    <div className="flex items-center">
                      <SortDesc size={14} className="mr-1" /> Newest
                    </div>
                  }
                  isSelected={sortOrder === "newest"}
                  onClick={() => setSortOrder("newest")}
                  variant="green"
                />
                <FilterButton
                  label={
                    <div className="flex items-center">
                      <SortAsc size={14} className="mr-1" /> Oldest
                    </div>
                  }
                  isSelected={sortOrder === "oldest"}
                  onClick={() => setSortOrder("oldest")}
                  variant="green"
                />
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
                  <PoemCard poem={poem} />
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
              <p className="text-2xl text-warm-gray">
                No poems found matching your criteria
              </p>
              <p className="text-warm-gray mt-2">
                Try adjusting your search or filters
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
