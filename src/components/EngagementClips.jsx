import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, Clock, Sparkles, Camera, Eye } from 'lucide-react';
import { CornerFlourish, FloralGarland } from './common/DecorativeElements';

export const EngagementClips = ({ data }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activePhoto, setActivePhoto] = useState(null);
  const videoRef = useRef(null);

  // Fallback engagement photos
  const photos = data?.engagement?.photos || [
    {
      id: "photo-1",
      title: "The Palace Twilight",
      caption: "Hand in hand beneath the royal arches",
      image: "/images/engagement-photo-4.jpg",
      aspect: "wide",
    },
    {
      id: "photo-2",
      title: "The Beautiful Yes",
      caption: "The ring ceremony & an eternal promise",
      image: "/images/engagement-photo-1.jpg",
      aspect: "portrait",
    },
    {
      id: "photo-3",
      title: "Under The Canopy of Lights",
      caption: "Laughter, music & twilight celebration",
      image: "/images/engagement-photo-2.jpg",
      aspect: "portrait",
    },
    {
      id: "photo-4",
      title: "Whispers of Forever",
      caption: "Petals shower & boundless joy",
      image: "/images/engagement-photo-3.jpg",
      aspect: "portrait",
    },
  ];

  // Fallback engagement video
  const video = data?.engagement?.video || {
    id: "clip-main",
    title: "The Beautiful Yes",
    subtitle: "Official Engagement Film • Ring Ceremony & Eternal Promise",
    tag: "ENGAGEMENT FILM",
    duration: "0:45",
    thumbnail: "/images/engagement-photo-1.jpg",
    videoUrl: "",
  };

  const handleCloseVideoModal = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedVideo(null);
  }, []);

  const handleClosePhotoModal = useCallback(() => {
    setActivePhoto(null);
  }, []);

  // Keyboard shortcut (Escape) to close any active modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedVideo) handleCloseVideoModal();
        if (activePhoto) handleClosePhotoModal();
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
  }, [selectedVideo, activePhoto, handleCloseVideoModal, handleClosePhotoModal]);

  return (
    <section
      id="engagement"
      className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFFDF9] to-[#F8F1E3] overflow-hidden"
    >
      {/* Ambient Warm Golden Glows in Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#D4A853]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#C5A15A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. ENGAGEMENT HEADING & ROMANTIC STORYTELLING TEXT                        */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-16"
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
        {/* 2. ENGAGEMENT PHOTOS GALLERY (Collage Layout with Varied Sizes)            */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, delay: 0.2 }}
          className="mb-14 sm:mb-18"
        >
          <div className="flex items-center justify-between mb-5 px-1">
            <div className="flex items-center space-x-2 text-xs font-serif uppercase tracking-widest text-[#84662B]">
              <Camera className="w-4 h-4 text-[#D4A853]" />
              <span className="font-semibold">Engagement Memories In Frames</span>
            </div>
            <span className="text-[11px] font-serif uppercase tracking-wider text-royal-brown/65">
              4 Moments
            </span>
          </div>

          {/* Asymmetrical Editorial Collage Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
            
            {/* Photo 1: Wide Hero Heritage Archway (Large Featured Spread) */}
            {photos[0] && (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActivePhoto(photos[0])}
                className="lg:col-span-7 group relative cursor-pointer rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
              >
                <CornerFlourish className="absolute top-2 left-2 w-8 h-8 opacity-75 z-20 pointer-events-none" position="top-left" color="#D4A853" />
                <CornerFlourish className="absolute bottom-2 right-2 w-8 h-8 opacity-75 z-20 pointer-events-none" position="bottom-right" color="#D4A853" />

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D4A853]/40 bg-black/10">
                  <img
                    src={photos[0].image}
                    alt={photos[0].title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  {/* Hover View Badge */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[11px] text-white/95 font-serif border border-white/20">
                      <Eye className="w-3 h-3 text-[#D4A853]" />
                      <span>View</span>
                    </span>
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <h4 className="font-playfair text-lg sm:text-xl font-semibold drop-shadow-md">
                      {photos[0].title}
                    </h4>
                    <p className="text-xs font-cormorant italic text-white/85 mt-0.5 line-clamp-1">
                      {photos[0].caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Photo 2: The Ring Proposal Ceremony (Portrait orientation) */}
            {photos[1] && (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActivePhoto(photos[1])}
                className="lg:col-span-5 group relative cursor-pointer rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border border-[#D4A853]/40 bg-black/10 min-h-[240px]">
                  <img
                    src={photos[1].image}
                    alt={photos[1].title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[11px] text-white/95 font-serif border border-white/20">
                      <Eye className="w-3 h-3 text-[#D4A853]" />
                      <span>View</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <h4 className="font-playfair text-lg sm:text-xl font-semibold drop-shadow-md">
                      {photos[1].title}
                    </h4>
                    <p className="text-xs font-cormorant italic text-white/85 mt-0.5 line-clamp-1">
                      {photos[1].caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Photo 3: Under the Canopy of Lights */}
            {photos[2] && (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActivePhoto(photos[2])}
                className="lg:col-span-6 group relative cursor-pointer rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#D4A853]/40 bg-black/10">
                  <img
                    src={photos[2].image}
                    alt={photos[2].title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[11px] text-white/95 font-serif border border-white/20">
                      <Eye className="w-3 h-3 text-[#D4A853]" />
                      <span>View</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <h4 className="font-playfair text-lg sm:text-xl font-semibold drop-shadow-md">
                      {photos[2].title}
                    </h4>
                    <p className="text-xs font-cormorant italic text-white/85 mt-0.5 line-clamp-1">
                      {photos[2].caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Photo 4: Petals Shower Candid Joy */}
            {photos[3] && (
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActivePhoto(photos[3])}
                className="lg:col-span-6 group relative cursor-pointer rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-[#D4A853]/40 bg-black/10">
                  <img
                    src={photos[3].image}
                    alt={photos[3].title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 opacity-70 group-hover:opacity-50 transition-opacity duration-300" />

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-[11px] text-white/95 font-serif border border-white/20">
                      <Eye className="w-3 h-3 text-[#D4A853]" />
                      <span>View</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <h4 className="font-playfair text-lg sm:text-xl font-semibold drop-shadow-md">
                      {photos[3].title}
                    </h4>
                    <p className="text-xs font-cormorant italic text-white/85 mt-0.5 line-clamp-1">
                      {photos[3].caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 3. ENGAGEMENT VIDEO CLIP (Prominently Placed Below the Photos)             */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center space-x-2 text-xs font-serif uppercase tracking-widest text-[#84662B]">
              <Film className="w-4 h-4 text-[#D4A853]" />
              <span className="font-semibold">Featured Engagement Film</span>
            </div>
            <div className="inline-flex items-center space-x-1 text-xs font-mono text-[#84662B] bg-cream-50 px-2.5 py-0.5 rounded-full border border-[#D4A853]/40">
              <Clock className="w-3 h-3 text-[#D4A853]" />
              <span>{video.duration}</span>
            </div>
          </div>

          {/* Prominent Video Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            onClick={() => setSelectedVideo(video)}
            className="group relative cursor-pointer rounded-3xl p-3 sm:p-4 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9EF] to-[#F8F1E3] border-2 border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
          >
            {/* Corner Ornaments */}
            <CornerFlourish className="absolute top-2 left-2 w-9 h-9 opacity-75 z-20 pointer-events-none" position="top-left" color="#D4A853" />
            <CornerFlourish className="absolute top-2 right-2 w-9 h-9 opacity-75 z-20 pointer-events-none" position="top-right" color="#D4A853" />
            <CornerFlourish className="absolute bottom-2 left-2 w-9 h-9 opacity-75 z-20 pointer-events-none" position="bottom-left" color="#D4A853" />
            <CornerFlourish className="absolute bottom-2 right-2 w-9 h-9 opacity-75 z-20 pointer-events-none" position="bottom-right" color="#D4A853" />

            {/* Video Thumbnail Frame */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[#D4A853]/40 bg-black/20 shadow-inner">
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Cinematic Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 group-hover:via-black/20 transition-all duration-500" />

              {/* Top Tag Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-serif uppercase tracking-widest text-burgundy font-bold shadow-xs border border-[#D4A853]/50">
                  {video.tag || "OFFICIAL REEL"}
                </span>
              </div>

              {/* Large Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/45 backdrop-blur-md border-2 border-[#D4A853] flex items-center justify-center text-[#D4A853] shadow-gold-glow group-hover:scale-110 group-hover:bg-[#D4A853] group-hover:text-white transition-all duration-300">
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                </div>
              </div>

              {/* Bottom Video Information */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white flex items-end justify-between">
                <div>
                  <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold leading-tight drop-shadow-md">
                    {video.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-cormorant italic text-white/90 mt-1 line-clamp-1">
                    {video.subtitle}
                  </p>
                </div>
                <div className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-serif text-white/90 border border-white/20 shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                  <span>Tap to Watch</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* ========================================================================= */}
      {/* VIDEO LIGHTBOX / MODAL                                                    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseVideoModal}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
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
              className="relative max-w-xl w-full bg-[#1A1412] rounded-3xl border-2 border-[#D4A853]/60 shadow-2xl p-4 sm:p-5 overflow-hidden text-center"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseVideoModal}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-[#D4A853]/60 text-white/90 hover:text-white hover:bg-[#D4A853] flex items-center justify-center transition-colors duration-200"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player or Interactive Placeholder */}
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[16/9] max-h-[70vh] mx-auto border border-[#D4A853]/30 shadow-inner flex items-center justify-center">
                {selectedVideo.videoUrl ? (
                  <video
                    ref={videoRef}
                    src={selectedVideo.videoUrl}
                    poster={selectedVideo.thumbnail}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support HTML5 video playback.
                  </video>
                ) : (
                  // Elegant Placeholder when video file has not been uploaded yet
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src={selectedVideo.thumbnail}
                      alt={selectedVideo.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-35 filter blur-xs"
                    />
                    <div className="relative z-10 flex flex-col items-center max-w-sm">
                      <div className="w-14 h-14 rounded-full bg-[#D4A853]/20 border border-[#D4A853] flex items-center justify-center text-[#D4A853] mb-3 shadow-gold-glow animate-pulse">
                        <Film className="w-7 h-7" />
                      </div>
                      <h4 className="font-playfair text-xl text-[#FFFDF9] font-medium mb-1">
                        {selectedVideo.title}
                      </h4>
                      <p className="text-xs font-cormorant italic text-[#D4A853] mb-3">
                        {selectedVideo.subtitle}
                      </p>
                      <div className="p-3.5 rounded-xl bg-black/75 border border-[#D4A853]/40 text-white/85 text-xs leading-relaxed">
                        <p className="font-serif uppercase tracking-wider text-[10px] text-[#D4A853] font-semibold mb-1">
                          Video Ready To Play
                        </p>
                        Place your video file (e.g. <span className="text-[#D4A853] font-mono">engagement.mp4</span>) in the <span className="font-mono text-white">public/videos/</span> directory and set <span className="text-[#D4A853] font-mono">videoUrl</span> in <span className="font-mono text-white">weddingData.js</span>.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Details */}
              <div className="pt-4 pb-1 text-left px-1 flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-lg text-white font-semibold">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-xs font-cormorant italic text-[#D4A853]">
                    {selectedVideo.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-serif uppercase tracking-wider text-white/60">
                    Duration: {selectedVideo.duration}
                  </span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* PHOTO LIGHTBOX / MODAL                                                    */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClosePhotoModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
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
              className="relative max-w-3xl w-full bg-[#1A1412] rounded-3xl border border-[#D4A853]/60 shadow-2xl p-3 sm:p-4 overflow-hidden text-center"
            >
              <button
                onClick={handleClosePhotoModal}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-[#D4A853]/60 text-white/90 hover:text-white hover:bg-[#D4A853] flex items-center justify-center transition-colors duration-200"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="rounded-2xl overflow-hidden bg-black max-h-[75vh] flex items-center justify-center border border-[#D4A853]/30">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  className="w-full h-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="pt-3.5 pb-1 px-2 text-left flex items-center justify-between">
                <div>
                  <h4 className="font-playfair text-lg text-white font-semibold">
                    {activePhoto.title}
                  </h4>
                  <p className="text-xs font-cormorant italic text-[#D4A853]">
                    {activePhoto.caption}
                  </p>
                </div>
                <span className="text-[11px] font-serif uppercase tracking-widest text-[#D4A853]/70">
                  Patidar Engagement
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default EngagementClips;
