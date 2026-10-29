import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CornerFlourish } from './common/DecorativeElements';
import { musicManager } from '../utils/musicManager';

/**
 * Royal Wedding Crest & Monogram Logo
 * Minimalist, luxury royal seal with subtle golden breathing glow.
 */
export const WeddingLogo = ({ monogram = "A & K", className = "w-52 h-52 sm:w-64 sm:h-64" }) => (
  <div className={`relative flex items-center justify-center select-none ${className}`}>
    {/* Ambient radial golden back-light glow */}
    <div
      className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(226,202,145,0.45)_0%,rgba(197,161,90,0.18)_50%,transparent_72%)] blur-xl pointer-events-none"
      aria-hidden="true"
    />

    {/* Royal Seal SVG Artwork */}
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-gold animate-logo-glow"
      aria-hidden="true"
    >
      <defs>
        {/* Rich Royal Gold Linear Gradient */}
        <linearGradient id="royalGoldGrad" x1="20" y1="20" x2="220" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#84662B" />
          <stop offset="25%" stopColor="#C5A15A" />
          <stop offset="50%" stopColor="#F4DE9C" />
          <stop offset="75%" stopColor="#C5A15A" />
          <stop offset="100%" stopColor="#9B7832" />
        </linearGradient>

        {/* Soft Radial Cream Disc Fill */}
        <radialGradient id="creamBackdrop" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#FFF9EF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F5ECE0" stopOpacity="0.85" />
        </radialGradient>
      </defs>

      {/* Outer Glow Halo Ring */}
      <circle
        cx="120"
        cy="120"
        r="110"
        stroke="url(#royalGoldGrad)"
        strokeWidth="0.75"
        strokeDasharray="3 3"
        opacity="0.65"
      />

      {/* Solid Cream Inner Disc */}
      <circle
        cx="120"
        cy="120"
        r="102"
        fill="url(#creamBackdrop)"
        stroke="url(#royalGoldGrad)"
        strokeWidth="1.75"
      />

      {/* Decorative Beaded Dot Ring (36 delicate dots) */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 360) / 36;
        const rad = (angle * Math.PI) / 180;
        const cx = 120 + 94 * Math.cos(rad);
        const cy = 120 + 94 * Math.sin(rad);
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={i % 3 === 0 ? "1.5" : "0.9"}
            fill="#C5A15A"
            opacity={i % 3 === 0 ? "0.9" : "0.55"}
          />
        );
      })}

      {/* Concentric Inner Ornate Border */}
      <circle
        cx="120"
        cy="120"
        r="86"
        stroke="#6F2927"
        strokeWidth="0.85"
        strokeDasharray="4 2"
        opacity="0.7"
      />
      <circle
        cx="120"
        cy="120"
        r="80"
        stroke="url(#royalGoldGrad)"
        strokeWidth="1.25"
      />

      {/* Auspicious Top Crown / Kalash Motif */}
      <g transform="translate(120, 52)">
        {/* Central Lotus Petal */}
        <path
          d="M0 -14 C3 -6, 6 -2, 0 8 C-6 -2, -3 -6, 0 -14 Z"
          fill="url(#royalGoldGrad)"
        />
        {/* Left Lotus Petal */}
        <path
          d="M-1 -1 C-6 -4, -12 -3, -11 4 C-8 8, -3 7, 0 8 Z"
          fill="#6F2927"
          opacity="0.85"
        />
        {/* Right Lotus Petal */}
        <path
          d="M1 -1 C6 -4, 12 -3, 11 4 C8 8, 3 7, 0 8 Z"
          fill="#6F2927"
          opacity="0.85"
        />
        {/* Auspicious Jewel Dot */}
        <circle cx="0" cy="-16" r="1.5" fill="#C5A15A" />
      </g>

      {/* Center Couple Monogram */}
      <text
        x="120"
        y="126"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#6F2927"
        fontFamily="'Playfair Display', 'Cormorant Garamond', 'Georgia', serif"
        fontSize="34"
        fontWeight="600"
        letterSpacing="0.08em"
        style={{
          textShadow: "0 2px 8px rgba(197, 161, 90, 0.35)",
        }}
      >
        {monogram}
      </text>

      {/* Bottom Auspicious Knot / Flourish */}
      <g transform="translate(120, 164)">
        {/* Graceful horizontal divider curves */}
        <path
          d="M-38 0 C-24 -4, -12 4, 0 0 C12 4, 24 -4, 38 0"
          stroke="url(#royalGoldGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Tiny heart knot at center */}
        <path
          d="M0 -3 C-2 -6, -6 -4, -4 0 L0 4 L4 0 C6 -4, 2 -6, 0 -3 Z"
          fill="#6F2927"
          opacity="0.9"
        />
        <circle cx="-38" cy="0" r="1.5" fill="#C5A15A" />
        <circle cx="38" cy="0" r="1.5" fill="#C5A15A" />
      </g>
    </svg>
  </div>
);

