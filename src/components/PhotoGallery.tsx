import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  alt: string;
  caption: string;
  category: string;
  size: string;
  featured: boolean;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
  subtitle?: string;
}

const PhotoGallery = ({
  photos,
  title = "Visual Journey",
  subtitle = "Moments captured through the lens of poetry and life",
}: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Moments" },
    { id: "personal", label: "Personal" },
    { id: "events", label: "Events" },
    { id: "workshops", label: "Workshops" },
    { id: "normal", label: "General" },
  ];

  const filteredPhotos =
    filter === "all"
      ? photos
      : photos.filter((photo) => photo.category === filter);

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return;

    const currentIndex = filteredPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === filteredPhotos.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-16"
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            <span className="bg-text-highlight bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Filter Navigation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-500 ${
                filter === category.id
                  ? "bg-literary-gold text-deep-midnight shadow-xl shadow-literary-gold/25"
                  : "bg-charcoal-slate/50 text-warm-gray hover:bg-charcoal-slate/70 hover:text-warm-ivory"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-sm">{category.label}</span>
              <span className="ml-2 text-xs opacity-75">
                (
                {filter === category.id
                  ? filteredPhotos.length
                  : category.id === "all"
                  ? photos.length
                  : photos.filter((p) => p.category === category.id).length}
                )
              </span>

              {/* Animated background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-literary-gold/20 to-muted-rose/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                className="group relative"
              >
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-literary-gold/5 to-muted-rose/5 border border-literary-gold/10"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  {/* Image */}
                  <motion.img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder.jpg";
                    }}
                    whileHover={{ scale: 1.05 }}
                  />

                  {/* Featured Star */}
                  {photo.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute top-4 right-4 w-8 h-8 bg-literary-gold text-deep-midnight rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-10"
                    >
                      ★
                    </motion.div>
                  )}

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-deep-midnight/90 via-deep-midnight/20 to-transparent"
                  >
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-charcoal-slate/80 backdrop-blur-sm text-literary-gold text-xs px-3 py-1 rounded-full border border-literary-gold/30">
                        {photo.category}
                      </span>
                    </div>

                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-warm-ivory font-medium text-sm mb-2 line-clamp-2">
                          {photo.caption}
                        </h3>
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: "3rem" }}
                          className="h-0.5 bg-literary-gold rounded-full"
                          transition={{ duration: 0.4, delay: 0.2 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Click indicator */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-12 h-12 bg-literary-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-literary-gold/30">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-literary-gold rounded-full"
                      />
                    </div>
                  </motion.div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-literary-gold/30 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filteredPhotos.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-charcoal-slate/40 rounded-full flex items-center justify-center">
                <span className="text-warm-gray text-2xl">📷</span>
              </div>
              <p className="text-warm-gray text-lg">
                No images found in this category
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-charcoal-slate/30 backdrop-blur-sm rounded-full border border-literary-gold/20">
            <span className="text-literary-gold text-sm font-medium">
              ★ Featured: {photos.filter((p) => p.featured).length}
            </span>
            <span className="w-1 h-1 bg-warm-gray/50 rounded-full" />
            <span className="text-warm-gray text-sm">
              Total: {filteredPhotos.length} images
            </span>
            <span className="w-1 h-1 bg-warm-gray/50 rounded-full" />
            <span className="text-warm-gray text-sm">Click to explore</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-deep-midnight/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full bg-charcoal-slate/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-literary-gold/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-deep-midnight/80 to-transparent p-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => navigatePhoto("prev")}
                  className="p-2 bg-charcoal-slate/60 hover:bg-charcoal-slate/80 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-literary-gold" />
                </button>
                <button
                  onClick={() => navigatePhoto("next")}
                  className="p-2 bg-charcoal-slate/60 hover:bg-charcoal-slate/80 rounded-full transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-literary-gold" />
                </button>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 bg-charcoal-slate/60 hover:bg-charcoal-slate/80 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-literary-gold" />
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-midnight/90 to-transparent p-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-medium text-warm-ivory mb-2">
                  {selectedPhoto.caption}
                </h3>
                <p className="text-warm-gray text-sm">
                  {selectedPhoto.category.charAt(0).toUpperCase() +
                    selectedPhoto.category.slice(1)}{" "}
                  •{" "}
                  {filteredPhotos.findIndex((p) => p.id === selectedPhoto.id) +
                    1}{" "}
                  of {filteredPhotos.length}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default PhotoGallery;
