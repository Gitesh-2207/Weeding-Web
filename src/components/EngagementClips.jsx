import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, Clock, Sparkles, Camera, Eye, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { CornerFlourish, FloralGarland } from './common/DecorativeElements';

// Stable default fallbacks outside component to optimize memoization and prevent re-evaluations
const DEFAULT_PHOTOS = [
  {
    id: "photo-1",
    title: "The Palace Twilight",
    caption: "Hand in hand beneath the royal arches",
    image: "/images/engagement-photo-4.jpeg",
    aspect: "portrait",
  },
  {
    id: "photo-2",
    title: "The Beautiful Yes",
    caption: "The ring ceremony & an eternal promise",
    image: "/images/engagement-photo-1.jpeg",
    aspect: "portrait",
  },
  {
    id: "photo-3",
    title: "Under The Canopy of Lights",
    caption: "Laughter, music & twilight celebration",
    image: "/images/engagement-photo-2.jpeg",
    aspect: "portrait",
  },
  {
    id: "photo-4",
    title: "Whispers of Forever",
    caption: "Petals shower & boundless joy",
    image: "/images/engagement-photo-3.jpeg",
    aspect: "portrait",
  },
];

const DEFAULT_VIDEO = {
  id: "clip-main",
  title: "The Beautiful Yes",
  subtitle: "Official Engagement Film • Ring Ceremony & Eternal Promise",
  tag: "ENGAGEMENT FILM",
  duration: "0:17",
  thumbnail: "/images/engagement-photo-1.jpeg",
  videoUrl: "/engclip.mp4",
};