export const WelcomeLanding = ({ data, onOpen }) => {
  const [isEntering, setIsEntering] = useState(false);

  const coupleMonogram = data?.couple?.monogram || "A & K";

  const handleEnter = useCallback(() => {
    if (isEntering) return;
    setIsEntering(true);

    // 1. Immediately start soft romantic piano music with smooth fade-in
    // Directly within user click/tap event to satisfy mobile & desktop browser autoplay policies
    musicManager.startWithFadeIn(2400);

    // 2. Gentle celebratory golden confetti & rose petal burst
    try {
      const defaults = {
        origin: { x: 0.5, y: 0.52 },
        colors: ['#D4AF37', '#FFDF73', '#E89CA3', '#C44D58', '#FFF9EF', '#C5A15A'],
        shapes: ['circle', 'square'],
      };

      confetti({
        ...defaults,
        particleCount: 45,
        spread: 60,
        startVelocity: 28,
        scalar: 1.05,
      });

      confetti({
        ...defaults,
        particleCount: 30,
        spread: 110,
        startVelocity: 38,
        decay: 0.92,
        scalar: 1.2,
      });
    } catch {
      // Confetti fallback
    }

    // 3. Smooth transition to reveal the full website
    setTimeout(() => {
      onOpen();
    }, 750);
  }, [isEntering, onOpen]);

  // Support Keyboard navigation (Enter / Space bar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleEnter]);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={handleEnter}
      initial={{ opacity: 1 }}
      animate={
        isEntering
          ? { opacity: 0, scale: 1.04, filter: 'blur(6px)' }
          : { opacity: 1, scale: 1, filter: 'blur(0px)' }
      }
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(8px)' }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center min-h-[100dvh] h-screen w-full bg-gradient-to-b from-[#FAF5EC] via-[#FFFDF9] to-[#F5EFE0] overflow-hidden select-none cursor-pointer p-4 focus:outline-none"
      aria-label="Welcome screen. Tap anywhere to enter our wedding invitation website."
    >
      {/* Delicate Radial Golden Glow at Center */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(197,161,90,0.16)_0%,rgba(197,161,90,0.06)_45%,transparent_70%)]"
        aria-hidden="true"
      />

      {/* Decorative Outer Royal Frame */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-gold/40 rounded-3xl pointer-events-none" />
      <div className="absolute inset-5 sm:inset-8 md:inset-10 border border-gold/25 border-dashed rounded-2xl pointer-events-none" />

      {/* Ornate Corner Flourishes */}
      <CornerFlourish className="absolute top-4 left-4 sm:top-7 sm:left-7 w-10 h-10 sm:w-16 sm:h-16" position="top-left" />
      <CornerFlourish className="absolute top-4 right-4 sm:top-7 sm:right-7 w-10 h-10 sm:w-16 sm:h-16" position="top-right" />
      <CornerFlourish className="absolute bottom-4 left-4 sm:bottom-7 sm:left-7 w-10 h-10 sm:w-16 sm:h-16" position="bottom-left" />
      <CornerFlourish className="absolute bottom-4 right-4 sm:bottom-7 sm:right-7 w-10 h-10 sm:w-16 sm:h-16" position="bottom-right" />

      {/* Subtle Floating Golden Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
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

      {/* Central Interactive Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-md w-full px-4 py-6">
        
        {/* Auspicious Lord Ganesha Blessing (Directly above the wedding logo) */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-5 sm:mb-6 flex flex-col items-center justify-center select-none"
        >
          <img
            src="/images/ganesha-blessing.png"
            alt="॥ श्री गणेशाय नमः ॥"
            className="h-20 sm:h-24 md:h-26 w-auto object-contain mx-auto mix-blend-multiply drop-shadow-xs"
            loading="eager"
          />
        </motion.div>

        {/* 1. Wedding Logo in the center with subtle glowing effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center mb-5 sm:mb-7"
        >
          <WeddingLogo monogram={coupleMonogram} className="w-44 h-44 sm:w-56 sm:h-56" />
        </motion.div>

        {/* 2. Text "Tap to Enter" below the logo with gentle animation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center space-x-2 text-gold-dark animate-tap-pulse">
            <span className="text-[10px] sm:text-xs text-gold opacity-75">✦</span>
            <span className="font-serif text-xs sm:text-sm md:text-base uppercase tracking-[0.32em] text-burgundy font-semibold drop-shadow-sm">
              Tap to Enter
            </span>
            <span className="text-[10px] sm:text-xs text-gold opacity-75">✦</span>
          </div>

          {/* Delicate golden accent line */}
          <div className="mt-2 h-[1px] w-20 sm:w-28 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />
        </motion.div>

      </div>
    </motion.div>
  );
};
