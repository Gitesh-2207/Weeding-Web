import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FloralGarland } from './common/DecorativeElements';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const resolveImage = (path) => {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
};

export const WeddingGallery = ({ data, t, lang }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const galleryLength = data?.gallery?.length || 0;

  const openLightbox = useCallback((index) => {
    setSelectedImageIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev !== null && galleryLength > 0 ? (prev - 1 + galleryLength) % galleryLength : null));
  }, [galleryLength]);

  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedImageIndex((prev) => (prev !== null && galleryLength > 0 ? (prev + 1) % galleryLength : null));
  }, [galleryLength]);

  // Lock background scrolling while lightbox modal is active to prevent page scroll
  useEffect(() => {
    if (selectedImageIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedImageIndex]);

  // Keyboard navigation for Lightbox (Arrow keys & Escape)
  useEffect(() => {
    if (selectedImageIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, prevImage, nextImage]);

  return (
    <section id="gallery" className="py-8 sm:py-12 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFF9EF] to-[#F8F1E3]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
          {/* Main Heading: Glimpses of Heritage & Romance */}
          <h2 className="text-3xl sm:text-5xl font-playfair font-semibold text-royal-brown tracking-wide">
            {t.gallery.title}
          </h2>

          {/* Floral garland divider */}
          <FloralGarland className="mt-4 sm:mt-5" />
        </div>

        {/* Gallery Grid - Sized with refined, compact proportions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto">
          {data.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden cursor-pointer border border-gold/50 shadow-royal hover:shadow-gold-glow bg-cream-50 transition-all duration-500"
            >
              <img
                src={resolveImage(item.image)}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  if (!e.currentTarget.src.endsWith(item.image)) {
                    e.currentTarget.src = item.image;
                  }
                }}
              />

              {/* Elegant Gold Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#42362C]/90 via-[#42362C]/30 to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Shimmer Border on Hover */}
              <div className="absolute inset-2.5 border border-gold/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Top-Right Quick View Pill */}
              <div className="absolute top-3 right-3 z-20">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openLightbox(index);
                  }}
                  className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/65 hover:bg-burgundy text-[#FFF9EF] text-[11px] font-serif border border-gold/40 shadow-sm transition-colors duration-200 cursor-pointer"
                  aria-label={`View photo: ${item.title}`}
                >
                  <Eye className="w-3 h-3 text-gold-light" />
                  <span>{t?.gallery?.view || "View"}</span>
                </button>
              </div>

              {/* Title and Category */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-[#FFF9EF] z-10 pointer-events-none">
                <span className="text-[10px] font-serif uppercase tracking-[0.2em] text-gold-light font-semibold mb-0.5">
                  {lang === 'hi' ? (item.categoryHi || item.category) : item.category}
                </span>
                <h4 className="text-lg sm:text-xl font-playfair font-semibold text-white tracking-wide">
                  {lang === 'hi' ? (item.titleHi || item.title) : item.title}
                </h4>

                <div className="mt-2.5 flex items-center space-x-1.5 text-xs text-gold-light">
                  <Eye className="w-3.5 h-3.5 text-gold" />
                  <span className="font-serif tracking-wider text-[11px] uppercase">
                    {t.gallery.viewDetails || 'Click to view'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal - Mounted to body via React Portal for true viewport positioning with NO scroll */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedImageIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeLightbox}
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-between p-3 sm:p-5 md:p-6 bg-black/40 backdrop-blur-md select-none overflow-hidden"
                role="dialog"
                aria-modal="true"
                aria-label={data.gallery[selectedImageIndex].title}
              >
                {/* Top Bar with Category, Counter & Close Button */}
                <div
                  className="w-full max-w-5xl flex items-center justify-between z-30 pt-1 pb-2 px-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center space-x-2 text-white/85">
                    <span className="text-xs sm:text-sm font-serif tracking-[0.2em] uppercase text-[#E8A84E] font-medium">
                      {lang === 'hi' ? (data.gallery[selectedImageIndex].categoryHi || data.gallery[selectedImageIndex].category) : data.gallery[selectedImageIndex].category}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-xs sm:text-sm font-serif text-white/70">
                      {selectedImageIndex + 1} {t?.gallery?.of || "of"} {data.gallery.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-[#E8A84E] text-white hover:text-royal-brown transition-all duration-200 border border-white/20 hover:border-[#E8A84E] shadow-md cursor-pointer flex items-center justify-center"
                    aria-label={t.gallery.close || 'Close photo view'}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Central Photo View Area with Left/Right Arrows */}
                <div
                  className="relative flex-1 min-h-0 w-full max-w-5xl flex items-center justify-center my-auto px-2 sm:px-12"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Prev Navigation Button */}
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-[#E8A84E] text-white hover:text-royal-brown transition-all duration-200 border border-[#E8A84E]/50 shadow-lg cursor-pointer flex items-center justify-center"
                    aria-label={t?.gallery?.prevImage || "Previous image"}
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Full Image Container - Scaled to fit screen cleanly without scrolling */}
                  <img
                    key={selectedImageIndex}
                    src={resolveImage(data.gallery[selectedImageIndex].image)}
                    alt={data.gallery[selectedImageIndex].title}
                    className="max-w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[78vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-[#E8A84E]/40"
                    onError={(e) => {
                      if (!e.currentTarget.src.endsWith(data.gallery[selectedImageIndex].image)) {
                        e.currentTarget.src = data.gallery[selectedImageIndex].image;
                      }
                    }}
                  />

                  {/* Next Navigation Button */}
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/70 hover:bg-[#E8A84E] text-white hover:text-royal-brown transition-all duration-200 border border-[#E8A84E]/50 shadow-lg cursor-pointer flex items-center justify-center"
                    aria-label={t?.gallery?.nextImage || "Next image"}
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Bottom Title Bar */}
                <div
                  className="w-full max-w-3xl text-center py-2 px-4 z-30"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 className="text-lg sm:text-2xl font-playfair font-semibold text-white tracking-wide">
                    {lang === 'hi' ? (data.gallery[selectedImageIndex].titleHi || data.gallery[selectedImageIndex].title) : data.gallery[selectedImageIndex].title}
                  </h3>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
};
