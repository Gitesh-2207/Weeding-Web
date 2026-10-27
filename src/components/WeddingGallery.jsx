import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloralGarland } from './common/DecorativeElements';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const WeddingGallery = ({ data, t }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + data.gallery.length) % data.gallery.length);
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % data.gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFF9EF] to-[#F8F1E3]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-cream-50 border border-gold/40 shadow-sm mb-3">
            <Camera className="w-3.5 h-3.5 text-gold-dark" />
            <span className="text-xs font-serif tracking-[0.25em] uppercase text-burgundy font-semibold">
              {t.gallery.heading}
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
            {t.gallery.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg font-cormorant italic text-royal-brown/85">
            "{t.gallery.desc}"
          </p>

          <FloralGarland className="mt-4" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              onClick={() => openLightbox(index)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-gold/40 shadow-royal bg-cream-50"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
              />

              {/* Elegant Gold Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#42362C]/90 via-[#42362C]/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Shimmer Border */}
              <div className="absolute inset-3 border border-gold/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Caption and Category */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-[#FFF9EF] z-10">
                <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-gold-light font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="text-xl font-playfair font-semibold text-white tracking-wide">
                  {item.title}
                </h4>
                <p className="text-xs font-cormorant italic text-white/90 mt-1 line-clamp-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {item.caption}
                </p>

                <div className="mt-3 flex items-center space-x-1.5 text-xs text-gold-light opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5" />
                  <span className="font-serif tracking-wider text-[11px] uppercase">
                    {t.gallery.viewDetails}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-md select-none"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-cream-card rounded-2xl border-2 border-gold/70 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-burgundy/90 text-[#FFF9EF] hover:bg-burgundy transition-colors shadow-md"
                aria-label={t.gallery.close}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-burgundy text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/50 hover:bg-burgundy text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <div className="max-h-[70vh] sm:max-h-[75vh] overflow-hidden flex items-center justify-center bg-black/5">
                <img
                  src={data.gallery[selectedImageIndex].image}
                  alt={data.gallery[selectedImageIndex].title}
                  className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] object-contain"
                />
              </div>

              {/* Caption Area */}
              <div className="p-6 bg-cream-50 border-t border-gold/30 text-center">
                <span className="text-xs font-serif uppercase tracking-[0.2em] text-gold-dark font-medium">
                  {data.gallery[selectedImageIndex].category} • {selectedImageIndex + 1} of {data.gallery.length}
                </span>
                <h3 className="text-2xl font-playfair font-semibold text-burgundy mt-1">
                  {data.gallery[selectedImageIndex].title}
                </h3>
                <p className="mt-1 text-sm font-cormorant italic text-royal-brown">
                  "{data.gallery[selectedImageIndex].caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
