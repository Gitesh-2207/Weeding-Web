import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CornerFlourish, FloralGarland } from './common/DecorativeElements';

// Tasteful, auspicious Lord Ganesha Icon in golden line art
export const GaneshaIcon = ({ className = "w-10 h-10", color = "#C5A15A" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Auspicious Tilak & Crown */}
    <path
      d="M50 12 L53 22 L50 26 L47 22 Z"
      fill={color}
    />
    <path
      d="M44 24 Q50 28 56 24"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Ganesha Mastak & Face Contour */}
    <path
      d="M38 32 C34 38, 30 48, 32 58 C34 68, 42 74, 50 78 C56 81, 64 80, 68 74 C71 70, 70 64, 66 61 C62 58, 56 61, 56 65"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Graceful Ganesha Trunk (Sond) */}
    <path
      d="M48 40 C46 48, 46 58, 52 64 C56 68, 62 67, 63 63 C64 59, 60 56, 56 57"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Right Tusk (Ekdant) */}
    <path
      d="M39 52 L34 54"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Auspicious Bindi / Third Eye */}
    <circle cx="50" cy="30" r="2" fill={color} />
    {/* Sweet Modak on Left */}
    <path
      d="M68 62 C71 59, 75 62, 73 66 C71 69, 67 67, 68 62 Z"
      fill={color}
      opacity="0.85"
    />
    {/* Subtle Ear curves */}
    <path
      d="M34 34 C26 38, 24 50, 30 58"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeDasharray="1 3"
      opacity="0.7"
    />
    <path
      d="M64 34 C72 38, 74 50, 68 58"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeDasharray="1 3"
      opacity="0.7"
    />
  </svg>
);

