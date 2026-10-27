import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, FloralGarland } from './common/DecorativeElements';

// Sacred Indian Lotus Motif representing divine blessings, purity and respect for elders
const LotusMotif = ({ className = "w-10 h-10", color = "#D4A853" }) => (
  <svg
    viewBox="0 0 80 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Central Lotus Petal */}
    <path
      d="M40 8 C44 22, 48 34, 40 48 C32 34, 36 22, 40 8 Z"
      fill={color}
      fillOpacity="0.25"
      stroke={color}
      strokeWidth="1.25"
    />
    {/* Inner Left & Right Petals */}
    <path
      d="M40 48 C30 36, 20 30, 24 16 C30 26, 36 38, 40 48 Z"
      fill={color}
      fillOpacity="0.18"
      stroke={color}
      strokeWidth="1"
    />
    <path
      d="M40 48 C50 36, 60 30, 56 16 C50 26, 44 38, 40 48 Z"
      fill={color}
      fillOpacity="0.18"
      stroke={color}
      strokeWidth="1"
    />
    {/* Outer Flared Petals */}
    <path
      d="M40 48 C26 42, 10 38, 12 26 C20 34, 30 42, 40 48 Z"
      stroke={color}
      strokeWidth="1"
      fill={color}
      fillOpacity="0.1"
    />
    <path
      d="M40 48 C54 42, 70 38, 68 26 C60 34, 50 42, 40 48 Z"
      stroke={color}
      strokeWidth="1"
      fill={color}
      fillOpacity="0.1"
    />
    {/* Base Padam Curve */}
    <path
      d="M22 50 Q40 56 58 50"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="40" cy="52" r="2" fill={color} />
  </svg>
);

export const FamilyInvitation = ({ data }) => {
  // --------------------------------------------------------------------------
  // EDITABLE FAMILY NAMES: Customize easily here or via weddingData.js
  // --------------------------------------------------------------------------
  const brideFamilyName = data?.couple?.bride?.family || "The Patidar Family";
  const groomFamilyName = data?.couple?.groom?.family || "The Patidar Family";

  return (
    <section
      id="family-invitation"
      className="py-20 sm:py-28 px-4 sm:px-6 relative bg-gradient-to-b from-[#F8F1E3] via-[#FFFDF9] to-[#F8F1E3] overflow-hidden"
    >
      {/* Background Soft Golden Ambiance Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#D4A853]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-7 sm:p-14 md:p-16 rounded-3xl bg-cream-card border-2 border-[#D4A853]/60 shadow-royal-lg text-center overflow-hidden hover:shadow-gold-glow transition-shadow duration-700"
        >
          {/* Inner Dashed Royal Border */}
          <div className="absolute inset-3 sm:inset-5 md:inset-6 border border-[#D4A853]/35 border-dashed rounded-2xl pointer-events-none" />

          {/* Delicate Corner Flourishes */}
          <CornerFlourish
            className="absolute top-3 left-3 sm:top-5 sm:left-5 w-8 h-8 sm:w-14 sm:h-14 opacity-75"
            position="top-left"
            color="#D4A853"
          />
          <CornerFlourish
            className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-14 sm:h-14 opacity-75"
            position="top-right"
            color="#D4A853"
          />
          <CornerFlourish
            className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-8 h-8 sm:w-14 sm:h-14 opacity-75"
            position="bottom-left"
            color="#D4A853"
          />
          <CornerFlourish
            className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-8 h-8 sm:w-14 sm:h-14 opacity-75"
            position="bottom-right"
            color="#D4A853"
          />

          {/* Traditional Lotus Blossom Top Emblem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center justify-center mb-4 sm:mb-6"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cream-50/90 border border-[#D4A853]/50 shadow-sm flex items-center justify-center mb-2">
              <LotusMotif className="w-8 h-8 text-[#D4A853]" color="#D4A853" />
            </div>
          </motion.div>

          {/* 1. Top Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-5 sm:mb-7"
          >
            <p className="text-xs sm:text-sm font-serif tracking-[0.28em] sm:tracking-[0.32em] uppercase text-[#D4A853] font-semibold">
              WITH THE BLESSINGS OF OUR ELDERS
            </p>

            {/* Ornamental Divider beneath label */}
            <div className="flex items-center justify-center space-x-3 mt-3">
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#D4A853]" />
              <span className="text-xs text-burgundy">♦</span>
              <span className="text-xs text-[#D4A853]">❧</span>
              <span className="text-xs text-burgundy">♦</span>
              <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#D4A853]" />
            </div>
          </motion.div>

          {/* 2. Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="my-5 sm:my-7 px-2"
          >
            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <span className="hidden md:inline-block text-[#D4A853]/60 text-lg">✦</span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-playfair font-semibold text-burgundy tracking-wide leading-tight drop-shadow-sm">
                Two Families, One Celebration
              </h2>
              <span className="hidden md:inline-block text-[#D4A853]/60 text-lg">✦</span>
            </div>
          </motion.div>

          {/* 3. Invitation Message */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="my-6 sm:my-8 max-w-xl mx-auto px-2"
          >
            <p className="text-sm sm:text-base md:text-lg font-cormorant italic text-royal-brown/95 leading-relaxed tracking-wide">
              With immense joy and the blessings of our elders,<br className="hidden sm:inline" />
              our families invite you to be a part of<br className="hidden sm:inline" />
              this beautiful union.
            </p>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-cormorant italic text-royal-brown/95 leading-relaxed tracking-wide">
              Your presence will make our celebration<br className="hidden sm:inline" />
              even more special and memorable.
            </p>
          </motion.div>

          {/* Delicate Center Floral Garland Divider */}
          <FloralGarland className="my-6 sm:my-8 max-w-xs mx-auto opacity-75" />

          {/* 4. Family Names Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 sm:mt-8 pt-6 sm:pt-7 border-t border-[#D4A853]/30"
          >
            <p className="font-script text-3xl sm:text-4xl text-gold-dark italic select-none mb-3">
              With Love,
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-6 py-3 rounded-full bg-cream-50/80 border border-[#D4A853]/40 shadow-xs max-w-lg mx-auto">
              <span className="font-serif text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-[#84662B]">
                {brideFamilyName}
              </span>
              <span className="text-[#D4A853] font-script text-xl italic">&amp;</span>
              <span className="font-serif text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-[#84662B]">
                {groomFamilyName}
              </span>
            </div>

            <p className="mt-4 text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] text-royal-brown/65">
              Patidar Pariwar • Sundrel, Dhar (M.P.)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FamilyInvitation;