export const EngagementClips = ({ data }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoRef = useRef(null);
  const inlineVideoRef = useRef(null);

  // Engagement photos and video
  const photos = data?.engagement?.photos || DEFAULT_PHOTOS;
  const video = data?.engagement?.video || DEFAULT_VIDEO;

  // Preload all engagement images on mount for instant rendering and faster viewing
  useEffect(() => {
    photos.forEach((p) => {
      if (p?.image) {
        const img = new Image();
        img.src = p.image;
      }
    });
    if (video?.thumbnail) {
      const vThumb = new Image();
      vThumb.src = video.thumbnail;
    }
  }, [photos, video]);

  const handleCloseVideoModal = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
  }, []);

  const handleClosePhotoModal = useCallback(() => {
    setActivePhoto(null);
  }, []);

  const handlePrevPhoto = useCallback((e) => {
    if (e) e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === activePhoto.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setActivePhoto(photos[prevIndex]);
  }, [activePhoto, photos]);

  const handleNextPhoto = useCallback((e) => {
    if (e) e.stopPropagation();
    if (!activePhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === activePhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setActivePhoto(photos[nextIndex]);
  }, [activePhoto, photos]);

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedVideo) handleCloseVideoModal();
        if (activePhoto) handleClosePhotoModal();
      } else if (e.key === 'ArrowLeft' && activePhoto) {
        handlePrevPhoto();
      } else if (e.key === 'ArrowRight' && activePhoto) {
        handleNextPhoto();
      }
    };

    if (selectedVideo || activePhoto) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedVideo, activePhoto, handleCloseVideoModal, handleClosePhotoModal, handlePrevPhoto, handleNextPhoto]);

  return (
    <section
      id="engagement"
      className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFFDF9] to-[#F8F1E3] overflow-hidden"
    >
      {/* Ambient Warm Golden Glows in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#D4A853]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C5A15A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ========================================================================= */}
        {/* 1. ENGAGEMENT HEADING & ROMANTIC STORYTELLING TEXT                        */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          {/* Top Label */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cream-50 border border-[#D4A853]/50 shadow-xs mb-4">
            <Film className="w-3.5 h-3.5 text-[#D4A853]" />
            <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#84662B] font-semibold">
              BEFORE THE WEDDING BELLS…
            </span>
          </div>

          {/* Delicate Golden Divider */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4A853]" />
            <span className="text-xs text-burgundy">♦</span>
            <span className="text-xs text-[#D4A853]">❧</span>
            <span className="text-xs text-burgundy">♦</span>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4A853]" />
          </div>

          {/* Main Storytelling Poetry */}
          <div className="space-y-2.5 sm:space-y-3 font-playfair text-2xl sm:text-3xl md:text-4xl text-burgundy font-medium leading-tight sm:leading-snug">
            <p className="text-royal-brown/90">There was a moment.</p>
            <p className="text-royal-brown/90">There was a promise.</p>
            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="text-royal-brown/95">There was a beautiful</span>
              <span className="font-playfair italic font-bold text-3xl sm:text-4xl md:text-5xl text-[#D4A853] drop-shadow-sm tracking-wide inline-block transform hover:scale-105 transition-transform duration-300">
                YES.
              </span>
            </div>
          </div>

          {/* Emotional Subtext with Animated Heart */}
          <div className="mt-6 pt-5 border-t border-[#D4A853]/30">
            <p className="font-cormorant italic text-lg sm:text-2xl text-royal-brown/90 leading-relaxed">
              And just like that,<br className="sm:hidden" /> our forever began.{' '}
              <span className="inline-block text-burgundy animate-pulse text-2xl font-serif">
                ♡
              </span>
            </p>
          </div>

          <FloralGarland className="mt-6 max-w-xs mx-auto opacity-75" />
        </motion.div>

        {/* ========================================================================= */}
        {/* 2. ENGAGEMENT PHOTOS GALLERY (Properly Sized & Optimized Portrait Frames) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="mb-14 sm:mb-20"
        >
          <div className="flex items-center justify-between mb-5 px-1">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-serif uppercase tracking-widest text-[#84662B]">
              <Camera className="w-4 h-4 text-[#D4A853]" />
              <span className="font-semibold">Engagement Memories In Frames</span>
            </div>
            <span className="text-[11px] sm:text-xs font-serif uppercase tracking-wider text-royal-brown/70 bg-cream-50 px-3 py-1 rounded-full border border-[#D4A853]/40">
              4 Moments • Click to Zoom
            </span>
          </div>

          {/* Balanced 4-Card Luxury Photo Grid (2 cols on mobile, 4 cols on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id || index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActivePhoto(photo)}
                className="group relative cursor-pointer rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
              >
                <CornerFlourish className="absolute top-1.5 left-1.5 w-6 h-6 sm:w-7 sm:h-7 opacity-75 z-20 pointer-events-none" position="top-left" color="#D4A853" />
                <CornerFlourish className="absolute bottom-1.5 right-1.5 w-6 h-6 sm:w-7 sm:h-7 opacity-75 z-20 pointer-events-none" position="bottom-right" color="#D4A853" />

                {/* Aspect Ratio 3:4 displays full portrait photographs without awkward cropping */}
                <div className="relative aspect-[3/4] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#D4A853]/40 bg-[#F5EFE0]">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-106"
                  />
                  
                  {/* Subtle dark gradient overlay for crystal clear text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Top-Right Quick Zoom Badge */}
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-xs text-[11px] text-white/95 font-serif border border-white/20 shadow-sm">
                      <Eye className="w-3 h-3 text-[#D4A853]" />
                      <span>View</span>
                    </span>
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-2.5 sm:bottom-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 z-10 text-white">
                    <span className="text-[10px] font-serif uppercase tracking-widest text-[#D4A853] font-semibold block mb-0.5">
                      Moment 0{index + 1}
                    </span>
                    <h4 className="font-playfair text-sm sm:text-base font-semibold drop-shadow-md leading-tight line-clamp-1">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs font-cormorant italic text-white/90 mt-0.5 line-clamp-1">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. ENGAGEMENT VIDEO CLIP (Widescreen Cinema Presentation)                  */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="max-w-4xl lg:max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-serif uppercase tracking-widest text-[#84662B]">
              <Film className="w-4 h-4 text-[#D4A853]" />
              <span className="font-semibold">Featured Engagement Film</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#84662B] bg-cream-50 px-3 py-1 rounded-full border border-[#D4A853]/40 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#D4A853]" />
              <span>{video.duration}</span>
            </div>
          </div>

          {/* Prominent Cinema Sized Video Card */}
          <div className="group relative rounded-3xl p-2.5 sm:p-4 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border-2 border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden">
            <CornerFlourish className="absolute top-2 left-2 w-9 h-9 opacity-75 z-20 pointer-events-none" position="top-left" color="#D4A853" />
            <CornerFlourish className="absolute top-2 right-2 w-9 h-9 opacity-75 z-20 pointer-events-none" position="top-right" color="#D4A853" />
            <CornerFlourish className="absolute bottom-2 left-2 w-9 h-9 opacity-75 z-20 pointer-events-none" position="bottom-left" color="#D4A853" />
            <CornerFlourish className="absolute bottom-2 right-2 w-9 h-9 opacity-75 z-20 pointer-events-none" position="bottom-right" color="#D4A853" />

            {/* Video Frame (True 16:9 widescreen, native 848x478 aspect ratio) */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#D4A853]/40 bg-black shadow-inner">
              {isPlayingInline ? (
                <video
                  ref={inlineVideoRef}
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-black"
                >
                  Your browser does not support HTML5 video playback.
                </video>
              ) : (
                <div
                  onClick={() => setIsPlayingInline(true)}
                  className="w-full h-full cursor-pointer relative group/thumb"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-103"
                  />

                  {/* Cinematic Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30 group-hover/thumb:via-black/25 transition-all duration-500" />

                  {/* Top Tag Pill */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-serif uppercase tracking-widest text-burgundy font-bold shadow-xs border border-[#D4A853]/50">
                      {video.tag || "OFFICIAL FILM"}
                    </span>
                  </div>

                  {/* Top-Right Cinema Expand Button */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedVideo(video);
                      }}
                      className="px-3 py-1 rounded-full bg-black/60 hover:bg-[#D4A853] backdrop-blur-xs text-[11px] font-serif uppercase tracking-wider text-white border border-white/20 transition-colors shadow-sm flex items-center space-x-1.5"
                      title="Open in Cinema Mode"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Cinema Theater</span>
                    </button>
                  </div>

                  {/* Large Centered Golden Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/50 backdrop-blur-md border-2 border-[#D4A853] flex items-center justify-center text-[#D4A853] shadow-gold-glow group-hover/thumb:scale-110 group-hover/thumb:bg-[#D4A853] group-hover/thumb:text-white transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Bottom Video Information */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10 text-white flex items-end justify-between">
                    <div>
                      <h3 className="font-playfair text-lg sm:text-2xl md:text-3xl font-semibold leading-tight drop-shadow-md">
                        {video.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-cormorant italic text-white/90 mt-1 line-clamp-1">
                        {video.subtitle}
                      </p>
                    </div>
                    <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-serif text-white/90 border border-white/20 shrink-0">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                      <span>Click to Play</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* VIDEO CINEMA THEATER MODAL                                                */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseVideoModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.title}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl lg:max-w-5xl w-full bg-[#1A1412] rounded-3xl border-2 border-[#D4A853]/60 shadow-2xl p-3 sm:p-5 overflow-hidden text-center"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseVideoModal}
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/70 border border-[#D4A853]/60 text-white/90 hover:text-white hover:bg-[#D4A853] flex items-center justify-center transition-colors duration-200"
                aria-label="Close cinema player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large 16:9 Cinema Player */}
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[16/9] w-full max-h-[75vh] mx-auto border border-[#D4A853]/30 shadow-inner flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={selectedVideo.videoUrl}
                  poster={selectedVideo.thumbnail}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain bg-black"
                >
                  Your browser does not support HTML5 video playback.
                </video>
              </div>

              {/* Cinema Player Footer */}
              <div className="pt-3.5 pb-1 text-left px-1 flex items-center justify-between text-white">
                <div>
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-xs font-cormorant italic text-[#D4A853]">
                    {selectedVideo.subtitle}
                  </p>
                </div>
                <span className="text-[11px] font-serif uppercase tracking-wider text-white/70">
                  Duration: {selectedVideo.duration}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* PHOTO LIGHTBOX MODAL WITH FULL CONTROLS                                    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClosePhotoModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
            role="dialog"
            aria-modal="true"
            aria-label={activePhoto.title}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl lg:max-w-5xl w-full bg-[#1A1412] rounded-3xl border border-[#D4A853]/60 shadow-2xl p-3 sm:p-4 overflow-hidden text-center"
            >
              {/* Close Button */}
              <button
                onClick={handleClosePhotoModal}
                className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/70 border border-[#D4A853]/60 text-white/90 hover:text-white hover:bg-[#D4A853] flex items-center justify-center transition-colors duration-200"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Previous Photo Button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-[#D4A853] text-white border border-white/20 transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Photo Button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 hover:bg-[#D4A853] text-white border border-white/20 transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Full Image Container */}
              <div className="rounded-2xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center border border-[#D4A853]/30">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="pt-3 pb-1 px-2 text-left flex items-center justify-between text-white">
                <div>
                  <h4 className="font-playfair text-base sm:text-lg font-semibold">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs font-cormorant italic text-[#D4A853]">
                    {activePhoto.caption}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-serif uppercase tracking-widest text-[#D4A853]">
                    {photos.findIndex((p) => p.id === activePhoto.id) + 1} of {photos.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default EngagementClips;