export const WelcomeLanding = ({ data, onOpen }) => {
  const [isEntering, setIsEntering] = useState(false);

  // Harmonious harp/chime audio generator using Web Audio API
  const playWelcomeChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Magical welcoming harp arpeggio (C5, E5, G5, B5, C6, E6)
      const notes = [523.25, 659.25, 783.99, 987.77, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.85);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 0.9);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  };

  const handleEnter = () => {
    if (isEntering) return;
    setIsEntering(true);

    // Play auspicious harp chime
    playWelcomeChime();

    // Elegant golden and rose petal confetti burst
    try {
      const count = 65;
      const defaults = {
        origin: { x: 0.5, y: 0.55 },
        colors: ['#D4AF37', '#FFDF73', '#E89CA3', '#C44D58', '#FFFFFF', '#C5A15A'],
        shapes: ['circle', 'square'],
      };

      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.6),
        spread: 75,
        startVelocity: 32,
        scalar: 1.1,
      });

      confetti({
        ...defaults,
        particleCount: Math.floor(count * 0.4),
        spread: 120,
        startVelocity: 42,
        decay: 0.92,
        scalar: 1.3,
      });
    } catch {
      // Confetti fallback
    }

    // Trigger transition callback after smooth exit animation
    setTimeout(() => {
      onOpen();
    }, 750);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isEntering ? { opacity: 0, scale: 1.05, filter: "blur(6px)" } : { opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center min-h-[100dvh] h-screen w-full bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#F5EFE0] overflow-hidden select-none p-4 sm:p-8"
    >
      {/* Delicate Radial Golden Glow at Center */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(197,161,90,0.14)_0%,transparent_70%)]" />

      {/* Decorative Outer Royal Frame */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-gold/40 rounded-3xl pointer-events-none" />
      <div className="absolute inset-5 sm:inset-8 md:inset-10 border border-gold/25 border-dashed rounded-2xl pointer-events-none" />

      {/* Ornate Corner Flourishes */}
      <CornerFlourish className="absolute top-4 left-4 sm:top-7 sm:left-7 w-10 h-10 sm:w-16 sm:h-16" position="top-left" />
      <CornerFlourish className="absolute top-4 right-4 sm:top-7 sm:right-7 w-10 h-10 sm:w-16 sm:h-16" position="top-right" />
      <CornerFlourish className="absolute bottom-4 left-4 sm:bottom-7 sm:left-7 w-10 h-10 sm:w-16 sm:h-16" position="bottom-left" />
      <CornerFlourish className="absolute bottom-4 right-4 sm:bottom-7 sm:right-7 w-10 h-10 sm:w-16 sm:h-16" position="bottom-right" />

      {/* Subtle Ambient Glowing Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/30"
            style={{
              width: `${(i % 3) * 2.5 + 3}px`,
              height: `${(i % 3) * 2.5 + 3}px`,
              left: `${(i * 17 + 8) % 94}%`,
              top: `${(i * 23 + 12) % 88}%`,
            }}
            animate={{
              y: [-12, 12, -12],
              x: [-8, 8, -8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + (i % 4) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main Centered Content Card */}
      <div className="relative z-10 max-w-3xl w-full mx-auto px-4 py-8 sm:px-10 sm:py-12 flex flex-col items-center justify-center text-center">
        
        {/* 1. Top Section – Lord Ganesha Motif & Mantra */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col items-center justify-center mb-6 sm:mb-8"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-cream-50/90 border border-gold/50 shadow-sm flex items-center justify-center mb-3">
            <GaneshaIcon className="w-9 h-9 sm:w-10 sm:h-10 text-gold-dark" color="#9B7832" />
          </div>

          <p className="font-devanagari text-lg sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.25em] text-[#9B7832] font-semibold drop-shadow-sm select-none">
            ॥ श्री गणेशाय नमः ॥
          </p>

          <FloralGarland className="mt-2 max-w-xs opacity-75" />
        </motion.div>

        {/* 2. Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-5"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-semibold text-burgundy tracking-wide leading-tight sm:leading-snug drop-shadow-sm">
            Two Hearts, One Beautiful Journey
          </h1>
        </motion.div>

        {/* 3. Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.55 }}
          className="mb-7 sm:mb-9"
        >
          <p className="text-base sm:text-xl md:text-2xl font-cormorant italic text-royal-brown/90 tracking-wide max-w-xl mx-auto leading-relaxed">
            A celebration of love, laughter, and forever.
          </p>

          {/* Elegant Couple & Date Badge */}
          {data?.couple && (
            <div className="mt-4 flex items-center justify-center space-x-2.5 text-xs sm:text-sm font-serif tracking-[0.22em] uppercase text-gold-dark font-medium">
              <span>{data.couple.bride.name}</span>
              <span className="text-burgundy text-xs">❤</span>
              <span>{data.couple.groom.name}</span>
              <span className="text-gold opacity-60">•</span>
              <span className="text-royal-brown/75">{data.date.displayDate}</span>
            </div>
          )}
        </motion.div>

        {/* 4. Enter Wedding Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEnter}
            className="group relative inline-flex items-center justify-center space-x-3 px-8 sm:px-11 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy text-[#FFF9EF] font-serif text-xs sm:text-sm md:text-base tracking-[0.18em] uppercase font-semibold border-2 border-gold/70 shadow-royal hover:shadow-gold-glow hover:border-gold transition-all duration-300 cursor-pointer overflow-hidden"
            aria-label="Tap to Enter Our Wedding"
          >
            {/* Soft Shimmer sweep effect on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />

            <Sparkles className="w-4 h-4 text-gold group-hover:rotate-12 transition-transform duration-300 shrink-0" />
            <span className="relative z-10 font-semibold drop-shadow-sm">
              [ Tap to Enter Our Wedding ]
            </span>
            <Sparkles className="w-4 h-4 text-gold group-hover:-rotate-12 transition-transform duration-300 shrink-0" />
          </motion.button>

          <p className="mt-3.5 text-[11px] sm:text-xs font-serif tracking-widest uppercase text-royal-brown/65">
            Press anywhere on the button to begin
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
};
