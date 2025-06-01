import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  alt: string;
  caption: string;
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
  title = "My Beacons of Hope",
  subtitle = "Few people who are still shine bright in my eyes, my beacons of hope.",
}: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const sortedPhotos = [...photos].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return;

    const currentIndex = sortedPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? sortedPhotos.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === sortedPhotos.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedPhoto(sortedPhotos[newIndex]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-16"
      >
        <div className="text-center mb-6 md:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 md:mb-4">
            <span className="bg-text-highlight bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-base sm:text-lg text-warm-gray max-w-2xl mx-auto px-4">
            {subtitle}
          </p>
        </div>

        <motion.div layout className="relative px-2 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {sortedPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                className="group relative"
              >
                <div
                  className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-literary-gold/5 to-muted-rose/5 border border-literary-gold/10 touch-manipulation"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <motion.img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-active:scale-95"
                    onError={(e) => {
                      e.currentTarget.src = "/images/placeholder.jpg";
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  />

                  {photo.featured && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="absolute top-2 sm:top-4 right-2 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-literary-gold text-deep-midnight rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg z-10"
                    >
                      ★
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-deep-midnight/90 via-deep-midnight/20 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300"
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        className="group-active:opacity-100 group-active:translate-y-0"
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-warm-ivory font-medium text-xs sm:text-sm mb-2 line-clamp-2">
                          {photo.caption}
                        </h3>
                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: "2rem" }}
                          className="h-0.5 bg-literary-gold rounded-full group-active:w-8"
                          transition={{ duration: 0.4, delay: 0.2 }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-literary-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-literary-gold/30">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-literary-gold rounded-full"
                      />
                    </div>
                  </motion.div>

                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-literary-gold/30 group-active:border-literary-gold/50 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 text-center px-2"
        >
          <div className="inline-flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2 sm:py-3 bg-charcoal-slate/30 backdrop-blur-sm rounded-full border border-literary-gold/20 text-xs sm:text-sm">
            <span className="text-literary-gold font-medium">
              ★ Featured: {sortedPhotos.filter((p) => p.featured).length}
            </span>
            <span className="w-1 h-1 bg-warm-gray/50 rounded-full" />
            <span className="text-warm-gray">Total: {sortedPhotos.length}</span>
          </div>
        </motion.div>
      </motion.div>

      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-deep-midnight/95 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-[95vh] sm:max-h-[90vh] w-full bg-charcoal-slate/40 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-literary-gold/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-deep-midnight/80 to-transparent p-3 sm:p-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => navigatePhoto("prev")}
                  className="p-2 sm:p-2 bg-charcoal-slate/60 hover:bg-charcoal-slate/80 rounded-full transition-colors touch-manipulation"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-literary-gold" />
                </button>
                <button
                  onClick={() => navigatePhoto("next")}
                  className="p-2 sm:p-2 bg-charcoal-slate/60 hover:bg-charcoal-slate/80 rounded-full transition-colors touch-manipulation"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-literary-gold" />
                </button>
              </div>

              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 sm:p-2 bg-charcoal-slate/60 hover:bg-charcoal-slate/80 rounded-full transition-colors touch-manipulation"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-literary-gold" />
              </button>
            </div>

            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-midnight/90 to-transparent p-4 sm:p-6">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-lg sm:text-xl font-medium text-warm-ivory mb-2 line-clamp-2">
                  {selectedPhoto.caption}
                </h3>
                <p className="text-warm-gray text-sm">
                  {sortedPhotos.findIndex((p) => p.id === selectedPhoto.id) + 1}{" "}
                  of {sortedPhotos.length}
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
