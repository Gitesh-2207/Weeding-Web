import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Film, Clock, Sparkles } from 'lucide-react';
import { CornerFlourish, FloralGarland } from './common/DecorativeElements';

export const EngagementClips = ({ data }) => {
  const [selectedClip, setSelectedClip] = useState(null);
  const videoRef = useRef(null);

  // Fallback engagement clips array if not present in data
  const clips = data?.engagement?.clips || [
    {
      id: "clip-1",
      title: "The Beautiful Yes",
      subtitle: "Ring Ceremony & Eternal Promise",
      tag: "THE PROPOSAL",
      duration: "0:45",
      thumbnail: "/images/engagement-clip-1.jpg",
      videoUrl: "",
      isFeatured: true,
    },
    {
      id: "clip-2",
      title: "Under The Canopy of Lights",
      subtitle: "Laughter, Music & Twilight Celebration",
      tag: "CELEBRATION",
      duration: "0:30",
      thumbnail: "/images/engagement-clip-2.jpg",
      videoUrl: "",
      isFeatured: false,
    },
    {
      id: "clip-3",
      title: "Whispers of Forever",
      subtitle: "Petals Shower & Family Blessings",
      tag: "MOMENTS",
      duration: "0:25",
      thumbnail: "/images/engagement-clip-3.jpg",
      videoUrl: "",
      isFeatured: false,
    },
  ];

  const handleCloseModal = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedClip(null);
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (selectedClip) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedClip, handleCloseModal]);

  const featuredClip = clips.find((c) => c.isFeatured) || clips[0];
  const supportingClips = clips.filter((c) => c.id !== featuredClip.id);

  return (
    <section
      id="engagement"
      className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFFDF9] to-[#F8F1E3] overflow-hidden"
    >
      {/* Background Ambient Golden Light Orb */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D4A853]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#C5A15A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT SIDE — ROMANTIC STORYTELLING                                         */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 text-center lg:text-left flex flex-col justify-center"
          >
            {/* 1. Top Section Label */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cream-50 border border-[#D4A853]/50 shadow-xs mb-5 self-center lg:self-start">
              <Film className="w-3.5 h-3.5 text-[#D4A853]" />
              <span className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] sm:tracking-[0.28em] text-[#84662B] font-semibold">
                BEFORE THE WEDDING BELLS…
              </span>
            </div>

            {/* Delicate Golden Divider */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4A853] to-transparent lg:w-16" />
              <span className="text-xs text-burgundy">♦</span>
              <span className="text-xs text-[#D4A853]">❧</span>
              <span className="text-xs text-burgundy">♦</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-[#D4A853] to-transparent lg:w-16" />
            </div>

            {/* 2. Main Storytelling Poetry */}
            <div className="space-y-3 sm:space-y-4 font-playfair text-2xl sm:text-3xl md:text-4xl text-burgundy font-medium leading-tight sm:leading-snug">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-royal-brown/90"
              >
                There was a moment.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-royal-brown/90"
              >
                There was a promise.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-2 pt-1"
              >
                <span className="text-royal-brown/95">There was a beautiful</span>
                <span className="font-playfair italic font-bold text-3xl sm:text-4xl md:text-5xl text-[#D4A853] drop-shadow-sm tracking-wide inline-block transform hover:scale-105 transition-transform duration-300">
                  YES.
                </span>
              </motion.div>
            </div>

            {/* 3. Emotional Subtext with Animated Heart */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-6 sm:mt-8 pt-6 border-t border-[#D4A853]/30"
            >
              <p className="font-cormorant italic text-xl sm:text-2xl text-royal-brown/90 leading-relaxed">
                And just like that,<br />
                our forever began.{' '}
                <span className="inline-inline-block text-burgundy animate-pulse text-2xl font-serif">
                  ♡
                </span>
              </p>
              
              <p className="mt-3 text-xs sm:text-sm font-serif uppercase tracking-[0.2em] text-[#84662B]/80 flex items-center justify-center lg:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4A853]" />
                <span>Our Engagement Memories</span>
              </p>
            </motion.div>

            {/* Subtle Floral Garland Accent */}
            <div className="mt-6 hidden lg:block opacity-70">
              <FloralGarland className="max-w-[200px]" />
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT SIDE — CINEMATIC ENGAGEMENT CLIPS GALLERY                           */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
              
              {/* Main Featured Video Card (Prominent Reel Portrait) */}
              {featuredClip && (
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setSelectedClip(featuredClip)}
                  className="sm:col-span-7 group relative cursor-pointer rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#FFFDF9] to-[#F8F1E3] border-2 border-[#D4A853]/60 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative Corner Flourishes */}
                  <CornerFlourish
                    className="absolute top-2 left-2 w-8 h-8 opacity-75 z-20 pointer-events-none"
                    position="top-left"
                    color="#D4A853"
                  />
                  <CornerFlourish
                    className="absolute bottom-2 right-2 w-8 h-8 opacity-75 z-20 pointer-events-none"
                    position="bottom-right"
                    color="#D4A853"
                  />

                  {/* Video Thumbnail Frame */}
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-[#D4A853]/40 bg-black/10">
                    <img
                      src={featuredClip.thumbnail}
                      alt={featuredClip.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Cinematic Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/30 group-hover:via-black/15 transition-all duration-500" />

                    {/* Top Tag & Duration Pill */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[10px] font-serif uppercase tracking-widest text-burgundy font-semibold shadow-xs border border-[#D4A853]/40">
                        {featuredClip.tag || "FEATURED"}
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-[11px] font-mono text-white/90">
                        <Clock className="w-3 h-3 text-[#D4A853]" />
                        <span>{featuredClip.duration}</span>
                      </span>
                    </div>

                    {/* Center Floating Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/45 backdrop-blur-md border-2 border-[#D4A853] flex items-center justify-center text-[#D4A853] shadow-gold-glow group-hover:scale-110 group-hover:bg-[#D4A853] group-hover:text-white transition-all duration-300">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" />
                      </div>
                    </div>

                    {/* Bottom Title & Subtitle */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                      <p className="font-playfair text-lg sm:text-xl font-semibold leading-tight drop-shadow-md">
                        {featuredClip.title}
                      </p>
                      <p className="text-xs font-cormorant italic text-white/85 line-clamp-1 mt-0.5">
                        {featuredClip.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Supporting Engagement Video Cards */}
              <div className="sm:col-span-5 flex flex-col gap-5 sm:gap-6">
                {supportingClips.map((clip) => (
                  <motion.div
                    key={clip.id}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.35 }}
                    onClick={() => setSelectedClip(clip)}
                    className="group relative cursor-pointer rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#FFFDF9] to-[#F8F1E3] border border-[#D4A853]/50 shadow-royal hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
                  >
                    <div className="relative aspect-[4/5] sm:aspect-[9/14] rounded-xl overflow-hidden border border-[#D4A853]/35 bg-black/10">
                      <img
                        src={clip.thumbnail}
                        alt={clip.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20 group-hover:via-black/10 transition-all duration-500" />

                      {/* Top Pill */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                        <span className="px-2 py-0.5 rounded-full bg-white/90 text-[9px] font-serif uppercase tracking-wider text-burgundy font-medium border border-[#D4A853]/40">
                          {clip.tag || "CLIP"}
                        </span>
                        <span className="text-[10px] font-mono text-white/90 bg-black/60 px-1.5 py-0.5 rounded-full">
                          {clip.duration}
                        </span>
                      </div>

                      {/* Center Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="w-10 h-10 rounded-full bg-black/45 backdrop-blur-md border border-[#D4A853] flex items-center justify-center text-[#D4A853] shadow-md group-hover:scale-110 group-hover:bg-[#D4A853] group-hover:text-white transition-all duration-300">
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        </div>
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                        <p className="font-playfair text-sm sm:text-base font-semibold leading-tight drop-shadow-md">
                          {clip.title}
                        </p>
                        <p className="text-[11px] font-cormorant italic text-white/80 line-clamp-1 mt-0.5">
                          {clip.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIDEO LIGHTBOX / MODAL DIALOG                                             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedClip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selectedClip.title}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#1A1412] rounded-3xl border-2 border-[#D4A853]/60 shadow-2xl p-4 sm:p-5 overflow-hidden text-center"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-[#D4A853]/60 text-white/90 hover:text-white hover:bg-[#D4A853] flex items-center justify-center transition-colors duration-200"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player or Interactive Video Placeholder */}
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] max-h-[68vh] mx-auto border border-[#D4A853]/30 shadow-inner flex items-center justify-center">
                {selectedClip.videoUrl ? (
                  <video
                    ref={videoRef}
                    src={selectedClip.videoUrl}
                    poster={selectedClip.thumbnail}
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
                      src={selectedClip.thumbnail}
                      alt={selectedClip.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-35 filter blur-xs"
                    />
                    <div className="relative z-10 flex flex-col items-center max-w-xs">
                      <div className="w-14 h-14 rounded-full bg-[#D4A853]/20 border border-[#D4A853] flex items-center justify-center text-[#D4A853] mb-4 shadow-gold-glow animate-pulse">
                        <Film className="w-7 h-7" />
                      </div>
                      <h4 className="font-playfair text-xl text-[#FFFDF9] font-medium mb-1">
                        {selectedClip.title}
                      </h4>
                      <p className="text-xs font-cormorant italic text-[#D4A853] mb-4">
                        {selectedClip.subtitle}
                      </p>
                      <div className="p-3.5 rounded-xl bg-black/70 border border-[#D4A853]/40 text-white/85 text-xs leading-relaxed">
                        <p className="font-serif uppercase tracking-wider text-[10px] text-[#D4A853] font-semibold mb-1">
                          Video Ready To Play
                        </p>
                        Place your video file (e.g. <span className="text-[#D4A853] font-mono">proposal.mp4</span>) in the <span className="font-mono text-white">public/videos/</span> directory and set <span className="text-[#D4A853] font-mono">videoUrl</span> in <span className="font-mono text-white">weddingData.js</span>.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Lightbox Footer Details */}
              <div className="pt-4 pb-1 text-left px-1 flex items-center justify-between">
                <div>
                  <h3 className="font-playfair text-lg text-white font-semibold">
                    {selectedClip.title}
                  </h3>
                  <p className="text-xs font-cormorant italic text-[#D4A853]">
                    {selectedClip.subtitle}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-serif uppercase tracking-wider text-white/60">
                    Duration: {selectedClip.duration}
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
